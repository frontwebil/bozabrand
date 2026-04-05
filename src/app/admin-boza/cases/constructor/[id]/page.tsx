import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import { ConstructorPage } from "./ConstructorPage";

export default async function CaseConstructorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const caseItem = await prisma.case.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      blocks: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (!caseItem) {
    return notFound();
  }

  return <ConstructorPage caseItem={caseItem} />;
}
