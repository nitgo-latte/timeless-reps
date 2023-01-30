-- CreateEnum
CREATE TYPE "Difficulty" AS ENUM ('EASY', 'MEDIUM', 'HARD');

-- CreateTable
CREATE TABLE "MuscleGroup" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "MuscleGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" "Difficulty" NOT NULL,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BreathingChain" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BreathingChain_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExercisingSession" (
    "id" SERIAL NOT NULL,
    "exerciseId" INTEGER NOT NULL,
    "breathingChainId" TEXT NOT NULL,

    CONSTRAINT "ExercisingSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TimeBox" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "exercisingSessionId" INTEGER NOT NULL,

    CONSTRAINT "TimeBox_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExercisingInterval" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "closedAt" TIMESTAMP(3) NOT NULL,
    "timeBoxId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ExerciseToMuscleGroup" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MuscleGroup_name_key" ON "MuscleGroup"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_name_key" ON "Exercise"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ExercisingSession_breathingChainId_key" ON "ExercisingSession"("breathingChainId");

-- CreateIndex
CREATE UNIQUE INDEX "ExercisingInterval_timeBoxId_key" ON "ExercisingInterval"("timeBoxId");

-- CreateIndex
CREATE UNIQUE INDEX "ExercisingInterval_createdAt_closedAt_key" ON "ExercisingInterval"("createdAt", "closedAt");

-- CreateIndex
CREATE UNIQUE INDEX "_ExerciseToMuscleGroup_AB_unique" ON "_ExerciseToMuscleGroup"("A", "B");

-- CreateIndex
CREATE INDEX "_ExerciseToMuscleGroup_B_index" ON "_ExerciseToMuscleGroup"("B");

-- AddForeignKey
ALTER TABLE "ExercisingSession" ADD CONSTRAINT "ExercisingSession_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercisingSession" ADD CONSTRAINT "ExercisingSession_breathingChainId_fkey" FOREIGN KEY ("breathingChainId") REFERENCES "BreathingChain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimeBox" ADD CONSTRAINT "TimeBox_exercisingSessionId_fkey" FOREIGN KEY ("exercisingSessionId") REFERENCES "ExercisingSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExercisingInterval" ADD CONSTRAINT "ExercisingInterval_timeBoxId_fkey" FOREIGN KEY ("timeBoxId") REFERENCES "TimeBox"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToMuscleGroup" ADD CONSTRAINT "_ExerciseToMuscleGroup_A_fkey" FOREIGN KEY ("A") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ExerciseToMuscleGroup" ADD CONSTRAINT "_ExerciseToMuscleGroup_B_fkey" FOREIGN KEY ("B") REFERENCES "MuscleGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
