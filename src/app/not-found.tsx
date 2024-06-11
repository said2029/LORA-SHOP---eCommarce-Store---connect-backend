import React from "react";
import Link from "next/link";
export default function noFound() {
  return (
    <div className="w-full flex items-center justify-center min-h-full flex-col mt-10">
      <div>
        <img
          width={700}
          height={700}
          loading="lazy"
          decoding="async"
          src="/images/not_found_image.png"
          alt="Not Found"
        />
      </div>

      <Link
        href={"/"}
        className="bg-base-color-500 p-2 px-8 rounded-md mt-5 text-white"
      >
        Back Home
      </Link>
    </div>
  );
}
