"use client";
import { Drawer, IconButton, Pagination, Typography } from "@mui/material";
import ProductCard from "@/components/Cards/ProductCard";
import ProductListSkeleton from "@/components/ProductListSkeleton";
import { SyntheticEvent, useEffect, useState } from "react";
import { Filter } from "lucide-react";
import FilterSidbar from "./_components/Fliter";
import ProductApi from "../../_utils/axiosProduct";

export default function page() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  // === Pagination ===

  const [products, setProducts] = useState({
    loading: true,
    data: [],
    length: 0,
  });

  // Filter Select Category callback
  let category: string[] = [];
  function HandCategoryAction(value: SyntheticEvent<Element, Event>) {
    const target = value.target as HTMLInputElement;
    if (target.checked) {
      category.push(target.value);
    } else {
      category.slice(category.indexOf(target.value), 1);
    }
  }

  function GetDataProduct(res: any) {
    if (res.data.length <= 0) {
      res.data.loading = false;
      res.data.data = [];
    } else {
      res.data.loading = false;
    }
    setProducts(res.data);
  }

  function handleApplayFilter() {
    ProductApi.getProductsApi(page - 1, category).then((res: any) => {
      GetDataProduct(res);
      closeDrawer();
    });
  }
  // api
  useEffect(() => {
    ProductApi.getProductsApi(page - 1, category).then((res: any) => {
      GetDataProduct(res);
    });
  }, [page]);

  return (
    <>
      <div className=" xl:px-14 flex flex-col justify-center items-center mt-9">
        <div className="grid grid-cols-4 gap-3 xl:gap-6 pb-4 mt-5">
          {/* filter */}
          <div className="hidden xl:block">
            <FilterSidbar
              categoryAction={HandCategoryAction}
              applayFilter={handleApplayFilter}
            />
          </div>
          {/* products */}
          <div className=" mt-5 col-span-full xl:hidden">
            <IconButton onClick={openDrawer}>
              <Filter /> Filter
            </IconButton>
          </div>

          <section className="col-span-full xl:col-span-3 grid grid-cols-1 justify-center items-center mx-auto gap-6 w-full px-4 lg:px-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {/* product Skeleton */}
            {products.loading && ProductListSkeleton({ count: 10 })}
            {products.loading == false && products.data.length <= 0 && (
              <div className="text-lg text-gray-400 text-center col-span-full ">
                No Products!
              </div>
            )}

            {products.loading == false &&
              products.data.length >= 1 &&
              products.data.map(
                (e: {
                  Product_Description: string;
                  productprice: { $numberDecimal: string };
                  productSaleprice: { $numberDecimal: string };
                  _id: string;
                  ProducName: string;
                  ProductsImage: [any];
                  slug: string;
                  rating: { $numberDecimal: string };
                  productPublished: string;
                }) => {
                  if (e.productPublished != "true") return;
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
                      rating={e?.rating?.$numberDecimal}
                    />
                  );
                }
              )}
          </section>
        </div>
        <div className="mt-5 w-full flex justify-center px-3">
          <Pagination
            size="medium"
            page={page}
            onChange={handleChange}
            count={Math.ceil(products.length / 10)}
            color="primary"
            siblingCount={0}
          />
        </div>
      </div>

      <Drawer open={open} onClose={closeDrawer}>
        <div className="px-5">
          <div className="my-6 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Product Filters
            </Typography>
            <IconButton onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <div>
            <FilterSidbar
              categoryAction={HandCategoryAction}
              applayFilter={handleApplayFilter}
            />
          </div>
        </div>
      </Drawer>
    </>
  );
}
