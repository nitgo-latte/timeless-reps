/*
  Warnings:

  - Changed the type of `name` on the `MuscleGroup` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "MuscleGroupEnum" AS ENUM ('CHEST', 'TRICEPS', 'BACK', 'SHOULDERS', 'CORE', 'ABS', 'LEGS', 'HIPS');

-- DropIndex
DROP INDEX "MuscleGroup_name_key";

-- AlterTable
ALTER TABLE "MuscleGroup" DROP COLUMN "name",
ADD COLUMN     "name" "MuscleGroupEnum" NOT NULL;
