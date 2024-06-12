"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCookies } from "react-cookie";

export default function page() {
  const params = useSearchParams();
  const [_, setCookie] = useCookies(["access_token"]);

  setCookie("access_token", params.get("token"));
  if (window)
    window.localStorage.setItem("UserId", params.get("_id")?.toString() || "");
  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <img width={200} height={200} src="/images/completedImage.gif" alt="" />
      <h1 className="text-4xl"> Completed!</h1>
      <Link href={"/"} className="bg-base-color-500 p-1 rounded-md mt-10 text-white">
        Back Home
      </Link>
    </div>
  );
}
