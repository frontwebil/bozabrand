import type { Metadata } from "next";
import { Inter, Nunito_Sans, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import "./reset.css";
import { ScrollToTop } from "@/Components/Layout/ScrollToTop";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

const madefor = Wix_Madefor_Text({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOZABRAND",
  description:
    "Ми занурюємось на глибину 11 тисяч метрів, щоб віднайти серце твого бренду. Стратегія, дизайн і сайти, що відчуваються.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${nunito.className} ${inter.className} ${madefor.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollToTop />
        <main>{children}</main>
      </body>
    </html>
  );
}
