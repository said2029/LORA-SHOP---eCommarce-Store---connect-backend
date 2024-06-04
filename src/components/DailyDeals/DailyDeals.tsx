"use client";
import { useSelector } from "react-redux";
import ProductCard from "../Cards/ProductCard";
import Timar from "./Timar";
import { getStoreSettingState } from "../../Redux/store";
import { useEffect, useState } from "react";

export default function DailyDeals() {
  const SettingStoreRedux =
    useSelector(getStoreSettingState).storeSetting.settingData;
  const [IsClient, SetClient] = useState(false);
  useEffect(() => {
    SetClient(true);
  }, []);
  return (
    <>
      {IsClient && SettingStoreRedux?.Popular_Products == "true" && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-full py-16 gap-6 px-4 flex flex-col justify-center md:px-14 xl:px-24">
          <div className="text-white flex flex-col gap-5 lg:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold">{SettingStoreRedux?.feature_title_Daily_Title}</h1>
            <div className="flex gap-2 items-center">
              <div className="text-bold text-2xl">
                <Timar DetaTime={SettingStoreRedux.feature_title_Daily_date}/>
              </div>
            </div>
            <div className="bg-red-600 p-3 rounded-full text-gray-950">
              Save Up To 70%
            </div>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 mt-3 justify-center items-center mx-auto gap-4 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
            <ProductCard image="https://img.freepik.com/free-photo/still-life-tech-device_23-2150722656.jpg?t=st=1716586499~exp=1716590099~hmac=c50e13c052bc81938bcf33a565c92bee31da34c3a556f7c62763d30ffdba3148&w=740" />
            <ProductCard image="https://img.freepik.com/free-photo/power-bank-mobile-phone_155003-7189.jpg?t=st=1716586531~exp=1716590131~hmac=070b84fcbe2886a36038389f1b450dd8c969f6ce489a01b8f1bf7cbcbb091328&w=996" />
            <ProductCard image="https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?t=st=1716586569~exp=1716590169~hmac=16358820e525d9441f342693c7ecbd62ac4700a4454513cf44c04460fe6c7e41&w=740" />
            <ProductCard image="https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846500.jpg?t=st=1716586622~exp=1716590222~hmac=8d706122927b84d6dae74eb5c190489815359eff95e9f657d3c022b9aa973a66&w=740" />
          </div>
        </div>
      )}
    </>
  );
}
