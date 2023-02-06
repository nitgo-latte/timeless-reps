import {
  rand,
  randBetweenDate,
  randBoolean,
  randCatchPhrase,
  randDrinks,
  randFutureDate,
  randNumber,
  random,
  seed,
} from "@ngneat/falso"
import { v4 as uuidv4 } from "uuid"
import {
  Difficulty,
  MuscleGroupEnum,
  Prisma,
  PrismaClient,
} from "@prisma/client"
import { addSeconds, differenceInSeconds, isFuture } from "date-fns"
import * as dotenv from "dotenv"
import { MuscleGroupCreateManyInput } from "../generated/type-graphql/resolvers/inputs/MuscleGroupCreateManyInput"
import { convertToDayString, evenConfig, oddConfig } from "./utils"
import { TimeBox } from "../generated/type-graphql/models/TimeBox"
dotenv.config()

const prisma = new PrismaClient()

const psqlNoise = (res: Prisma.BatchPayload, modelName: string) => {
  const statement = !res.count
    ? `skipped creating ${modelName}s for there exist dummy ones in the db`
    : `created ${res.count} dummy ${modelName}s`
  console.log(statement)
}

const createMuscleGroups = async () => {
  const muscleGroupVals = Object.values(MuscleGroupEnum)
  const data: Prisma.Enumerable<MuscleGroupCreateManyInput> =
    muscleGroupVals.map((name) => ({ name }))
  const res = await prisma.muscleGroup.createMany({
    data,
    skipDuplicates: true,
  })
  psqlNoise(res, "MuscleGroup")
}

const createExercises = async () => {
  const difficultyLevels = Object.values(Difficulty)
  const names = [
    "single arm negative",
    "alternating pronated curls",
    "dumbbell forearm curls pronated",
    "curl & press",
    "leg press",
    "sit up",
    "push up",
    "regular squat",
    "chin up",
    "bicep curl",
    "crunches",
  ]

  const data: Prisma.Enumerable<Prisma.ExerciseCreateManyInput> = new Array(21)
    .fill(-1)
    .map(() => {
      const difficultyIdx = randNumber({
        min: 0,
        max: difficultyLevels.length - 1,
      })
      const nameIdx = Math.floor(random() * names.length)
      return {
        name: names[nameIdx],
        difficulty: difficultyLevels[difficultyIdx],
      }
    })

  const res = await prisma.exercise.createMany({
    data,
    skipDuplicates: true,
  })
  psqlNoise(res, "Exercise")
}

const syncExerciseToMuscleGroups = async () => {
  const muscleGroups = await prisma.muscleGroup.findMany()
  const muscleGroupIds = muscleGroups.map((mg) => mg.id)
  const exercises = await prisma.exercise.findMany()
  exercises.forEach(async (exercise) => {
    const randomFloat = random()
    const mgLength = randomFloat < 0.51 ? 1 : randomFloat < 0.72 ? 2 : 3
    // prisma will remove dupe mg ids
    const randomMuscleGroupIds = rand(muscleGroupIds, { length: mgLength })
    const values = randomMuscleGroupIds.map(
      (gid) => `('${exercise!.id}', '${gid}')`
    )
    const query = `INSERT INTO "_ExerciseToMuscleGroup" ("A", "B") VALUES ${values.join(
      ","
    )} ON CONFLICT DO NOTHING;`

    await prisma.$queryRawUnsafe(query)
  })
  console.log("syncing exercises to muscle groups...")
}

