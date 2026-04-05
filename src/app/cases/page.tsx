import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { OurDrivers } from "@/Components/ProjectsPage/OurDrivers/OurDrivers";
import { Projects } from "@/Components/ProjectsPage/Projects/Projects";
import { prisma } from "@/lib/prisma";

export default async function Cases() {
  const cases = await prisma.case.findMany({
    where: {
      isPublished: true,
    },
    orderBy: {
      order: "asc",
    },
  });
  return (
    <>
      <Header />
      <Projects cases={cases}/>
      <div className="sandwich-cases"></div>
      <OurDrivers />
      <Footer />
    </>
  );
}
