import type { Prisma } from "@/generated/prisma/client";
import { prisma } from "@/lib/prisma";

type CaseWithBlocks = {
  title: string;
  subTitle: string;
  slug: string;
  categories: string[];
  imgUrl: string;
  order: number;
  isPublished: boolean;
  blocks: { type: string; order: number; data: Prisma.InputJsonValue }[];
};

async function loadUkrCase(ukrCaseId: number): Promise<CaseWithBlocks | null> {
  const row = await prisma.case.findUnique({
    where: { id: ukrCaseId },
    include: {
      blocks: { orderBy: { order: "asc" } },
    },
  });

  if (!row) return null;

  return {
    title: row.title,
    subTitle: row.subTitle,
    slug: row.slug,
    categories: row.categories,
    imgUrl: row.imgUrl,
    order: row.order,
    isPublished: row.isPublished,
    blocks: row.blocks.map((block) => ({
      type: block.type,
      order: block.order,
      data: block.data as Prisma.InputJsonValue,
    })),
  };
}

async function loadEngCase(engCaseId: number): Promise<CaseWithBlocks | null> {
  const row = await prisma.caseEng.findUnique({
    where: { id: engCaseId },
    include: {
      blocks: { orderBy: { order: "asc" } },
    },
  });

  if (!row) return null;

  return {
    title: row.title,
    subTitle: row.subTitle,
    slug: row.slug,
    categories: row.categories,
    imgUrl: row.imgUrl,
    order: row.order,
    isPublished: row.isPublished,
    blocks: row.blocks.map((block) => ({
      type: block.type,
      order: block.order,
      data: block.data as Prisma.InputJsonValue,
    })),
  };
}

async function replaceEngBlocks(
  engCaseId: number,
  blocks: CaseWithBlocks["blocks"],
) {
  await prisma.$transaction(async (tx) => {
    await tx.caseBlockEng.deleteMany({ where: { caseId: engCaseId } });

    if (blocks.length === 0) return;

    await tx.caseBlockEng.createMany({
      data: blocks.map((block, index) => ({
        caseId: engCaseId,
        type: block.type,
        order: index,
        data: block.data,
      })),
    });
  });
}

async function replaceUkrBlocks(
  ukrCaseId: number,
  blocks: CaseWithBlocks["blocks"],
) {
  await prisma.$transaction(async (tx) => {
    await tx.caseBlock.deleteMany({ where: { caseId: ukrCaseId } });

    if (blocks.length === 0) return;

    await tx.caseBlock.createMany({
      data: blocks.map((block, index) => ({
        caseId: ukrCaseId,
        type: block.type,
        order: index,
        data: block.data,
      })),
    });
  });
}

export async function copyUkrCaseToEng(ukrCaseId: number, engCaseId: number) {
  const source = await loadUkrCase(ukrCaseId);
  if (!source) {
    throw new Error("UKR_CASE_NOT_FOUND");
  }

  const target = await prisma.caseEng.findUnique({ where: { id: engCaseId } });
  if (!target) {
    throw new Error("ENG_CASE_NOT_FOUND");
  }

  await prisma.caseEng.update({
    where: { id: engCaseId },
    data: {
      title: source.title,
      subTitle: source.subTitle,
      categories: source.categories,
      imgUrl: source.imgUrl,
      order: source.order,
      isPublished: source.isPublished,
    },
  });

  await replaceEngBlocks(engCaseId, source.blocks);

  return prisma.caseEng.findUnique({
    where: { id: engCaseId },
    include: { blocks: { orderBy: { order: "asc" } } },
  });
}

export async function copyEngCaseToUkr(engCaseId: number, ukrCaseId: number) {
  const source = await loadEngCase(engCaseId);
  if (!source) {
    throw new Error("ENG_CASE_NOT_FOUND");
  }

  const target = await prisma.case.findUnique({ where: { id: ukrCaseId } });
  if (!target) {
    throw new Error("UKR_CASE_NOT_FOUND");
  }

  await prisma.case.update({
    where: { id: ukrCaseId },
    data: {
      title: source.title,
      subTitle: source.subTitle,
      categories: source.categories,
      imgUrl: source.imgUrl,
      order: source.order,
      isPublished: source.isPublished,
    },
  });

  await replaceUkrBlocks(ukrCaseId, source.blocks);

  return prisma.case.findUnique({
    where: { id: ukrCaseId },
    include: { blocks: { orderBy: { order: "asc" } } },
  });
}

export async function createEngCaseFromUkr(ukrCaseId: number) {
  const source = await loadUkrCase(ukrCaseId);
  if (!source) {
    throw new Error("UKR_CASE_NOT_FOUND");
  }

  const existingEng = await prisma.caseEng.findUnique({
    where: { slug: source.slug },
  });

  if (existingEng) {
    throw new Error("ENG_SLUG_EXISTS");
  }

  const created = await prisma.caseEng.create({
    data: {
      title: source.title,
      subTitle: source.subTitle,
      slug: source.slug,
      categories: source.categories,
      imgUrl: source.imgUrl,
      order: source.order,
      isPublished: false,
    },
  });

  await replaceEngBlocks(created.id, source.blocks);

  return prisma.caseEng.findUnique({
    where: { id: created.id },
    include: { blocks: { orderBy: { order: "asc" } } },
  });
}
