import { Header } from "@/Components/Header/Header";
import { HeroSection } from "@/Components/Hero/Hero";
import { RunningLine } from "@/Components/RunningLine/RunningLine";
import { BestProducts } from "@/Components/TopProducts/Best";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <RunningLine />
      <BestProducts />
            <div className="" style={{
        background:"linear-gradient(180deg, #18038C 0%, #090136 100%)",
        height:"270px"
      }}></div>
    </>
  );
}
