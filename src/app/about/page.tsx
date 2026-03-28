import { AboutContent } from "@/Components/AboutPage/AboutContent/AboutContent";
import { ForClient } from "@/Components/AboutPage/ForClient/ForClient";
import { NumbersAdvantages } from "@/Components/AboutPage/NumbersAdvantages/NumbersAdvantages";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";

export default function page() {
  return (
    <div style={{ background: "#EAEAEA" }}>
      <Header />
      <AboutContent />
      <ForClient />
      <NumbersAdvantages />
      <Footer />
    </div>
  );
}
