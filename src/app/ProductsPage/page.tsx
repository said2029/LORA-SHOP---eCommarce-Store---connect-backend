"use client";
import * as React from "react";
import { Drawer, IconButton, Pagination, Typography } from "@mui/material";
import ProductCard from "@/components/Cards/ProductCard";
import { useEffect, useState } from "react";
import { Filter } from "lucide-react";
import FilterSidbar from "./_components/Fliter";
import ProductApi from "../../_utils/axiosProduct";
export default function page() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  // Pagination
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  // === Pagination ===

  const [products, setProducts] = useState([]);
  // api
  useEffect(() => {
    ProductApi.getProductsApi(page - 1).then((res: any) => {
      setProducts(res.data);
      console.log(res);
    });
  }, [page]);

  return (
    <>
      <div className=" xl:px-14 flex flex-col justify-center items-center mt-9">
        <div className="grid grid-cols-4 gap-3 xl:gap-6 pb-4 mt-5">
          {/* filter */}
          <div className="hidden xl:block">
            <FilterSidbar />
          </div>
          {/* products */}
          <div className=" mt-5 col-span-full xl:hidden">
            <IconButton onClick={openDrawer}>
              <Filter /> Filter
            </IconButton>
          </div>
          <section className="col-span-4 xl:col-span-3 grid grid-cols-1 justify-center items-center mx-auto gap-6 w-full px-4 lg:px-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
            {products.map(
              (e: {
                Product_Description: string;
                productprice: {};
                productSaleprice: {};
                _id: string;
                ProducName: string;
                ProductsImage: [any];
              }) => {
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
            )}
          </section>
        </div>
        <div className="mt-5 w-full flex justify-center px-3">
          <Pagination
            size="medium"
            page={page}
            onChange={handleChange}
            count={2}
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
            <FilterSidbar />
          </div>
        </div>
      </Drawer>
    </>
  );
}
