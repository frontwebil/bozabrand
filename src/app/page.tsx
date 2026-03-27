import { Faq } from "@/Components/MainPage/Faq/Faq";
import { Footer } from "@/Components/Layout/Footer/Footer";
import { Header } from "@/Components/Layout/Header/Header";
import { RunningLine } from "@/Components/MainPage/RunningLine/RunningLine";
import { BestProducts } from "@/Components/MainPage/TopProducts/Best";
import { VideoInfoGraph } from "@/Components/MainPage/VideoInfoGraph/VideoInfoGraph";
import { HeroSection } from "@/Components/MainPage/Hero/Hero";
import Team from "@/Components/MainPage/Team/Team";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <RunningLine />
      <BestProducts />
      <div className="sandwich"></div>
      <Team />
      <VideoInfoGraph />
      <Faq />
      <Footer />
    </>
  );
}
