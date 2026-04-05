/*
  Warnings:

  - You are about to drop the `Case` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Case";

-- CreateTable
CREATE TABLE "Cases" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "categoryes" TEXT[],
    "slug" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cases_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cases_slug_key" ON "Cases"("slug");
