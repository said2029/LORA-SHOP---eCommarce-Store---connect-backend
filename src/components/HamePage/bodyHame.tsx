import HeroSection from "@/components/heroSection/heroSection";
import ShopByCat from "../ShopByCategory/ShopByCat";
import DailyDeals from "../DailyDeals/DailyDeals";
import New_Launches from "../ExploreSales/New_Launches";
// import ShopByLifeStyle from "../ExploreSales/Llifestyle";

export default function BodyHame() {
  return (
    <>
      <HeroSection />
      <New_Launches tital="New" subtital="Launches" />
      {/* Shop by category */}
      <DailyDeals />
      <ShopByCat />
      {/* <ShopByLifeStyle tital="Shop By" subtital="Lifestyles" /> */}
    </>
  );
}
