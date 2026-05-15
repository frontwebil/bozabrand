import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { OurDrivers } from "@/Components/ProjectsPage/OurDrivers/OurDrivers";
import { Projects } from "@/Components/ProjectsPage/Projects/Projects";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const caseListSelect = {
  id: true,
  title: true,
  subTitle: true,
  slug: true,
  categories: true,
  imgUrl: true,
  order: true,
} as const;

export default async function Cases() {
  const [ukCases, enCases] = await Promise.all([
    prisma.case.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
      select: caseListSelect,
    }),
    prisma.caseEng.findMany({
      where: { isPublished: true },
      orderBy: { order: "asc" },
      select: caseListSelect,
    }),
  ]);

  return (
    <>
      <Header />
      <Projects ukCases={ukCases} enCases={enCases} />
      <div className="sandwich-cases"></div>
      <OurDrivers />
      <Footer />
    </>
  );
}
