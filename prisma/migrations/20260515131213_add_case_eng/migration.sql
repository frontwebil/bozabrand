-- CreateTable
CREATE TABLE "CaseEng" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "categories" TEXT[],
    "imgUrl" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CaseEng_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CaseBlockEng" (
    "id" SERIAL NOT NULL,
    "caseId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CaseBlockEng_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CaseEng_slug_key" ON "CaseEng"("slug");

-- CreateIndex
CREATE INDEX "CaseBlockEng_caseId_idx" ON "CaseBlockEng"("caseId");

-- CreateIndex
CREATE INDEX "CaseBlockEng_caseId_order_idx" ON "CaseBlockEng"("caseId", "order");

-- AddForeignKey
ALTER TABLE "CaseBlockEng" ADD CONSTRAINT "CaseBlockEng_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "CaseEng"("id") ON DELETE CASCADE ON UPDATE CASCADE;
