import ProductCard from "./Cards/ProductCard";
import ProductCardSkeleton from "./Cards/ProductCardSkeleton";

export default function ProductListSkeleton({ count }: { count: number }) {
  const cards: React.ReactNode[] = [];
  for (let index = 0; index < count; index++) {
    cards.push(<ProductCardSkeleton key={index} />);
  }


  return cards;
}
