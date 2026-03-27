import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { SwapSections } from "@/Components/TeamPage/SwapSections/SwapSections";
import { Welcome } from "@/Components/TeamPage/Welcome/Welcome";

export default function page() {
  return (
    <>
      <Header />
      <SwapSections />
      <Welcome />
      <Footer />
    </>
  );
}
