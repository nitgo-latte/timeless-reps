import { rand, randNumber, random, seed } from "@ngneat/falso"
import {
  Difficulty,
  MuscleGroupEnum,
  Prisma,
  PrismaClient,
} from "@prisma/client"
import * as dotenv from "dotenv"
import { MuscleGroupCreateManyInput } from "./generated/type-graphql/resolvers/inputs/MuscleGroupCreateManyInput"
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
  console.log("syncing exercises w/ muscle groups...")
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

    await prisma.$executeRawUnsafe(query)
  })
}

const createBreathingChains = async () => {
  const data: Prisma.Enumerable<Prisma.BreathingChainCreateManyInput> =
    new Array(4).fill(-1).map((_v, idx) => ({
      description: `breathing wondrously on island ${idx}`,
    }))
  const res = await prisma.breathingChain.createMany({
    data,
    skipDuplicates: true,
  })
  psqlNoise(res, "BreathingChain")
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
  await createBreathingChains()

  /*
    TODO: create exercising sessions
      TODO: create time boxes for each session
    TODO: connect the sessions with the chains
   */
}

main()
