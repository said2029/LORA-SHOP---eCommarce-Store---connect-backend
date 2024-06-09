"use client";
import { getStoreState } from "@/Redux/store";
import CoponeCard from "@/components/heroSection/coponeCard";
import UseIsClient from "@/hooks/IsClient";
import { useSelector } from "react-redux";

export default function page() {
  const coupons = useSelector(getStoreState).Coupons?.copons?.body;
  const isClient = UseIsClient();
  return (
    <>
      {isClient && (
        <div className="pb-16">
          <div className="relative w-full h-52 flex justify-center items-center text-5xl font-bold mb-10">
            <img
              loading="lazy"
              decoding="async"
              className="absolute w-full h-full object-cover z-0"
              src="/images/2148657725.jpg"
              alt=""
            />
            <h1 className="z-10">Mage Offers</h1>
          </div>
          <div className="grid grid-cols-3 mt-20 px-8">
            {coupons?.map((e: any, i: number) => {
              return <CoponeCard key={e._id} coupon={e} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}
