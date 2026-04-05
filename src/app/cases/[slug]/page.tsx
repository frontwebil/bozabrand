import { ComponentImage } from "@/Components/CasesTemplates/MainImg/Component";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";

export default function page() {
  return (
    <div style={{ marginTop: "80px", background: "rgba(255, 255, 255, 1)" }}>
      <Header />
      <ComponentImage />
      <Footer />
    </div>
  );
}
