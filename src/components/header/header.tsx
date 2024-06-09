"use client";
import { CircleUserRound, Phone, PhoneCall, Search } from "lucide-react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Button, Drawer } from "@material-tailwind/react";
import { useEffect, useRef, useState } from "react";
import { List, ListItem } from "@material-tailwind/react";
import DropMenuCar from "./_componets/DropMenuCar";
import CloseIcon from "@mui/icons-material/Close";
import ShopCard from "./_componets/shopCard";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getStoreState } from "@/Redux/store";
import UseIsClient from "@/hooks/IsClient";
import AuthDialog from "../dialog/authDialog";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [openDrawerCart, setopenDrawerCart] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const openDrawerCartEvent = () => setopenDrawerCart(true);
  const closeDrawerCart = () => setopenDrawerCart(false);

  const pathName = usePathname();
  let [UtlAuthPage, setUtlAuthPage] = useState(false);

  const StoreRedux = useSelector(getStoreState);
  // search Form
  const router = useRouter();
  const FormSearch = useRef<HTMLFormElement[]>([]);

  function addRefSearchInput(el: HTMLFormElement) {
    if (el && !FormSearch.current.includes(el)) {
      FormSearch.current.push(el);
    }
  }
  if (FormSearch.current != null && FormSearch.current != undefined) {
    FormSearch.current.map((e) => {
      e.addEventListener("submit", (ev: SubmitEvent) => {
        ev.preventDefault();
        const dataForm = new FormData(e);
        router.push(`/Products?search=${dataForm.get("search")}`);
      });
    });
  }

  useEffect(() => {
    setUtlAuthPage(pathName.includes("auth"));
  }, [pathName]);
  const isClient = UseIsClient();

  return (
    <>
      {isClient && !UtlAuthPage && (
        <header className="w-full">
          <div className="py-2 w-full flex gap-2 flex-col md:flex-row justify-center items-center md:justify-between px-16 text-[13px] text-gray-900  text-nowrap">
            <div className="flex gap-1 items-center">
              <PhoneCall widths={1} size={14} />
              <div className="flex gap-1">
                <section>
                  {StoreRedux.storeSetting.settingData.help_text}{" "}
                  <span className="text-base-color-500">
                    {StoreRedux.storeSetting.settingData.phone_number}
                  </span>
                </section>
              </div>
            </div>
            <section>
              <ul className="flex gap-2 items-center">
                <li className="px-2 hover:text-base-color-200/75">
                  <Link href={"/info/aboutUs"}>
                    {StoreRedux.storeSetting.settingData.about_us}
                  </Link>
                </li>
                <li>
                  <hr className="border border-gray-900 h-5" />
                </li>
                <li className="px-2 hover:text-base-color-200/75 ">
                  <Link href={"/contect_us"}>
                    {StoreRedux.storeSetting.settingData.contact_us}
                  </Link>
                </li>
                <li>
                  <hr className="border border-gray-900 h-5" />
                </li>
                <li className=" px-2 hover:text-base-color-200/75 ">
                  <AuthDialog
                    useIcon={false}
                    variantBtn="text"
                    name={StoreRedux.storeSetting.settingData.login}
                    className="text-gray-800 bg-none"
                  />
                </li>
                <li>
                  <hr className="border border-gray-900 h-5" />
                </li>
                <li className=" px-2 hover:text-base-color-200/75 ">
                  <a href="">
                    {StoreRedux.storeSetting.settingData.my_account}
                  </a>
                </li>
              </ul>
            </section>
          </div>

          <div className="mx-auto bg-base-color-500 flex flex-col w-full justify-center items-center py-3 gap-3 px-4 sm:px-6 lg:px-8 md:flex-row">
            <Link className="block text-teal-600 mr-3" href="/">
              <span className="sr-only">Home</span>
              <picture>
                {StoreRedux.storeSetting != "" && (
                  <Image
                    width={200}
                    height={200}
                    src={
                      StoreRedux?.storeSetting?.settingData.Header_Logo_image
                    }
                    alt="logo"
                  />
                )}
              </picture>
            </Link>

            <div className="flex flex-col items-center justify-center flex-grow w-full md:w-full md:flex-row py-2">
              {/* Search bar */}
              <form
                ref={addRefSearchInput}
                className="flex-grow flex-shrink-0 mb-5 md:mb-0 block sm:hidden md:block"
                method="get"
              >
                <div className="md:ml-8 relative w-full flex items-center">
                  <input
                    placeholder="Search for products (e.g. Smartwatch, Smart Phone, Camera)"
                    className="py-[10px] px-3 bg-gray-50 rounded-lg w-full pl-10 text-sm focus:outline-none focus:border-teal-500 focus:ring-1"
                    type="text"
                    name="search"
                  />
                  <Search className="absolute left-2 text-gray-400" />
                </div>
              </form>
              {/* Search bar===== */}

              <div className="flex justify-evenly md:justify-end items-center gap-4 w-full md:w-fit md:ml-12 ">
                <div className="flex gap-4 items-center">
                  <IconButton onClick={openDrawerCartEvent} aria-label="cart">
                    <Badge badgeContent={4} color="error">
                      <ShoppingCartIcon
                        sx={{ color: "white", fontSize: "27px" }}
                      />
                    </Badge>
                  </IconButton>
                </div>

                <form
                  ref={addRefSearchInput}
                  className="flex-grow flex-shrink-0 mb-5 md:mb-0 hidden sm:block md:hidden"
                  method="get"
                >
                  <div className="md:ml-8 relative w-full flex items-center">
                    <input
                      placeholder="Search for products (e.g. Smartwatch, Smart Phone, Camera)"
                      className="py-[10px] px-3 bg-gray-50 rounded-3xl border border-gray-300 w-full pl-10 text-sm focus:outline-none focus:border-teal-500 focus:ring-1"
                      type="text"
                      name="search"
                    />
                    <Search className="absolute left-2 text-gray-400" />
                  </div>
                </form>

                <div>
                  <AuthDialog
                    useIcon={true}
                    variantBtn="contained"
                    name={StoreRedux.storeSetting.settingData.login}
                  />
                </div>

                <button
                  onClick={openDrawer}
                  className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600 sm:hidden"
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

          <div className="py-3 gap-3 px-4 sm:px-6 lg:px-8  shadow-md shadow-gray-200 mt-4 hidden sm:block">
            <div className="mx-auto flex flex-col items-center max-w-screen-2xl md:flex-row">
              <nav
                aria-label="Global"
                className="flex justify-between w-full text-md font-medium flex-wrap gap-3"
              >
                <ul className="flex items-center gap-3 ">
                  {StoreRedux.storeSetting.settingData.Categories_Header ==
                    "true" && (
                    <li>
                      <DropMenuCar
                        categorys={StoreRedux.CategoryData?.categorys}
                        name={StoreRedux.storeSetting.settingData.categories}
                      />
                    </li>
                  )}
                  {StoreRedux.storeSetting.settingData.About_Us_Header ==
                    "true" && (
                    <li className="px-2 hover:text-base-color-500">
                      <Link href={"/info/aboutUs"}>
                        {StoreRedux.storeSetting.settingData.about_us}
                      </Link>
                    </li>
                  )}
                  {StoreRedux.storeSetting.settingData.ContactUs_Header ==
                    "true" && (
                    <li className=" px-2 hover:text-base-color-200/75 ">
                      <Link href={"/contect_us"}>
                        {StoreRedux.storeSetting.settingData.contact_us}
                      </Link>
                    </li>
                  )}
                  {StoreRedux.storeSetting.settingData.FAQ_Header == "true" && (
                    <li className=" px-2 hover:text-base-color-200/75 ">
                      <Link href={"/faq"}>
                        {StoreRedux.storeSetting.settingData.faq}
                      </Link>
                    </li>
                  )}
                  {StoreRedux.storeSetting.settingData.Offers_Header ==
                    "true" && (
                    <li className=" px-2 hover:text-base-color-200/75 ">
                      <Link
                        className="bg-teal-100/45 relative border border-dashed border-teal-700 text-teal-500  py-1 px-2 rounded-lg font-normal"
                        href={"/offers"}
                      >
                        {StoreRedux.storeSetting.settingData.offers}
                        <span className="w-3 h-3 rounded-full animate-ping bg-teal-700 absolute -top-1 -right-1" />
                        <span className="w-3 h-3 rounded-full  bg-teal-700 absolute -top-1 -right-1" />
                      </Link>
                    </li>
                  )}
                </ul>

                <ul className="flex gap-5 ">
                  {StoreRedux.storeSetting.settingData.PrivacyPolicy_Header ==
                    "true" && (
                    <li className="cursor-pointer duration-300 hover:text-base-color-200/75">
                      <Link href={"/info/privacyPolicy"}>
                        {StoreRedux.storeSetting.settingData.privacy_policy}
                      </Link>{" "}
                    </li>
                  )}
                  {StoreRedux.storeSetting.settingData.Terms_Header ==
                    "true" && (
                    <li className="cursor-pointer duration-300 hover:text-base-color-200/75">
                      <Link href={"/info/terms_conditions"}>
                        {StoreRedux.storeSetting.settingData.term_and_condition}
                      </Link>{" "}
                    </li>
                  )}
                </ul>
              </nav>
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
            className="p-4 z-30"
          >
            <div>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  {StoreRedux.storeSetting && (
                    <Image
                      width={200}
                      height={200}
                      src={
                        StoreRedux?.storeSetting.settingData
                          .Header_Logo_image || "/logoipsum.svg"
                      }
                      alt="logo"
                    />
                  )}
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
                    <DropMenuCar
                      categorys={StoreRedux.CategoryData?.categorys}
                      name={StoreRedux.storeSetting.settingData.categories}
                    />
                  </ListItem>
                  <ListItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <Link href={"/Products"}>Products</Link>
                  </ListItem>

                  <ListItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <Link href={"/info/aboutUs"}>
                      {StoreRedux.storeSetting.settingData.about_us}
                    </Link>
                  </ListItem>

                  <ListItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <Link href={"/info/privacyPolicy"}>
                      {StoreRedux.storeSetting.settingData.privacy_policy}
                    </Link>
                  </ListItem>
                  <ListItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <Link href={"/info/terms_conditions"}>
                      {StoreRedux.storeSetting.settingData.term_and_condition}
                    </Link>
                  </ListItem>

                  <ListItem
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                  >
                    <Link href={"/contect_us"}>
                      {StoreRedux.storeSetting.settingData.contact_us}
                    </Link>
                  </ListItem>
                </List>
                <div onClick={closeDrawer} className="absolute bottom-6 w-full left-0 px-5 flex flex-col gap-2">
                  <AuthDialog
                    useIcon={true}
                    variantBtn="contained"
                    name={StoreRedux.storeSetting.settingData.login}
                  />
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
