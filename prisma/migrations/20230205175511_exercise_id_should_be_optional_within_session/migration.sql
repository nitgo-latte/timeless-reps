-- DropForeignKey
ALTER TABLE "ExercisingSession" DROP CONSTRAINT "ExercisingSession_exerciseId_fkey";

-- AlterTable
ALTER TABLE "ExercisingSession" ALTER COLUMN "exerciseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ExercisingSession" ADD CONSTRAINT "ExercisingSession_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
