"use client";
import { Box, Button, Container } from "@mui/material";

import { ArrowRight } from "lucide-react";
import { CarouselHome } from "./Carousel/CarouselHome";
export default function HeroSection() {
  return (
    <Container className="h-[400px] md:h-[600px] w-full mt-7 grid grid-cols-9 p-4 gap-3 overflow-hidden bg-gray-100">
      <div className="mySwiper w-full h-full col-span-full xl:col-span-6  overflow-hidden">
        <CarouselHome />
      </div>

      <Box className="gap-6 col-span-3 grid-rows-2 h-full hidden xl:grid ">
        <Box className=" bg-deep-purple-50 relative overflow-hidden p-3">
          <div className="h-full w-full z-10 flex flex-col justify-between item-left py-10 text-gray-900">
            <div>
              <h1 className="text-2xl mt-3">LIFESTYLE COLLECTION</h1>
              <p className=" text-xl font-semibold text-gray-800 mt-3">
                SALE 20% OFF
              </p>
            </div>
            <Button className="mt-10 w-fit">
              Shop Now {"  "}
              <ArrowRight size={15} />
            </Button>
          </div>
          <div className="w-60 h-60 absolute -bottom-11 right-0 z-20 ">
            <img
              className="w-full h-full object-cover"
              src="/images/9.png"
              alt=""
            />
          </div>
        </Box>
        <Box className=" bg-yellow-50 relative overflow-hidden p-3">
          <div className="h-full w-full z-10 flex flex-col justify-between item-left py-10 text-gray-900">
            <div>
              <h1 className="text-2xl mt-3">LIFESTYLE COLLECTION</h1>
              <p className=" text-xl font-semibold text-gray-800 mt-3">
                SALE 20% OFF
              </p>
            </div>
            <Button className="mt-10 w-fit">
              Shop Now {"  "}
              <ArrowRight size={15} />
            </Button>
          </div>
          <div className="w-60 h-60 absolute bottom-1 right-0 z-20 ">
            <img
              className="w-full h-full object-cover"
              src="/images/12.png"
              alt=""
            />
          </div>
        </Box>
      </Box>
    </Container>
  );
}
