"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
export function CarouselHome() {
  const SettingStoreRedux = useSelector(
    (state: { storeSetting: {} }) => state?.storeSetting
  );
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
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        {IsClient &&
          respons &&
          !respons?.loading &&
          respons.settingData?.hero_sections.map(
            (element: {}, index: number) => {
              return (
                <SwiperSlide
                  key={element?._id}
                  className="flex gap-2 justify-between items-center relative bg-white h-96"
                >
                  <img
                    className="w-full h-full hidden md:block object-cover"
                    loading="lazy"
                    decoding="async"
                    src={element?.home_Slider_Images}
                    alt=""
                  />
                  <div className="absolute top-0 h-full flex items-center sm:p-5 w-full">
                    <section className="text-center md:text-left w-full">
                      <h1 className="text-4xl font-thin uppercase">
                        {element?.slider_title}
                      </h1>
                      <h1 className="text-2xl font-light my-4">
                        SALE UP TO{" "}
                        <span className="text-light-blue-600">30% OFF</span>
                      </h1>
                      <span className="text-gray-600 my-2">
                        {element?.slider_description}
                      </span>
                      <a
                        href={element?.slider_button_link}
                        className="bg-light-blue-600 mt-10 w-fit block p-2 rounded-md text-white"
                      >
                        {element?.slider_button_name}
                      </a>
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
