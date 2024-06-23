"use client";
import { useRouter } from "next/navigation";
import ProductCard from "../Cards/ProductCard";
import MoreButton from "@/components/buttons/moreButton";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { getStoreState } from "@/Redux/store";
import ProductListSkeleton from "../ProductListSkeleton";
import UseIsClient from "@/hooks/IsClient";

export default function New_Launches(prop: {
  tital: string;
  subtital: string;
}) {
  const route = useRouter();
  function ClickHandler() {
    route.push("/Products");
  }
  const products = useSelector(getStoreState).Products;
  const isClient = UseIsClient();
  return (
    <Container
      maxWidth="xl"
      className="flex flex-col justify-center items-center mt-7  my-7 px-3"
    >
      <div className="flex w-full justify-between gap-6 items-center">
        <h1 className="text-xl sm:text-3xl font-semibold">
          {prop.tital}{" "}
          <span className="text-base-color-500">{prop.subtital}</span>
        </h1>
        <div className="flex">
          <MoreButton name="View All" event={ClickHandler} />
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 mt-10 justify-center w-fit place-content-center items-center mx-auto gap-4  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {products.products?.data?.data?.length <= 0 && (
          <ProductListSkeleton count={4} />
        )}
        {isClient &&
          products.products?.data?.data?.length >= 1 &&
          products.products.data.data.map((e: any, i: number) => {
            if (i > 8) return;
            return (
              <ProductCard
                image={e.ProductsImage[0]}
                discription={e.Product_Description}
                id={e._id}
                key={e._id}
                peice={e.productSaleprice.$numberDecimal}
                rating={e.rating.$numberDecimal}
                slug={e.slug}
                supPrice={e.productprice.$numberDecimal}
                Stock={e.productStock.$numberDecimal}
                tital={e.ProducName}
              />
            );
          })}
      </div>
    </Container>
  );
}
