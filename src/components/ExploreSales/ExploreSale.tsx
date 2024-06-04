"use client";
import { useRouter } from "next/navigation";
import ProductCard from "../Cards/ProductCard";
import MoreButton from "@/components/buttons/moreButton";
import { Container } from "@mui/material";

export default function ExploreSale(prop: { tital: string; subtital: string }) {
  const route = useRouter();
  function ClickHandler() {
    route.push("/Products");
  }
  return (
    <Container className="flex flex-col justify-center items-center mt-7 px-3">
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
        <ProductCard image="https://img.freepik.com/free-psd/smartwatch-mock-up-with-grey-watchstrap_1104-110.jpg?t=st=1716586319~exp=1716589919~hmac=49de8c2478d4e514491f41d4ee0ff9b0a60d7f3a0377570025e15fc8da496868&w=740"/>
        <ProductCard image="https://img.freepik.com/free-photo/modern-wireless-charger-tray-with-concrete-background_23-2150808024.jpg?t=st=1716586350~exp=1716589950~hmac=c8d320d0efb826cc9dac774e67bf7fdc96be60974f528016d08b657b2a8667bb&w=740"/>
        <ProductCard image="https://img.freepik.com/free-vector/camera-accessory_1284-13130.jpg?t=st=1716586389~exp=1716589989~hmac=657b5a191eafa07a747b3711911c51be8b677738609d85f27290679ff9596bb7&w=740"/>
        <ProductCard image="https://img.freepik.com/free-photo/managing-smart-speakers-concept_23-2150170098.jpg?t=st=1716586428~exp=1716590028~hmac=54f44d5cafac693ea63b10ac9c483e4bd8f8f545f6038555da266c0be783e143&w=996"/>
      </div>
    </Container>
  );
}
