import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { OurDrivers } from "@/Components/ProjectsPage/OurDrivers/OurDrivers";
import { Projects } from "@/Components/ProjectsPage/Projects/Projects";

export default function Cases() {
  return (
    <>
      <Header />
      <Projects />
      <div className="sandwich-cases"></div>
      <OurDrivers />
      <Footer />
    </>
  );
}
