import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import {
  caseBlocksRegistry,
  CaseBlockType,
} from "@/Components/CasesTemplates/registry";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import "./style.css";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function CasePage({ params }: Props) {
  const { slug } = await params;

  const caseItem = await prisma.case.findUnique({
    where: { slug },
    include: {
      blocks: {
        orderBy: { order: "asc" },
      },
    },
  });

  if (!caseItem || !caseItem.isPublished) {
    return notFound();
  }

  return (
    <div className="case-site-inner">
      <Header />
      {caseItem.blocks.map((block) => {
        const registryItem = caseBlocksRegistry[block.type as CaseBlockType];
        if (!registryItem) {
          return null;
        }

        const BlockComponent = registryItem.component;
        return <BlockComponent key={block.id} data={block.data as never} />;
      })}
      <Footer />
    </div>
  );
}
