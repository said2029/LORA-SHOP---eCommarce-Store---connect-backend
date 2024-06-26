import * as React from "react";
import { AddShoppingCartRounded } from "@mui/icons-material";
import Link from "next/link";
import RatingStars from "@/app/Products/_components/RatingStars";

import { addProductToCard } from "@/Redux/feature/ShopCards/ShopCards";
import { useDispatch } from "react-redux";
import { cn } from "../../../utils/cn";
export default function ProductCard({
  image = "",
  tital = "",
  peice = "",
  supPrice = "",
  discription = "",
  id = "",
  slug = "",
  rating = "0",
  Stock = "10"
}) {
  const dispatch = useDispatch();
  return (
    <article className="relative h-[23rem] w-full overflow-hidden rounded-lg bg-white shadow-md">
      <Link
        href={`/Product/${id}?slug=${slug}`}
        className="w-full flex justify-center"
      >
        <img
          loading="lazy"
          decoding="async"
          className="h-60 rounded-t-lg object-cover object-center"
          src={image}
          alt="product image"
        />
        <span className={cn(`absolute top-2 left-0 px-2 rounded-e-lg text-white font-medium ${+Stock >= 10 ? "bg-teal-400" : "bg-red-400"} `)}>Stock {Stock}</span>
      </Link>
      <article className="px-4 mt-2 pb-8 flex flex-col justify-evenly  h-36">
        <div>
          <h5 className="text-lg font-semibold tracking-tight text-slate-900 line-clamp-1">
            {tital}
          </h5>
        </div>
        <p className="text-[12px] text-gray-600 line-clamp-2" >
          {discription}
        </p>
        <div className="flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold  text-gray-900">${peice}</span>
            {supPrice && (
              <span className="text-sm text-slate-900 line-through text-gray-600">
                ${supPrice}
              </span>
            )}
          </p>
          <button
            onClick={() => {
              dispatch(
                addProductToCard({
                  id,
                  product: {
                    image,
                    ProducName: tital,
                    price: peice,
                    supPrice,
                    discription,
                    id,
                    slug,
                    rating,
                  },
                })
              );
            }}
            className="flex items-center rounded-md bg-slate-900 py-1  px-2 duration-300 hover:bg-gray-900 hover:text-white text-center text-sm font-medium text-base-color-500 border border-gray-300"
          >
            <AddShoppingCartRounded style={{ fontSize: "20px" }} />
          </button>
        </div>
      </article>
    </article>
  );
}
