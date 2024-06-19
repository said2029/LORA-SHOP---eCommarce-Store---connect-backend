"use client";
import { useSelector } from "react-redux";
import ProductCard from "../Cards/ProductCard";
import Timar from "./Timar";
import { getStoreState } from "../../Redux/store";
import UseIsClient from "@/hooks/IsClient";
import { Container } from "@mui/material";

export default function DailyDeals() {
  const SettingStoreRedux =
    useSelector(getStoreState).HomeSetting.settingData;

  const IsClient = UseIsClient();
  return (
    <>
      {IsClient && SettingStoreRedux?.Popular_Products == "true" && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-full py-16 gap-6 flex flex-col justify-center px-9">
          <Container maxWidth="xl" className="text-white flex flex-col gap-5 lg:flex-row justify-between items-center">
            <h1 className="text-3xl font-bold">
              {SettingStoreRedux?.feature_title_Daily_Title}
            </h1>
            <div className="flex gap-2 items-center">
              <div className="text-bold text-2xl">
                <Timar DetaTime={SettingStoreRedux.feature_title_Daily_date} />
              </div>
            </div>
            {SettingStoreRedux?.feature_title_Daily_dicount && (
              <div className="bg-red-600 p-3 rounded-full text-gray-950">{SettingStoreRedux?.feature_title_Daily_dicount}</div>
            )}
          </Container>
          {/* cards */}
          <div className="grid grid-cols-1 mt-3 justify-center items-center mx-auto gap-4 w-fit sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
            {SettingStoreRedux.DelayShoppingProducts.length >= 1 &&
              SettingStoreRedux.DelayShoppingProducts.map((e: any) => {
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
                    tital={e.ProducName}
                  />
                );
              })}
          </div>
        </div>
      )}
    </>
  );
}
