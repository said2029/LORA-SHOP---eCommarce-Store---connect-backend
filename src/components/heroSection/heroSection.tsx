"use client";
import { Box, Container } from "@mui/material";

import { CarouselHome } from "../Carousel/CarouselHome";
import CoponeCard from "./coponeCard";
import { useSelector } from "react-redux";
import { getStoreState } from "@/Redux/store";
import MoreButton from "../buttons/moreButton";
export default function HeroSection() {
  const coupons = useSelector(getStoreState).Coupons?.copons?.body;
  return (
    <Container
      maxWidth="xl"
      className="h-fit w-full mt-7 grid grid-cols-9 py-4 gap-3 overflow-hidden bg-gray-100 "
    >
      <div className="w-full h-full col-span-full lg:col-span-5  overflow-hidden">
        <CarouselHome />
      </div>

      <Box className="gap-6 col-span-4 grid-rows-1 h-full hidden lg:grid ">
        <Box className="relative overflow-hidden rounded-xl border-2 border-[#fefae0]">
          <div className="w-full py-4 bg-[#faa307] shadow-sm text-center flex justify-between px-4 items-center">
            <p className="font-semibold text-white text-nowrap text-center">
              Latest Super Discount Active Coupon Code
            </p>
            <MoreButton name="View All" event={() => {}} />
          </div>
          <div className="flex flex-col gap-2 w-full h-full">
            {coupons?.map((e: any, i: number) => {
              if (i >= 2) return;
              return <CoponeCard key={e._id} coupon={e}/>;
            })}
          </div>
        </Box>
      </Box>
    </Container>
  );
}
