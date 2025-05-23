"use client";
import ProductCard from "@/components/Cards/ProductCard";
import { Divider, Skeleton } from "@mui/material";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { getProductApi } from "../../../_utils/axiosProduct";
import getProductsApi from "../../../_utils/axiosProduct";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Image from "next/image";

import { useCookies } from "react-cookie";

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
  const [ColorProducts, setColorProducts] = useState<String[]>([]);

  function heandlerColorChange(event: ChangeEvent<HTMLInputElement>) {
    const newArray = [...ColorProducts];
    if (event.target.checked) {
      newArray.push(event.target.value);
    } else {
      newArray.splice(newArray.indexOf(event.target.value), 1);
    }
    setColorProducts(newArray);
  }


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
              <div className="md:flex lg:items-start ">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper md:order-2 md:ml-5 py-5 max-h-[400px] md:max-h-[500px] w-full md:w-[550px]"
                >
                  {product.ProductsImage.length >= 1 ? (
                    product.ProductsImage?.map((image: string, i: number) => {
                      return (
                        <SwiperSlide className="w-full overflow-hidden max-h-full flex items-center justify-center" key={i}>
                          <div className="rounded-lg aspect-square object-fill flex justify-center object-center w-full">
                            <img
                              className="object-fill rounded-lg"
                              src={image || "logoipsum.svg"}
                              alt="Prodout image"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })
                  ) : (
                    <SwiperSlide>
                      <div className="w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg  animate-pulse bg-gray-400"></div>
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

            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 text-gray-900 flex flex-col ">
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


              <div className="mt-3">
                {product?.Product_Description ? (
                  <p className="line-clamp-4">{product?.Product_Description}</p>
                ) : (
                  <Skeleton
                    animation={"wave"}
                    sx={{ width: "100%", height: 200 }}
                  />
                )}
              </div>

              {product.colors.length >= 2 && (
                <div>
                  <h2 className="mt-4 text-base text-gray-900 font-bold">
                    Choose Color
                  </h2>
                  <hr className="my-2" />
                  <form className="mt-3 flex select-none flex-wrap items-center gap-3">
                    {product.colors?.map((e: string) => {
                      return (
                        <input
                          type="checkbox"
                          key={e}
                          value={e}
                          onChange={(event) => heandlerColorChange(event)}
                          style={{
                            backgroundColor: e,
                            outlineColor: e,
                          }}
                          className="h-6 w-6 appearance-none rounded-full cursor-pointer  checked:outline checked:outline-2 checked:outline-offset-2"
                        />
                      );
                    })}
                  </form>
                </div>
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
                    []
                    dispatch(addProductToCard({ id: product._id, product: product, colors: ColorProducts }));
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      className=""
                    />
                  </svg>
                  Cancel Anytime
                </li>
              </ul>

            </div>

            <div className="lg:col-span-3 ">
              <div className="border-b border-gray-300">
                <nav className="flex gap-4">
                  <button
                    className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800 "
                  >
                    Description
                  </button>

                </nav>
              </div>
              <div className=" w-full text-gray-600 text-sm flow-root mt-5">
                {product?.Product_Description ? (
                  <pre className=" max-w-full text-wrap">{product.Product_Description}</pre>
                ) : (
                  <Skeleton
                    animation={"wave"}
                    sx={{ width: "100%", height: 300 }}
                  />
                )}
              </div>

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
                e: any,
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
                      slug={e?.slug}
                      rating={e.rating?.$numberDecimal}
                      Stock={e.productStock?.$numberDecimal}

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
