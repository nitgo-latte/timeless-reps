/*
  Warnings:

  - You are about to drop the column `closedAt` on the `TimeBox` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `TimeBox` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `ExercisingSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end` to the `TimeBox` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `TimeBox` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TimeBox" DROP CONSTRAINT "TimeBox_exercisingSessionId_fkey";

-- AlterTable
ALTER TABLE "ExercisingSession" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TimeBox" DROP COLUMN "closedAt",
DROP COLUMN "createdAt",
ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "exercisingSessionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "TimeBox" ADD CONSTRAINT "TimeBox_exercisingSessionId_fkey" FOREIGN KEY ("exercisingSessionId") REFERENCES "ExercisingSession"("id") ON DELETE SET NULL ON UPDATE CASCADE;
