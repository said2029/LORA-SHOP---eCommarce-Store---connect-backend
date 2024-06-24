import TimarCoupon from "../TimarCoupons";
import Image from "next/image";
import { Alert } from "@material-tailwind/react";
import { useState } from "react";
export default function CoponeCard({ coupon }: any) {
  const [open, setOpen] = useState(false);
  function CopyCod(text: string) {
    setOpen(true);
    navigator.clipboard.writeText(text);
  }
  return (
    <>
      <div className="h-fit w-full grid grid-cols-6 gap-2 px-4">
        <div className="xl:col-span-4 rounded-sm p-5 flex gap-2 col-span-full  shadow-md">
          <div className="h-full w-48  rounded-lg flex items-center flex-shrink">
            <figure className="overflow-hidden rounded-lg w-full h-full">
              <Image
                width={300}
                alt="image"
                className="object-cover w-full h-full"
                height={300}
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
              <span className="bg-teal-50 text-teal-500  rounded-2xl px-2 h-fit">
                Active
              </span>
            </div>
            <div>
              <p className="font-medium text-lg">{coupon.name}</p>
            </div>
            <div className="w-10 text-sm">
              <TimarCoupon DetaTime={coupon.Validity_Time} />
            </div>
          </div>
        </div>

        <div className="col-span-2 flex-col rounded-sm justify-center gap-2 items-center px-3 hidden xl:flex shadow-md">
          <div
            onClick={() => {
              CopyCod(coupon?.code);
            }}
            className="bg-teal-100 text-teal-500 px-3 py-1 border border-dashed border-[#fefae0] h-fit rounded-md w-full text-center"
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
