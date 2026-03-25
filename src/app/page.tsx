import { Header } from "@/Components/Header/Header";
import { HeroSection } from "@/Components/Hero/Hero";
import { RunningLine } from "@/Components/RunningLine/RunningLine";
import Team from "@/Components/Team/Team";
import { BestProducts } from "@/Components/TopProducts/Best";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <RunningLine />
      <BestProducts />
      <div className="sandwich"></div>
      <Team />
    </>
  );
}
