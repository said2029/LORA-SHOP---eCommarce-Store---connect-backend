"use client";

import { CarouselHome } from "../Carousel/CarouselHome";
import CoponeCard from "./couponeCard";
import { useSelector } from "react-redux";
import { getStoreState } from "@/Redux/store";
import MoreButton from "../buttons/moreButton";
import UseIsClient from "@/hooks/IsClient";
import { useRouter } from "next/navigation";
import moment from "moment";
export default function HeroSection() {
  const coupons = useSelector(getStoreState).Coupons?.copons?.body;
  const isClient = UseIsClient();
  const router = useRouter();

  const nowData = Date.now();
  let MaxCouponToShow = 2;
  return (
    <>
      {isClient && (
        <div
          className="h-fit w-full mt-7 grid grid-cols-9 py-4 gap-3 overflow-hidden bg-gray-100 "
        >
          <div className="w-full h-full col-span-full lg:col-span-5  overflow-hidden">
            <CarouselHome />
          </div>

          <div className="gap-6 col-span-4 grid-rows-1 h-full hidden lg:grid ">
            <div className="relative overflow-hidden rounded-xl border-2 border-[#fefae0]">
              <div className="w-full py-4 bg-base-color-500 shadow-sm text-center flex justify-between px-4 items-center">
                <p className="font-semibold text-white text-nowrap text-center">
                  Latest Super Discount Active Coupon Code
                </p>
                <MoreButton name="View All" event={() => { router.push("/offers") }} />
              </div>
              <div className="flex flex-col gap-2 w-full h-full pt-6 px-3">
                {
                  coupons?.map((e: any) => {
                    if (moment(e.Validity_Time).isBefore(nowData)) return;
                    if (!e.published) return;
                    MaxCouponToShow--;
                    if (MaxCouponToShow < 0) return;
                    return <CoponeCard key={e._id} coupon={e} />;
                  })

                }
                {

                  MaxCouponToShow >= 2 &&
                  <>
                    <CoponeCard coupon={{ Validity_Time: "00-00-00",discount:"00" }} />
                    <CoponeCard coupon={{ Validity_Time: "00-00-00",discount:"00" }} />
                  </>

                }

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
