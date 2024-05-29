"use client";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import UseGET from "../../../hooks/GET";
export function CarouselHome() {
  const respons = UseGET("/setting/homeGet");
  console.log(respons);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        {respons?.body &&
          respons.body[0]?.hero_sections.map((element: {}, index: number) => {
            return (
              <SwiperSlide key={element?._id} className="flex gap-2 justify-between items-center relative bg-white h-96">
                <img
                  className="w-full h-full hidden md:block object-cover"
                  loading="lazy"
                  decoding="async"
                  src={element?.home_Slider_Images}
                  alt=""
                />
                <div className="absolute top-0 h-full flex items-center sm:p-5 w-full">
                  <div className="text-center md:text-left w-full">
                    <h1 className="text-4xl font-thin uppercase">
                      {element?.slider_title}
                    </h1>
                    <h1 className="text-2xl font-light my-4">
                      SALE UP TO{" "}
                      <span className="text-light-blue-600">30% OFF</span>
                    </h1>
                    <p className="text-gray-600 my-2">
                    {element?.slider_description}
                    </p>
                    <a
                    href={element?.slider_button_link}
                      className="bg-light-blue-600 mt-10 w-fit block p-2 rounded-md text-white"
                    >
                      {element?.slider_button_name}
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            );
          })
        }


      </Swiper>
    </>
  );
}
