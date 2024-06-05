"use client";
import { Container } from "@mui/material";
import CategoryCars from "./CategoryCards";
import { getStoreState } from "../../Redux/store";
import { useSelector } from "react-redux";
import UseIsClient from "../../hooks/IsClient";
export default function ShopByCat() {
  const SettingStoreRedux =
    useSelector(getStoreState).storeSetting.settingData;
  const osClient = UseIsClient();

  return (
    <>
      {osClient && SettingStoreRedux?.Featured_Categories == "true" && (
        <Container
          sx={{ padding: "0" }}
          className="flex flex-col justify-center items-center mt-10 px-3 md:px-0 "
        >
          <div className="flex w-full justify-between items-center">
            <h1 className="text-3xl font-semibold">
              {SettingStoreRedux.feature_title.split(",")[0]} <span className="text-blue-600">{SettingStoreRedux.feature_title.split(",")[1]}</span>
            </h1>
          </div>
          {/* Card Categoris */}

          <div className="flex w-full py-4 gap-3 my-6 px-4 justify-evenly snap-x overflow-x-scroll md:overflow-visible md:flex-wrap md:h-fit ">
            <CategoryCars image="/images/categorys/1.jpg" name="headphones" />
            <CategoryCars
              name="Smart Phone"
              image="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?t=st=1716584052~exp=1716587652~hmac=210fbcc92a53134e4b5ac75aecfa12fed66966687f25ed1bb2628b6d64242445&w=740"
            />
            <CategoryCars
              name="Wireless Speaker"
              image="https://img.freepik.com/free-photo/high-angle-smart-speaker-home_23-2150171764.jpg?t=st=1716584225~exp=1716587825~hmac=db12f08dc21bba61384b825c3ceb88b2d4a3fa3d8d847c81c5e5f111987e5601&w=900"
            />
            <CategoryCars
              name="Earbuds"
              image="https://img.freepik.com/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?t=st=1716584325~exp=1716587925~hmac=b60dfa055382d399bccd3b329bfa1e51364e93b36f92c80d404ee3c59c66b09f&w=740"
            />
            <CategoryCars
              name="Smartwatch"
              image="https://img.freepik.com/free-psd/digital-smart-watch-icon-isolated-3d-render-illustration_439185-11924.jpg?w=740&t=st=1716584536~exp=1716585136~hmac=984034e17befe3385f0e1e88c88289aa61b7ebb08391a14345ccb9b97d20ec19"
            />
            <CategoryCars
              name="Trimmers"
              image="https://img.freepik.com/free-psd/3d-illustration-barber-shop-elements_23-2150943815.jpg?t=st=1716584774~exp=1716588374~hmac=f860c146a44277004499152770328b305377915672996164b9405a4e59a79230&w=740"
            />
            <CategoryCars
              name="Power Banks"
              image="https://img.freepik.com/free-photo/man-using-external-storage-used_23-2149388494.jpg?t=st=1716584892~exp=1716588492~hmac=81558cabbbea90afaee00e6934767fd9edb4636f1d0c296c7597be9d8532d15f&w=996"
            />
            <CategoryCars
              name="Charger"
              image="https://img.freepik.com/free-photo/white-cell-phone-charger-white-isolated-background-with-usb-cabe_58702-4476.jpg?t=st=1716585967~exp=1716589567~hmac=cfe067df29bd3d1a775bcb20827781f3aaa040054799dda30cfc3e3cf9f936bc&w=996"
            />
            <CategoryCars
              name="Router"
              image="https://img.freepik.com/free-psd/router-isolated-transparent-background_191095-24268.jpg?t=st=1716586001~exp=1716589601~hmac=000e42d12293c95141590a84e8da82e7ce83fb10bde589e71a2f72d2b07b823b&w=740"
            />
            <CategoryCars
              name="Webcam"
              image="https://img.freepik.com/free-psd/webcam-isolated-transparent-background_191095-32019.jpg?t=st=1716586130~exp=1716589730~hmac=ad1f41ca574538e1f00cf2a832b07b08f3699f2b4ca25d02972e14103d9a6a13&w=740"
            />
            <CategoryCars
              name="Camera"
              image="https://img.freepik.com/free-psd/digital-camera-isolated-transparent-background_191095-29098.jpg?t=st=1716586160~exp=1716589760~hmac=b816e106714a8f2ca30be4b34c27f4f7ad17f0ec8d8f0443aa0443eb84712f79&w=740"
            />
            <CategoryCars
              name="Mic"
              image="https://img.freepik.com/free-psd/microphone-isolated-transparent-background_191095-32543.jpg?t=st=1716586238~exp=1716589838~hmac=95eb327e719774b9243529eb342299d0e848eb4a9c270ad4a847b8a51dc9fb7c&w=740"
            />
          </div>
        </Container>
      )}
    </>
  );
}
