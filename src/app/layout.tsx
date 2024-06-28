import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Fooetr from "@/components/footer/fooetr";
import { Providers } from "../components/providers/providers";
const rubik = Roboto({
  subsets: ["latin-ext"],
  weight: ["400", "700", "900", "100", "300", "500"],
});

import { Metadata } from "next";
import ColorProvider from "@/components/providers/ColorProvider";
import dynamic from "next/dynamic";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const fetchSEOSettings = async () => {
  try {
    const respons = await fetch(process.env.BACKENDURL + "/setting/GetSeoSetting",{
      cache:"force-cache"
    });
    const SEO = await respons.json();
    return SEO;
  } catch (error) {
    console.error("Failed to fetch SEO settings:", error);
    return {
      body: {
        SeoSetting_tital: "Default Title",
        SeoSetting_Description: "Default Description",
        SeoSetting_Kaywords: "Default Keywords",
        SeoSetting_image: "/default-icon.png",
      },
    };
  }
};

const SEO: any = await fetchSEOSettings();

export const metadata: Metadata = {
  title: SEO?.body?.SeoSetting_tital,
  description: SEO?.body?.SeoSetting_Description,
  keywords: SEO?.body?.SeoSetting_Kaywords,
  icons: {
    icon: SEO?.body?.SeoSetting_image,
  },
  // Add more meta tags here...
  // <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const Mobile_header = dynamic(
    () => import("@/components/header/_componets/mobile_header"),
    { ssr: false, }
  )
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"
        ></meta>
      </head>
      <body suppressHydrationWarning={true} className={rubik.className}>
        <Providers>
          <ColorProvider>
            <Header />
            {children}
            <Fooetr />
            {/* modile Header */}
            <Mobile_header />
            {/* Toasit / natefction */}
            <ToastContainer position='top-center' />

          </ColorProvider>
        </Providers>
      </body>
    </html>
  );
}