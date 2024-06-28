import HeroSection from "@/components/heroSection/heroSection";
import ShopByCat from "../ShopByCategory/ShopByCat";
import DailyDeals from "../DailyDeals/DailyDeals";
import New_Launches from "../ExploreSales/New_Launches";
import { Suspense } from "react";
// import ShopByLifeStyle from "../ExploreSales/Llifestyle";

export default function BodyHame() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={"<p>Loading...</p>"}>

        <New_Launches tital="New" subtital="Launches" />
      </Suspense>
      {/* Shop by category */}
      <ShopByCat />
      <DailyDeals />


    </>
  );
}
