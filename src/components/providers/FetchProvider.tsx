"use client";
import { fetchStoreSetting } from "@/Redux/feature/storeSetting/storeSetting";
import React, { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function FetchProvider({ children }: { children: ReactNode }) {
  const dispatach = useDispatch<any>();
  useEffect(() => {
    // Fetch data here
    dispatach(fetchStoreSetting());
  }, [dispatach]);
  return <div>{children}</div>;
}
