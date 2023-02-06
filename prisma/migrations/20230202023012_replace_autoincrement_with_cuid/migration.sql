/*
  Warnings:

  - The primary key for the `Exercise` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExercisingSession` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `MuscleGroup` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "ExercisingSession" DROP CONSTRAINT "ExercisingSession_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "TimeBox" DROP CONSTRAINT "TimeBox_exercisingSessionId_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciseToMuscleGroup" DROP CONSTRAINT "_ExerciseToMuscleGroup_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciseToMuscleGroup" DROP CONSTRAINT "_ExerciseToMuscleGroup_B_fkey";

-- AlterTable
ALTER TABLE "Exercise" DROP CONSTRAINT "Exercise_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Exercise_id_seq";

-- AlterTable
ALTER TABLE "ExercisingSession" DROP CONSTRAINT "ExercisingSession_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "exerciseId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ExercisingSession_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ExercisingSession_id_seq";

-- AlterTable
ALTER TABLE "MuscleGroup" DROP CONSTRAINT "MuscleGroup_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "MuscleGroup_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "MuscleGroup_id_seq";

-- AlterTable
ALTER TABLE "TimeBox" ALTER COLUMN "exercisingSessionId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "_ExerciseToMuscleGroup" ALTER COLUMN "A" SET DATA TYPE TEXT,
ALTER COLUMN "B" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "ExercisingSession" ADD CONSTRAINT "ExercisingSession_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeBox" ADD CONSTRAINT "TimeBox_exercisingSessionId_fkey" FOREIGN KEY ("exercisingSessionId") REFERENCES "ExercisingSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToMuscleGroup" ADD CONSTRAINT "_ExerciseToMuscleGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToMuscleGroup" ADD CONSTRAINT "_ExerciseToMuscleGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "MuscleGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
