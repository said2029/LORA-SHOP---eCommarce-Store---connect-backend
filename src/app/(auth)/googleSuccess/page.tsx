"use client";

import { useSearchParams } from "next/navigation";
import { useCookies } from "react-cookie";

export default function page() {
  const params = useSearchParams();
  const [_, setCookie] = useCookies(["access_token"]);

  setCookie("access_token", params.get("token"));
  if (window)
    window.localStorage.setItem("UserId", params.get("_id")?.toString() || "");
  return <div>Completed!</div>;
}
