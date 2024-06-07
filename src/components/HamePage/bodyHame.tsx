import HeroSection from "@/components/heroSection/heroSection";
import ExploreSale from "../ExploreSales/ExploreSale";
import ShopByCat from "../ShopByCategory/ShopByCat";
import DailyDeals from "../DailyDeals/DailyDeals";
import DeliveryCard from "../deliveryCard";
import New_Launches from "../ExploreSales/New_Launches";
// import ShopByLifeStyle from "../ExploreSales/Llifestyle";

export default function BodyHame() {
  return (
    <>
      <HeroSection />
      <New_Launches tital="New" subtital="Launches" />
      {/* Shop by category */}
      <ShopByCat />
      <DailyDeals />
      <DeliveryCard />
      {/* bast saler */}
      <ExploreSale tital="Explore" subtital="Bestsellers" />
      {/* <ShopByLifeStyle tital="Shop By" subtital="Lifestyles" /> */}
    </>
  );
}
