import type { Metadata } from "next";
import {
  Inter,
  Mulish,
  Nunito_Sans,
  Playfair,
  Wix_Madefor_Text,
} from "next/font/google";
import "./globals.css";
import "./reset.css";
import { ScrollToTop } from "@/Components/Layout/ScrollToTop";
import { SessionAuthProvider } from "@/providers/SessionAuthProvider";

const nunito = Nunito_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const madefor = Wix_Madefor_Text({ subsets: ["latin"] });
const mulish = Mulish({ subsets: ["latin"] });
const playfair = Playfair({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BOZABRAND",
  description:
    "Ми занурюємось на глибину 11 тисяч метрів, щоб віднайти серце твого бренду. Стратегія, дизайн і сайти, що відчуваються.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.className} ${inter.className} ${madefor.className} ${mulish.className} ${playfair.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionAuthProvider>
          <ScrollToTop />
          <main>{children}</main>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
