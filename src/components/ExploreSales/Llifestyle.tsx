import { Avatar, AvatarGroup, IconButton } from "@mui/material";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "../Cards/ProductCard";
import CardLifeStyle from "../Cards/CardLifeStyle";

export default function ShopByLifeStyle(prop: { tital: string,subtital:string }) {
  return (
    <div className="flex flex-col justify-center items-center my-6 mt-7 px-4 md:px-14 xl:px-36">
      <div className="flex w-full justify-between  items-center">
        <h1 className="text-3xl font-semibold">
          {prop.tital} <span className="text-blue-600">{prop.subtital}</span>
        </h1>
        <div className="flex">
          <IconButton className="text-blue-500">
            <ChevronLeft />
          </IconButton>
          <IconButton className="text-blue-500">
            <ChevronRight />
          </IconButton>
        </div>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-1 mt-10 justify-center items-center mx-auto gap-4 w-full sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        <CardLifeStyle />
        <CardLifeStyle />
        <CardLifeStyle />
        <CardLifeStyle />

      </div>
    </div>
  );
}
