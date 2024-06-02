"use client";
import { CircleUserRound, Search } from "lucide-react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Button, Drawer, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { List, ListItem } from "@material-tailwind/react";
import DropMenuCar from "./_componets/DropMenuCar";
import CloseIcon from "@mui/icons-material/Close";
import ShopCard from "./_componets/shopCard";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDrawerCart, setopenDrawerCart] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const openDrawerCartEvent = () => setopenDrawerCart(true);
  const closeDrawerCart = () => setopenDrawerCart(false);

  const pathName = usePathname();
  let [UtlAuthPage, setUtlAuthPage] = useState(false);

  const settingStore = useSelector(
    (state: { storeSetting: { settingData: { Header_Logo_image: "" } } }) =>
      state.storeSetting.settingData
  );

  useEffect(() => {
    setUtlAuthPage(pathName.includes("auth"));
  }, [pathName]);

  return (
    <>
      {!UtlAuthPage && (
        <header className=" shadow-md shadow-gray-200 w-full py-2">
          <div className="mx-auto flex flex-col max-w-screen-xl justify-center items-center gap-3 px-4 sm:px-6 lg:px-8 md:flex-row">
            <Link className="block text-teal-600 mr-3" href="/">
              <span className="sr-only">Home</span>
              <img width={140} src={settingStore.Header_Logo_image} alt="" />
            </Link>

            <div className="flex flex-col items-center justify-center flex-grow w-full md:w-[content] md:flex-row ">
              <nav aria-label="Global" className="hidden xl:block ">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      <DropMenuCar />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/ProductsPage"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      Brands
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* Search bar */}
              <form
                className="flex-grow flex-shrink-0 mb-5 md:mb-0"
                method="get"
              >
                <div className="md:ml-8 relative w-full flex items-center">
                  <input
                    placeholder="Search your products"
                    className="py-[10px] px-3 bg-gray-50 rounded-3xl border border-gray-300 w-full pl-10 text-sm focus:outline-none focus:border-teal-500 focus:ring-1"
                    type="text"
                  />
                  <Search className="absolute left-2 text-gray-400" />
                </div>
              </form>
              {/* Search bar===== */}

              <div className="flex justify-evenly md:justify-end items-center gap-4 w-full md:w-fit md:ml-12 ">
                <div className="flex gap-4 items-center">
                  <IconButton onClick={openDrawerCartEvent} aria-label="cart">
                    <Badge badgeContent={4} color="primary">
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                </div>
                <Button
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                  color="blue"
                >
                  <Link
                    className="flex items-center gap-1"
                    color="blue"
                    href={"/auth"}
                  >
                    <CircleUserRound size={20} />
                    Sign In
                  </Link>
                </Button>
                {/* <Link
              className="text-nowrap font-sans flex gap-2 items-center rounded-3xl bg-gray-200 px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-300"
              href="#"
            >
              <UserRoundPlus />
              Sign In
            </Link> */}

                <button
                  onClick={openDrawer}
                  className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600 xl:hidden"
                >
                  <span className="sr-only">Toggle menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Navbar drawer */}
          <Drawer
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            overlay={false}
            open={open}
            onClose={closeDrawer}
            className="p-4 z-10"
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <img
                    loading="lazy"
                    decoding="async"
                    src="./logoipsum.svg"
                    alt=""
                  />
                </div>

                <button onClick={closeDrawer}>
                  <CloseIcon />
                </button>
              </div>
              <div className="flex flex-col justify-between ">
                <List
                  placeholder=""
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                >
                  <ListItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <DropMenuCar />
                  </ListItem>
                  <ListItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Products
                  </ListItem>
                  <ListItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    Brands
                  </ListItem>
                </List>
                <div className="absolute bottom-6 w-full left-0 px-5 flex flex-col gap-2">
                  <Button
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                    color="blue"
                  >
                    <Link
                      className="flex items-center gap-1"
                      color="blue"
                      href={"/auth"}
                    >
                      <CircleUserRound size={20} />
                      Sign In
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Drawer>
          {/* ==== drawer carts shop ==== */}
          <Drawer
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            overlay={false}
            placement="right"
            open={openDrawerCart}
            onClose={closeDrawerCart}
            className="p-4"
          >
            <div className="mb-6 flex items-center justify-between">
              <h1>Shop Cart (10)</h1>
              <button onClick={closeDrawerCart}>
                <CloseIcon />
              </button>
            </div>
            <div>
              <ShopCard />
            </div>
          </Drawer>
        </header>
      )}
    </>
  );
}
