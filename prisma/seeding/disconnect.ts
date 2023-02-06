import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const disconnectMuscleGroups = async (exerciseId: string) => {
  await prisma.exercise.update({
    data: {
      muscleGroups: {
        set: [],
      },
    },
    where: {
      id: exerciseId,
    },
  })
}

const main = async () => {
  const ex = await prisma.exercise.findUnique({
    where: {
      id: "323",
    },
  })
  if (!ex) {
    return
  }
  await disconnectMuscleGroups(ex.id)
}

main()
