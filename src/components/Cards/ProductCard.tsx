import * as React from "react";
import { AddShoppingCartRounded } from "@mui/icons-material";
import Link from "next/link";
import RatingStars from "@/app/Products/_components/RatingStars";
import { ContarollerDeloag } from "../dialog/authDialog";

import { addProductToCard } from "@/Redux/feature/ShopCards/ShopCards";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
export default function ProductCard({
  image = "",
  tital = "",
  peice = "",
  supPrice = "",
  discription = "",
  id = "",
  slug = "",
  rating = "0",
}) {
  const dispatch = useDispatch();
  const [cookis, setCookie] = useCookies(["access_token"]);
  return (
    <div className="relative h-[25rem] w-full overflow-hidden rounded-lg bg-white shadow-md">
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
      </Link>
      {/* <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
        Sale
      </span> */}
      <article className="mt-4 px-2 pb-5 flex flex-col justify-between  h-40">
        <div>
          <h5 className="text-xl font-semibold tracking-tight text-slate-900 line-clamp-1">
            {tital}
          </h5>
        </div>

        {rating != "0" ? (
          <div className="mt-2.5 mb-5 flex items-center">
            <span className="mr-2 rounded bg-orange-500 px-2.5 py-0.5 text-xs font-semibold">
              {rating}
            </span>
            <RatingStars size="small" startconst={+rating} />
          </div>
        ) : (
          <p className="mt-2.5 mb-5 text-sm text-gray-600 line-clamp-2">
            {discription}
          </p>
        )}
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
              if (cookis.access_token)
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
              else ContarollerDeloag.openAuthDelog();
            }}
            className="flex items-center rounded-md bg-slate-900 py-1  px-2 duration-300 hover:bg-base-color-500 hover:text-white text-center text-sm font-medium text-base-color-500 border border-gray-300"
          >
            <AddShoppingCartRounded style={{ fontSize: "20px" }} />
          </button>
        </div>
      </article>
    </div>
  );
}
