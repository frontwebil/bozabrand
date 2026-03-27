import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { SwapSections } from "@/Components/TeamPage/SwapSections/SwapSections";
import { TeamSection } from "@/Components/TeamPage/TeamSection/TeamSection";
import { Welcome } from "@/Components/TeamPage/Welcome/Welcome";

export default function page() {
  return (
    <>
      <Header />
      <SwapSections />
      <Welcome />
      <TeamSection />
      <Footer />
    </>
  );
}
