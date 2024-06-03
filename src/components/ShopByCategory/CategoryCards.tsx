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

