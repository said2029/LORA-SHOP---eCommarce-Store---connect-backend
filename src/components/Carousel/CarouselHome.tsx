"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Autoplay, Pagination} from "swiper/modules";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getStoreState } from "../../Redux/store";
export function CarouselHome() {
  const SettingStoreRedux = useSelector(getStoreState).HomeSetting;
  const respons = SettingStoreRedux;

  let [IsClient, SetIsClient] = useState(false);
  useEffect(() => {
    SetIsClient(true);
  }, []);

  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper h-[200px] sm:h-[400px]"
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        {IsClient &&
          respons &&
          !respons?.loading &&
          respons.settingData?.hero_sections.map(
            (
              element: {
                _id: string;
                home_Slider_Images: string;
                slider_title: string;
                slider_description: string;
                slider_button_name: string;
                slider_button_link: string;
              },
              index: number
            ) => {
              return (
                <SwiperSlide
                  key={element?._id}
                  className="flex gap-2 justify-between  items-center relative bg-white h-96"
                >
                  <Image
                    width={750}
                    height={790}
                    className="w-full h-full object-cover"
                    src={element?.home_Slider_Images || ""}
                    alt=""
                  />
                  <div className="absolute top-0 h-full flex items-center sm:p-5 w-[70%] md:w-[60%] px-2">
                    <section className="text-start w-full">
                      <h1 className="text-sm sm:text-4xl font-medium uppercase">
                        {element?.slider_title}
                      </h1>
                      <span className="text-gray-600 my-4 block text-[13px]">
                        <span className="line-clamp-2 md:line-clamp-none">{element?.slider_description.split("//")[0]}</span> <span className="text-base-color-500">{element?.slider_description.split("//")[1]}</span>
                      </span>
                      <span className=" justify-center sm:justify-start hidden sm:flex">
                        <a
                          href={element?.slider_button_link}
                          className="bg-base-color-500 mt-10 w-fit block p-2 rounded-md text-white"
                        >
                          {element?.slider_button_name}
                        </a>
                      </span>
                    </section>
                  </div>
                </SwiperSlide>
              );
            }
          )}
      </Swiper>
    </>
  );
}
