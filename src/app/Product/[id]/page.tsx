"use client";
import ProductCard from "@/components/Cards/ProductCard";
import { Divider, Skeleton } from "@mui/material";
import Link from "next/link";
import RatingStars from "@/app/Products/_components/RatingStars";
import { ShoppingBag } from "lucide-react";
import ReviewCard from "../_components/ReviewCard";
import { getProductApi, ReviewProductApi } from "../../../_utils/axiosProduct";
import getProductsApi from "../../../_utils/axiosProduct";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

import { useCookies } from "react-cookie";

import { ContarollerDeloag } from "../../../components/dialog/authDialog";
import { useDispatch } from "react-redux";
import { addProductToCard } from "@/Redux/feature/ShopCards/ShopCards";

export default function page({ params }: { params: { id: string } }) {
  function imageFun(url: string | undefined) {
    return (
      <button
        key={url}
        type="button"
        className="mb-3 w-20 h-20 overflow-hidden rounded-lg border-2 border-gray-300 text-center"
      >
        <Image
          width={750}
          height={790}
          className="object-cover"
          src={url || ""}
          alt=""
        />
      </button>
    );
  }

  const [openReview, setReview] = useState(false);

  let productModile = {
    _id: "",
    Product_Description: "",
    ProducName: "",
    ProductsImage: [],
    productprice: { $numberDecimal: "" },
    productSaleprice: { $numberDecimal: "" },
    colors: [],
    rating: { $numberDecimal: 0 },
  };
  let [product, setProducts] = useState(productModile);
  let [Reviews, setReviews] = useState([]);

  const [productlikes, setproductlikes] = useState([]);
  useEffect(() => {
    getProductApi(params.id).then((res) => {
      const body = res.data[0];
      const colors = body.colors[0].split(",");
      body.colors = colors;
      body.rating.$numberDecimal = +body.rating.$numberDecimal;
      setProducts(body);
      getProductsApi(0, body.ProductCategory).then((res2) => {
        if (res2.data.data.length <= 0) {
          getProductsApi(0).then((res3) => {
            setproductlikes(res3.data.data);
          });
        } else {
          setproductlikes(res2.data.data);
        }
      });
    });
    ReviewProductApi(params.id).then((res) => {
      res.data.reviews.map((e: any) => {
        e.useImage = e.customers[0]?.imageUser;
        e.useName = `${e.customers[0]?.FirstName} ${e.customers[0]?.lastName}`;
      });
      setReviews(res.data.reviews);
    });
  }, []);

  const [cookie, setCookie] = useCookies(["access_token"]);

  const dispatch = useDispatch();

  return (
    <div className=" px-5 ">
      <section className="py-12 sm:py-16">
        <div className="container mx-auto md:px-4">
          <nav className="flex">
            <ol role="list" className="flex items-center">
              <li className="text-left">
                <div className="-m-1">
                  <Link
                    href="/"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    Home
                  </Link>
                </div>
              </li>
              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <Link
                      href="/Products"
                      className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    >
                      Products
                    </Link>
                  </div>
                </div>
              </li>
              <li className="text-left">
                <div className="flex items-center">
                  <span className="mx-2 text-gray-400">/</span>
                  <div className="-m-1">
                    <a
                      href="#"
                      className="rounded-md line-clamp-1 p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                      aria-current="page"
                    >
                      {product?.ProducName ? (
                        product?.ProducName
                      ) : (
                        <Skeleton
                          animation={"wave"}
                          sx={{ width: 300, height: 40 }}
                        />
                      )}
                    </a>
                  </div>
                </div>
              </li>
            </ol>
          </nav>
          <div className="lg:col-gap-12 xl:col-gap-8 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-8">
            <div className="lg:col-span-3 lg:row-end-1">
              <div className="md:flex lg:items-start">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper md:order-2 md:ml-5 py-5 h-full w-full"
                >
                  {product.ProductsImage.length >= 1 ? (
                    product.ProductsImage?.map((image: string) => {
                      return (
                        <SwiperSlide key={image}>
                          <div className="w-full max-h-[600px] overflow-hidden rounded-lg">
                            <Image
                              width={650}
                              height={690}
                              className="object-fit h-full w-full"
                              src={image || "logoipsum.svg"}
                              alt="Prodout image"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <SwiperSlide>
                      <div className="w-full max-h-[500px] min-h-[500px] overflow-hidden rounded-lg  animate-pulse bg-gray-400"></div>
                    </SwiperSlide>
                  )}
                </Swiper>
                <div className="mt-2 w-full md:order-1 md:w-32 md:flex-shrink-0">
                  <div className="flex flex-row items-start md:flex-col gap-2">
                    {product.ProductsImage.length >= 1 ? (
                      product.ProductsImage?.map((image: string) => {
                        return imageFun(image);
                      })
                    ) : (
                      <>
                        <span className="mb-3 w-20 h-20 overflow-hidden rounded-lg border-2 border-gray-300 text-center animate-pulse bg-gray-400" />
                        <span className="mb-3 w-20 h-20 overflow-hidden rounded-lg border-2 border-gray-300 text-center animate-pulse bg-gray-400" />
                        <span className="mb-3 w-20 h-20 overflow-hidden rounded-lg border-2 border-gray-300 text-center animate-pulse bg-gray-400" />
                        <span className="mb-3 w-20 h-20 overflow-hidden rounded-lg border-2 border-gray-300 text-center animate-pulse bg-gray-400" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 text-gray-900">
              <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl line-clamp-2">
                {!product.ProducName ? (
                  <Skeleton
                    animation={"wave"}
                    sx={{ width: "100%", height: 60 }}
                  />
                ) : (
                  product.ProducName
                )}
              </h1>
              <div className="mt-5 flex items-center">
                <div className="flex items-center">
                  {product.rating.$numberDecimal ? (
                    <RatingStars
                      startconst={product.rating.$numberDecimal || 5}
                      size={"large"}
                    />
                  ) : (
                    <Skeleton
                      animation={"wave"}
                      sx={{ width: 140, height: 50 }}
                    />
                  )}
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">
                  {Reviews.length <= 0 ? (
                    <Skeleton
                      animation={"wave"}
                      sx={{ width: 200, height: 40 }}
                    />
                  ) : (
                    Reviews.length + " Reviews"
                  )}
                </p>
              </div>

              <div className="mt-3">
                {product?.Product_Description ? (
                  <p className="line-clamp-2">{product?.Product_Description}</p>
                ) : (
                  <Skeleton
                    animation={"wave"}
                    sx={{ width: "100%", height: 200 }}
                  />
                )}
              </div>

              {product.colors.length >= 1 && (
                <>
                  <h2 className="mt-4 text-base text-gray-900 font-bold">
                    Choose Color
                  </h2>
                  <hr className="my-2" />
                  <div className="mt-3 flex select-none flex-wrap items-center gap-3">
                    {product.colors?.map((e: string) => {
                      return (
                        <span
                          key={e}
                          onClick={() => {}}
                          style={{
                            outlineColor: e || "",
                            backgroundColor: e || "",
                          }}
                          className="h-6 w-6 rounded-full cursor-pointer outline outline-2 outline-offset-2"
                        />
                      );
                    })}
                  </div>
                </>
              )}

              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <div className="flex items-end">
                  <h1 className="text-3xl font-bold">
                    {product.productSaleprice?.$numberDecimal ? (
                      "$" + product.productSaleprice?.$numberDecimal
                    ) : (
                      <Skeleton
                        animation={"wave"}
                        sx={{ width: 150, height: 100 }}
                      />
                    )}
                    {product.productprice?.$numberDecimal && (
                      <span className="line-through ms-1 text-[20px] text-gray-600">
                        ${product.productprice?.$numberDecimal}
                      </span>
                    )}
                  </h1>
                </div>
                <button
                  type="button"
                  className="inline-flex h-14 items-center gap-2 justify-center rounded-md border-2 border-transparent bg-base-color-500 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  onClick={() => {
                    if (!cookie.access_token) ContarollerDeloag.openAuthDelog();
                    else dispatch(addProductToCard({id:product._id, product:product}));
                  }}
                >
                  <ShoppingBag />
                  <p className="text-nowrap "> Add to cart</p>
                </button>
              </div>
              <ul className="mt-8 space-y-2">
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      className=""
                    />
                  </svg>
                  Free shipping worldwide
                </li>
                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                  <svg
                    className="mr-2 block h-5 w-5 align-middle text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    />
                  </svg>
                  Cancel Anytime
                </li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <button
                    className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800 "
                    onClick={() => setReview(false)}
                  >
                    Description
                  </button>
                  <button
                    className="inline-flex border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800 "
                    onClick={() => setReview(true)}
                  >
                    Reviews
                    <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                      {Reviews.length}
                    </span>
                  </button>
                </nav>
              </div>
              {!openReview ? (
                <div className="mt-8 flow-root sm:mt-12">
                  {product?.Product_Description ? (
                    <p className="mt-4">{product.Product_Description}</p>
                  ) : (
                    <Skeleton
                      animation={"wave"}
                      sx={{ width: "100%", height: 300 }}
                    />
                  )}
                </div>
              ) : (
                <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto">
                  {Reviews.map(
                    (e: {
                      _id: "";
                      review: "";
                      rating: "";
                      useImage: "";
                      useName: "";
                    }) => {
                      return (
                        <ReviewCard
                          key={e._id}
                          dis={e.review}
                          image={e.useImage}
                          name={e.useName}
                          stars={+e.rating}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* you may also like */}

      <section className="mt-16 w-full flex flex-col 2xl:px-24">
        <h1 className="text-xl font-semibold uppercase  w-fit ">
          Recommended:
        </h1>
        <Divider className="mt-2 mb-6" />

        <div className="grid grid-cols-1 mt-6 justify-center items-center mx-auto gap-4 w-full sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {productlikes.length >= 1 &&
            productlikes?.map(
              (
                e: {
                  Product_Description: string;
                  productprice: { $numberDecimal: "" };
                  productSaleprice: { $numberDecimal: "" };
                  _id: string;
                  ProducName: string;
                  ProductsImage: [""];
                },
                index
              ) => {
                if (index < 4) {
                  return (
                    <ProductCard
                      discription={e.Product_Description}
                      supPrice={e.productprice?.$numberDecimal || ""}
                      peice={e.productSaleprice?.$numberDecimal}
                      key={e._id}
                      tital={e.ProducName}
                      image={e.ProductsImage[0]}
                      id={e._id}
                    />
                  );
                }
              }
            )}
        </div>
      </section>
    </div>
  );
}
