"use client";
import { Container } from "@mui/material";
import CategoryCars from "./CategoryCards";
import { getStoreState } from "../../Redux/store";
import { useSelector } from "react-redux";
import UseIsClient from "../../hooks/IsClient";
export default function ShopByCat() {
  const selector = useSelector(getStoreState);
  const SettingStoreRedux = selector.storeSetting.settingData;
  const categorysReducx = selector.CategoryData.categorys.categores;
  const osClient = UseIsClient();

  return (
    <>
      {osClient && SettingStoreRedux?.Featured_Categories == "true" && (
        <Container
          maxWidth="xl"
          sx={{ padding: "0" }}
          className="flex flex-col justify-center items-center mt-10 px-3 md:px-0 "
        >
          <div className="flex w-full justify-between items-center">
            <h1 className="text-3xl font-semibold">
              {SettingStoreRedux.feature_title.split(",")[0]}{" "}
              <span className="text-base-color-500">
                {SettingStoreRedux.feature_title.split(",")[1]}
              </span>
            </h1>
          </div>
          {/* Card Categoris */}

          <div className="flex w-full py-4 gap-3 my-6 px-4 justify-evenly snap-x overflow-x-scroll md:overflow-visible md:flex-wrap md:h-fit ">
            {categorysReducx?.length > 1 &&
              categorysReducx.map((e: any) => {
                if (!e.published) return;
                return (
                  <CategoryCars
                    key={e._id}
                    image={e.CategoryImage}
                    name={e.name}
                  />
                );
              })}
          </div>
        </Container>
      )}
    </>
  );
}
