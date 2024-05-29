import HeroSection from "@/components/heroSection";
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
      {/* bast saler */}
      <ExploreSale tital="Explore" subtital="Bestsellers" />
      {/* Shop by category */}
      <ShopByCat />
      <DailyDeals />
      <DeliveryCard />
      <New_Launches tital="New" subtital="Launches" />
      {/* <ShopByLifeStyle tital="Shop By" subtital="Lifestyles" /> */}
    </>
  );
}
