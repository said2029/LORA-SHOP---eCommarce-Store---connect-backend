import type { Metadata } from "next";
import {Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Fooetr from "@/components/footer/fooetr";
import {logoFavorite} from "@/Manager";
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  icons:{icon:[logoFavorite]},
  title: "LORASHOP",
  description: "eCommerc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={rubik.className}>
        <Header />
        {children}
        <Fooetr />
      </body>
    </html>
  );
}