const syncTimeBoxesToSessions = async () => {
  const exSessions = await prisma.exercisingSession.findMany()
  const randomDates = randBetweenDate({
    from: new Date("10/07/2022"),
    to: new Date(),
    length: 78,
  })
  const seenDays = new Set<string>()
  let deleteCount = randNumber({ min: 2, max: 7 })
  while (exSessions.length > 0) {
    while (exSessions.length - deleteCount === 1) {
      deleteCount = randNumber({ min: 2, max: 7 })
    }
    const deleted = exSessions.splice(0, deleteCount)
    let timestamp = rand(randomDates)
    let dayString = convertToDayString(timestamp)
    while (seenDays.has(dayString)) {
      timestamp = rand(randomDates)
      dayString = convertToDayString(timestamp)
    }

    for (let session of deleted) {
      const boxes = await createDummyTimeBoxes(timestamp)
      const values = boxes.map((box) => `'${box.id}'`)
      const query = `UPDATE "TimeBox" SET "exercisingSessionId" = '${
        session.id
      }' WHERE id IN (${values.join(",")});`
      await prisma.$executeRawUnsafe(query)
    }
    seenDays.add(dayString)
  }
  console.log("syncing timeBoxes to exercising sessions...")
}

const createDummySessions = async () => {
  const exercises = await prisma.exercise.findMany()
  const sessionsCounter: Prisma.BatchPayload = {
    count: 0,
  }

  let i = 0 // num of exercising days
  while (i < 12) {
    const sessions: Prisma.ExercisingSessionCreateManyInput[] = []
    const sessionsSize = randNumber({ min: 2, max: 7 }) // assuming seed users do 2-7 sessions in one day
    const seenExerciseIds = new Set<string>()
    let j = 0
    while (j < sessionsSize) {
      const randExercise = rand(exercises)
      if (seenExerciseIds.has(randExercise.id)) {
        continue
      }
      const randomDrink = randDrinks()
      const adjective = randBoolean() ? "benevolent" : "toxic"
      const session = {
        message: `Under the ${adjective} influence of ${randomDrink}, bob suddenly realized ${randCatchPhrase()}`,
        exerciseId: randExercise.id,
      }
      sessions.push(session)
      j++
    }

    const res = await prisma.exercisingSession.createMany({
      data: sessions,
    })
    sessionsCounter.count += res.count
    i++
  }
  psqlNoise(sessionsCounter, "ExercisingSessions")
}

const createDummyTimeBoxes = async (timestamp: Date): Promise<TimeBox[]> => {
  const buffer = 4
  const boxIds: string[] = []
  let timeBoxGap = 0 // used to accurately calculate start time for the next box
  let boxStart = timestamp
  let boxEnd = randFutureDate()
  const size = randNumber({ min: 3, max: 7 })
  // multiply by two to get even numbers of resting/exercising boxes
  const timeBoxData = new Array(size * 2).fill(-1).map((_v, i) => {
    // apply the gap after the first box
    if (i > 0 && !isFuture(boxEnd)) {
      boxStart = addSeconds(boxEnd, timeBoxGap)
    }
    const seconds = randNumber(i % 2 === 0 ? evenConfig : oddConfig)
    boxEnd = addSeconds(boxStart, seconds)
    const secondsElapsed = differenceInSeconds(boxEnd, boxStart)
    timeBoxGap += secondsElapsed + 2 * buffer
    const boxId = uuidv4()
    boxIds.push(boxId)
    return {
      id: boxId,
      resting: i % 2 !== 0,
      start: boxStart,
      end: boxEnd,
    }
  })

  const res = await prisma.timeBox.createMany({
    data: timeBoxData,
  })
  psqlNoise(res, "TimeBox")

  const timeBoxes = await prisma.timeBox.findMany({
    where: {
      id: {
        in: boxIds,
      },
    },
  })
  return timeBoxes
}

const main = async () => {
  seed(process.env.FALSO_CONSTANT)

  /*
    given 7 weeks, create 3 - 5 chains for each week;
    each chain should contain 2-4 sessions
    each session should have 3 - 7 timeboxes
  */
  await createMuscleGroups()
  await createExercises()
  await syncExerciseToMuscleGroups()
  await createDummySessions()
  await syncTimeBoxesToSessions()
  /*
    TODO: create exercising sessions
      TODO: create time boxes for each session
   */
}

main()
