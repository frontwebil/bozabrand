/*
  Warnings:

  - You are about to drop the `Cases` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Cases";

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "categories" TEXT[],
    "imgUrl" TEXT NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseBlock" (
    "id" SERIAL NOT NULL,
    "caseId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CaseBlock_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Case_slug_key" ON "Case"("slug");

-- CreateIndex
CREATE INDEX "CaseBlock_caseId_idx" ON "CaseBlock"("caseId");

-- CreateIndex
CREATE INDEX "CaseBlock_caseId_order_idx" ON "CaseBlock"("caseId", "order");

-- AddForeignKey
ALTER TABLE "CaseBlock" ADD CONSTRAINT "CaseBlock_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE CASCADE ON UPDATE CASCADE;
