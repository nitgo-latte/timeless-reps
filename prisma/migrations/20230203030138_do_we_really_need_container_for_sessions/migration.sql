/*
 Warnings:
 
 - You are about to drop the column `breathingChainId` on the `ExercisingSession` table. All the data in the column will be lost.
 - You are about to drop the `BreathingChain` table. If the table is not empty, all the data it contains will be lost.
 - A unique constraint covering the columns `[exerciseId]` on the table `ExercisingSession` will be added. If there are existing duplicate values, this will fail.
 
 */
-- DropForeignKey
ALTER TABLE
  "ExercisingSession" DROP CONSTRAINT "ExercisingSession_breathingChainId_fkey";

-- DropIndex
DROP INDEX "ExercisingSession_exerciseId_breathingChainId_key";

-- AlterTable
ALTER TABLE
  "ExercisingSession" DROP COLUMN "breathingChainId";

-- DropTable
DROP TABLE "BreathingChain";

-- CreateIndex
CREATE UNIQUE INDEX "ExercisingSession_exerciseId_key" ON "ExercisingSession"("exerciseId");