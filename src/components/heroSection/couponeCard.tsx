import TimarCoupon from "../TimarCoupons";
import Image from "next/image";
import { Alert } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import moment from "moment";
import { cn } from "../../../utils/cn";
import { ShowToasit_Error } from "@/_lib/ToasitControle";
export default function CoponeCard({ coupon }: any) {
  const [open, setOpen] = useState(false);
  function CopyCod(text: string) {
    setOpen(true);
    navigator.clipboard.writeText(text);
  }
  const moment2 = moment(coupon.Validity_Time);

  const [couponActive, setCouponActive] = useState(true);
  useEffect(() => {
    moment().isBefore(moment2) ? setCouponActive(true) : setCouponActive(false);

  }, [])

  function handlCopyCoupon() {
    if (couponActive) {
      CopyCod(coupon?.code);
    } else {
      ShowToasit_Error("Coupon is expired!")
    }

  }

  return (
    <>
      <div className="h-fit w-full grid grid-cols-6 gap-2 rounded-lg">
        <div className="xl:col-span-4  sm:col-span-4 md:col-span-full  col-span-full rounded-sm flex gap-3 shadow-md">
          <div className="h-full w-48  rounded-lg  items-center flex flex-shrink">
            <figure className="overflow-hidden rounded-lg w-fit h-fit p-3 cursor-pointer relative">
              <Image
                onClick={handlCopyCoupon}
                width={300}
                height={300}
                alt="image"
                className="object-cover rounded-lg duration-500 w-full h-full hover:scale-110 hover:rotate-2"
                src={`/images/coupons/coupon_${getRandomNumber()}.jpg`}
              />
            </figure>
          </div>
          <div className="h-full flex flex-col w-full justify-evenly ">
            <div className="flex gap-2 items-center">
              <span className="text-2xl text-base-color-500 font-medium">
                ${coupon.discount}{" "}
                <span className="text-sm text-gray-600">off</span>
              </span>
              <span className={cn(` ${couponActive ? "bg-teal-50 text-teal-500" : "bg-red-50 text-red-500"} rounded-2xl px-2 h-fit`)}   >
                {couponActive ? "Active" : "Expired"}
              </span>
            </div>
            <div>
              <p className="font-medium text-lg">{coupon.name}</p>
            </div>
            <div className="w-full text-sm overflow-hidden">
              <TimarCoupon DetaTime={coupon.Validity_Time} cuponActive={couponActive} />
            </div>
          </div>
        </div>

        <div className="col-span-2 flex-col rounded-sm justify-center gap-2 items-center px-3 hidden sm:flex md:hidden xl:flex shadow-md">
          <div
            onClick={handlCopyCoupon}
            className={cn(`${couponActive ? "bg-teal-50 text-teal-500" : "bg-red-50 text-red-500 line-through"} px-3 py-1 border border-dashed border-[#fefae0] h-fit rounded-md w-full text-center`)}
          >
            <span className="cursor-pointer">{coupon?.code}</span>
          </div>
          <div className="text-sm text-gray-700 mt-2">
            <p>
              * This coupon apply when shopping more then $
              {coupon.minimum_amount}
            </p>
          </div>
        </div>
      </div>
      <Alert
        onClose={() => setOpen(false)}
        variant="filled"
        open={open}
        className="bg-teal-200 bg-opacity-80"
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          width: "140px",
          margin: "10px",
        }}
        animate={{
          mount: { x: 0 },
          unmount: { x: 100 },
        }}
      >
        <p>copied!</p>
      </Alert>
    </>
  );
}

// get number from 1 to 4
function getRandomNumber() {
  return Math.floor(Math.random() * 4) + 1;
}
