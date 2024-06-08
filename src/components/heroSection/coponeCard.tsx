
import TimarCopon from "../TimarCopons";
import Image from "next/image";
import { Alert } from "@material-tailwind/react";
import { useState } from "react";
export default function CoponeCard({coupon}:any) {
  const [open, setOpen] = useState(false);
  function CopyCod(text:string){
    setOpen(true);
    navigator.clipboard.writeText(text);
  }
  return (
    <>
    <div className="h-fit w-full grid grid-cols-6 gap-2 px-4 py-2">
      <div className="xl:col-span-4 rounded-sm p-2 flex gap-2 col-span-full  shadow-md">
        <div className="h-full w-48  rounded-lg flex items-center flex-shrink">
          <figure className="overflow-hidden rounded-lg">
            <Image
              width={200}
              alt="image"
              height={200}
              src={
                "https://kachabazar-store-nine.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2FwBBYm7j%2Fins4.jpg&w=128&q=75"
              }
            />
          </figure>
        </div>
        <div className="h-full flex flex-col w-full justify-evenly ">
          <div className="flex gap-2 items-center">
            <span className="text-2xl text-base-color-500 font-medium">
              ${coupon.discount} <span className="text-sm text-gray-600">off</span>
            </span>
            <span className="bg-teal-50 text-teal-500  rounded-2xl px-2 h-fit">
              Active
            </span>
          </div>
          <div>
            <p className="font-medium text-lg">Summer Gift Voucher</p>
          </div>
          <div className="w-10 text-sm">
            <TimarCopon DetaTime={coupon.Validity_Time} />
          </div>
        </div>
        <hr className="h-full border col-span-2 border-gray-400 border-1-2 border-dashed hidden xl:block" />
      </div>

      <div className="col-span-2 flex-col rounded-sm justify-center gap-2 items-center px-3 hidden xl:flex shadow-md">
        <div onClick={()=>{CopyCod(coupon?.code)}} className="bg-teal-100 text-teal-500 px-3 py-1 border border-dashed border-[#fefae0] h-fit rounded-md w-full text-center">
          <span className="cursor-pointer">{coupon?.code}</span>
        </div>
        <div className="text-sm text-gray-700 mt-2">
          <p>* This coupon apply when shopping more then ${coupon.minimum_amount}</p>
        </div>
      </div>
    </div>
      <Alert
        onClose={() => setOpen(false)}
        variant="filled"
        open={open}
        color="light-green"
        style={{
          position:"absolute",
          top: "0",
          right:"0",
          width:"140px",
          margin:"10px"
        }}
        animate={{
          mount: { x:0 },
          unmount: { x: 100 },
        }}
      >
        <p>copied!</p>
      </Alert>
    </>
  );
}
