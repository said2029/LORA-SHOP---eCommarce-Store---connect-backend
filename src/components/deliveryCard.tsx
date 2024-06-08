"use client";
import { CreditCard, Gift, PhoneCall, Truck } from "lucide-react";
import { useSelector } from "react-redux";
import { getStoreState } from "../Redux/store";
import UseIsClient from "../hooks/IsClient";

export default function DeliveryCard() {
  const SettingStoreRedux = useSelector(getStoreState).storeSetting.settingData;
  const isClient = UseIsClient();

  return (
    <>
      {isClient && SettingStoreRedux.Quick_Delivery_Section == "true" && (
        <div className="flex justify-center items-center py-7 px-11 border-b border-gray-300">
          <ul className="flex gap-5 flex-wrap justify-center text-sm items-center w-full">
            <li className="flex gap-2 justify-center items-center">
              <Truck className="text-base-color-500 text-[20px]" />
              <span>Free Shipping From $500.00</span>
            </li>
            <li>
              <hr className="w-full md:w-0 md:h-8 border border-gray-300" />
            </li>
            <li className="flex gap-2 justify-center items-center">
              <CreditCard className="text-base-color-500" />
              <span>Secure Payment Totally Safe</span>
            </li>
            <li>
              <hr className="w-full md:w-0 md:h-8 border border-gray-300" />
            </li>

            <li className="flex gap-2 justify-center items-center">
              <PhoneCall className="text-base-color-500" />
              <span>Support 24/7 At Anytime</span>
            </li>
            <li>
              <hr className="w-full md:w-0 md:h-8 border border-gray-300" />
            </li>

            <li className="flex gap-2 justify-center items-center">
              <Gift className="text-base-color-500" />
              <span>Latest Offer Upto 20% Off</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
