import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import "./reset.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BOZABRAND",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
