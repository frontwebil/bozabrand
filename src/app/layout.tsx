import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import "./reset.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

const inter = Inter({
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
      className={`${nunito.className} ${inter.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
