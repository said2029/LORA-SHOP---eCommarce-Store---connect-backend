"use client";
import { Box, Container } from "@mui/material";


import { CarouselHome } from "./Carousel/CarouselHome";
import TimarCopon from "./TimarCopons";
export default function HeroSection() {
  return (
    <Container maxWidth="xl"  className="h-fit w-full mt-7 grid grid-cols-9 py-4 gap-3 overflow-hidden bg-gray-100">
      <div className="w-full h-full col-span-full lg:col-span-5  overflow-hidden">
        <CarouselHome />
      </div>

      <Box className="gap-6 col-span-4 grid-rows-1 h-full hidden lg:grid ">
        <Box className="relative overflow-hidden rounded-md border border-blue-700">
          <div className="w-full py-4 bg-blue-300 shadow-sm text-center">
            <p className="font-medium text-nowrap text-center">
              Latest Super Discount Active Coupon Code
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full h-full">
            <div className="h-32 w-full grid grid-cols-6 gap-2 px-4 py-2">
              <div className="col-span-4 py-1 px-1 flex gap-2">
                <div className="h-full w-48 bg-brown-700 rounded-lg"></div>
                <div className="h-full flex flex-col w-full">
                  <div className="flex gap-2 items-center">
                    <span className="text-2xl text-red-500 font-medium">10% <span className="text-sm text-gray-600">off</span></span>
                    <span className="bg-teal-50 text-teal-500  rounded-2xl px-2 h-fit">Active</span>

                  </div>
                  <div>
                    <p className="font-semibold text-lg">Summer Gift Voucher</p>
                  </div>
                  <div className="w-10 text-sm">
                    <TimarCopon DetaTime={"6-8-2024"}/>
                  </div>

                </div>
              </div>

              <div className="bg-red-300 col-span-2"></div>

            </div>

          </div>
        </Box>
      </Box>
    </Container>
  );
}
