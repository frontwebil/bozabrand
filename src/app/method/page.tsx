import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { Faq } from "@/Components/MainPage/Faq/Faq";
import { MethodHero } from "@/Components/MethodPage/MethodHero/MethodHero";
import { MethodUnderHeroText } from "@/Components/MethodPage/MethodUnderHeroText/MethodUnderHeroText";
import { StackCards } from "@/Components/MethodPage/StackCards/StackCards";

export default function Method() {
  return (
    <div style={{ background: "#e6e6e6" }}>
      <Header />
      <MethodHero />
      <MethodUnderHeroText />
      <StackCards />
      <Faq />
      <Footer />
    </div>
  );
}
