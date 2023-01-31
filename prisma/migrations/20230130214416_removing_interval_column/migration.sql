/*
  Warnings:

  - You are about to drop the `ExercisingInterval` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[exerciseId,breathingChainId]` on the table `ExercisingSession` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[exercisingSessionId]` on the table `TimeBox` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `closedAt` to the `TimeBox` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExercisingInterval" DROP CONSTRAINT "ExercisingInterval_timeBoxId_fkey";

-- DropIndex
DROP INDEX "ExercisingSession_breathingChainId_key";

-- AlterTable
ALTER TABLE "ExercisingSession" ADD COLUMN     "message" TEXT;

-- AlterTable
ALTER TABLE "TimeBox" ADD COLUMN     "closedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "resting" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "ExercisingInterval";

-- CreateIndex
CREATE UNIQUE INDEX "ExercisingSession_exerciseId_breathingChainId_key" ON "ExercisingSession"("exerciseId", "breathingChainId");

-- CreateIndex
CREATE UNIQUE INDEX "TimeBox_exercisingSessionId_key" ON "TimeBox"("exercisingSessionId");
