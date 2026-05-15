import { CaseDetailContent } from "@/Components/Cases/CaseDetailContent";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { PublicCaseDetail } from "@/lib/casesLocale";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import "./style.css";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

const caseListSelect = {
  id: true,
  title: true,
  subTitle: true,
  slug: true,
  categories: true,
  imgUrl: true,
  order: true,
} as const;

function toPublicCaseDetail(
  row: {
    id: number;
    title: string;
    subTitle: string;
    slug: string;
    categories: string[];
    imgUrl: string;
    order: number;
    blocks: { id: number; type: string; order: number; data: unknown }[];
  },
): PublicCaseDetail {
  return {
    id: row.id,
    title: row.title,
    subTitle: row.subTitle,
    slug: row.slug,
    categories: row.categories,
    imgUrl: row.imgUrl,
    order: row.order,
    blocks: row.blocks.map((block) => ({
      id: block.id,
      type: block.type,
      order: block.order,
      data: block.data,
    })),
  };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;

  const [ukCase, enCase, ukTopCases, enTopCases] = await Promise.all([
    prisma.case.findUnique({
      where: { slug },
      include: {
        blocks: { orderBy: { order: "asc" } },
      },
    }),
    prisma.caseEng.findUnique({
      where: { slug },
      include: {
        blocks: { orderBy: { order: "asc" } },
      },
    }),
    prisma.case.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
      take: 2,
      select: caseListSelect,
    }),
    prisma.caseEng.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
      take: 2,
      select: caseListSelect,
    }),
  ]);

  const ukPublished = ukCase?.isPublished ? toPublicCaseDetail(ukCase) : null;
  const enPublished = enCase?.isPublished ? toPublicCaseDetail(enCase) : null;

  if (!ukCase && !enCase) {
    return notFound();
  }

  if (!ukPublished && !enPublished) {
    return notFound();
  }

  return (
    <div className="case-site-inner">
      <Header />
      <CaseDetailContent
        ukCase={ukPublished}
        enCase={enPublished}
        ukTopCases={ukTopCases}
        enTopCases={enTopCases}
      />
      <Footer />
    </div>
  );
}
