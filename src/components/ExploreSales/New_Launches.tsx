"use client";
import { useRouter } from "next/navigation";
import ProductCard from "../Cards/ProductCard";
import MoreButton from "@/components/buttons/moreButton";
import { Container } from "@mui/material";

export default function New_Launches(prop: { tital: string; subtital: string }) {
  const route = useRouter();
  function ClickHandler() {
    route.push("/Products");
  }
  return (
    <Container className="flex flex-col justify-center items-center mt-7 px-3 md:px-0 ">
      <div className="flex w-full justify-between gap-6 items-center">
        <h1 className="text-3xl font-semibold">
          {prop.tital} <span className="text-blue-600">{prop.subtital}</span>
        </h1>
        <div className="flex">
          <MoreButton name="View All" event={ClickHandler} />
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 mt-10 justify-center items-center mx-auto gap-4 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
        <ProductCard image=""/>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </Container>
  );
}
