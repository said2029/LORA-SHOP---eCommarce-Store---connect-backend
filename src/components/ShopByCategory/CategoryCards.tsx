"use client";
import React from "react";
import { AnimatedTooltip } from "./animated-tooltip";
import Link from "next/link";

function CategoryCars({ image = "", name = "" }) {
  const Categorys = [
    {
      id: 1,
      name: name ? name : "none",
      image: image
        ? image
        : "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
  ];
  return (
    <Link href="/">
      <AnimatedTooltip items={Categorys} />
    </Link>
  );
}
export default CategoryCars;

// export default function CategoryCars() {
//   const ref = useRef(null);
//   return (
//     <div className="flex relative snap-center flex-col mx-2 items-center w-12 justify-center cursor-pointer">
//       <h1
//         ref={ref}
//         className="text-gray-900 font-bold z-40 absolute top-1/2 hidden pointer-events-none text-center duration-500 transition-all"
//       >
//         Men
//       </h1>
//       <div
//         onMouseEnter={() => {
//           ref.current!.classList.remove("hidden");
//         }}
//         onMouseLeave={() => {
//           ref.current!.classList.add("hidden");
//         }}
//         className="w-20 h-20 bg-slate-600  rounded-full overflow-hidden shadow-md shadow-gray-400 duration-500 hover:blur-md"
//       >
//         <img
//           className="object-cover w-full h-full"
//           loading="lazy"
//           decoding="async"
//           src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }
