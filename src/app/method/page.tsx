import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { Faq } from "@/Components/MainPage/Faq/Faq";
import { Become } from "@/Components/MethodPage/Become/Become";
import { MethodHero } from "@/Components/MethodPage/MethodHero/MethodHero";
import { MethodUnderHeroText } from "@/Components/MethodPage/MethodUnderHeroText/MethodUnderHeroText";
import { StackCards } from "@/Components/MethodPage/StackCards/StackCards";
import { Strategy } from "@/Components/MethodPage/Strategy/Strategy";
import { Tactic } from "@/Components/MethodPage/Tactic/Tactic";

export default function Method() {
  return (
    <div style={{ background: "#e6e6e6" }}>
      <Header />
      <MethodHero />
      <MethodUnderHeroText />
      <StackCards />
      <Become />
      <Strategy />
      <Tactic />
      <Faq />
      <Footer />
    </div>
  );
}
