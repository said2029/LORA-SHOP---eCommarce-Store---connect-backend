import { Rubik,Lato,Roboto} from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Fooetr from "@/components/footer/fooetr";
import { Providers } from "../components/providers";
const rubik = Roboto({
  subsets: ["latin-ext"],
  weight: ["400","700","900","100","300","500"],
});

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LORASHOP",
  description: "eCommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={rubik.className}>
        <Providers>
          <Header />
          {children}
          <Fooetr />
        </Providers>
      </body>
    </html>
  );
}
