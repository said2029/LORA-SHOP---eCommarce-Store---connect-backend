"use client";
import { LogOut, PhoneCall, Search, ShoppingBag } from "lucide-react";
import { Badge, IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
import { Drawer } from "@material-tailwind/react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { List, ListItem } from "@material-tailwind/react";
import DropMenuCar from "./_componets/DropMenuCar";
import CloseIcon from "@mui/icons-material/Close";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";
import { getStoreState } from "@/Redux/store";
import UseIsClient from "@/hooks/IsClient";
import AuthDialog, { ContarollerAuthDeloag } from "../dialog/authDialog";
import { useCookies } from "react-cookie";
import ShopCard from "./_componets/shopCard";

class ContarollerDrawer {
  setOpenDrawerCart!: Dispatch<SetStateAction<boolean>>;
  toggleSetOpenDrawerCart: () => void;

  // drawer nav
  setOpenDrawerNav!: Dispatch<SetStateAction<boolean>>;
  toggleOpenDrawerNav: () => void;

  constructor() {
    this.toggleSetOpenDrawerCart = () => {
      this.setOpenDrawerCart(old => !old);
    };

    this.toggleOpenDrawerNav = () => {
      this.setOpenDrawerNav(old => !old);
    }
  }

}

export const ContarollerDrawer2 = new ContarollerDrawer();

export default function Header() {
  const [open, setDrawerNav] = useState(false);
  const [openDrawerCart, setOpenDrawerCart] = useState(false);

  const openDrawer = () => setDrawerNav(true);
  const closeDrawer = () => setDrawerNav(false);

  const openDrawerCartEvent = () => {
    setOpenDrawerCart(true);
    window.document.body.style.touchAction = "none";
    window.document.body.style.overflow = "hidden";
  };

  const closeDrawerCart = () => {
    setOpenDrawerCart(false);
    window.document.body.style.touchAction = "";
    window.document.body.style.overflow = "";
  };

  ContarollerDrawer2.setOpenDrawerCart = setOpenDrawerCart;
  ContarollerDrawer2.setOpenDrawerNav = setDrawerNav;


  const pathName = usePathname();
  let [UtlAuthPage, setUtlAuthPage] = useState(false);

  const StoreRedux = useSelector(getStoreState);
  // search Form
  const router = useRouter();
  const FormSearch = useRef<HTMLFormElement[]>([]);

  // cookies
  const [cookie, SetCookie] = useCookies(["access_token"]);

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
        <>
          <section className="w-full  print:hidden bg-white">
            <div className="py-2 w-full flex gap-2 flex-col md:flex-row justify-center items-center md:justify-between px-16 text-[13px] text-gray-900  text-nowrap">
              <div className="flex gap-1 items-center">
                <PhoneCall widths={1} size={14} />
                <div className="flex gap-1">
                  <section>
                    {StoreRedux.HomeSetting.settingData.help_text}{" "}
                    <span className="text-base-color-500">
                      {StoreRedux.HomeSetting.settingData.phone_number}
                    </span>
                  </section>
                </div>
              </div>
              <section >
                <ul className="flex gap-2 items-center">
                  <li className="px-2 hover:text-base-color-200/75">
                    <Link href={"/info/aboutUs"}>
                      {StoreRedux.HomeSetting.settingData.about_us}
                    </Link>
                  </li>
                  <li>
                    <hr className="border border-gray-900 h-5" />
                  </li>
                  <li className="px-2 hover:text-base-color-200/75 ">
                    <Link href={"/contect_us"}>
                      {StoreRedux.HomeSetting.settingData.contact_us}
                    </Link>
                  </li>
                  <li>
                    <hr className="border border-gray-900 h-5" />
                  </li>
                  {!cookie.access_token ? (
                    <>
                      <li onClick={() => {
                        ContarollerAuthDeloag.openAuthDelog();
                      }} className="cursor-pointer px-2 hover:text-base-color-200/75 ">
                        log in
                      </li>
                    </>
                  ):
                  <button onClick={ContarollerAuthDeloag.log_out}>log out</button>
                  }
                  <li>
                    <hr className="border border-gray-900 h-5" />
                  </li>
                  {/* <li className=" px-2 hover:text-base-color-200/75 ">
                    <a href="">
                      {StoreRedux.HomeSetting.settingData.my_account}
                    </a>
                  </li> */}
                </ul>
              </section>
            </div>

            {/* Navbar drawer */}
            <Drawer
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              overlay={true}
              open={open}
              onClose={closeDrawer}
              className="p-4"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    {StoreRedux.HomeSetting && (
                      <Image
                        width={200}
                        height={200}
                        src={
                          StoreRedux?.HomeSetting.settingData
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
                    onPointerEnterCapture={() => { }}
                    onPointerLeaveCapture={() => { }}
                  >
                    <ListItem
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                    >
                      <DropMenuCar
                        categorys={StoreRedux.CategoryData?.categorys}
                        name={StoreRedux.HomeSetting.settingData.categories}
                      />
                    </ListItem>
                    <ListItem
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                    >
                      <Link href={"/Products"}>Products</Link>
                    </ListItem>
                    <ListItem
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                    >
                      {StoreRedux.HomeSetting.settingData.Offers_Header ==
                        "true" && (
                          <Link
                            className="bg-teal-100/45 relative border border-dashed border-teal-700 text-teal-500  py-1 px-2 rounded-lg font-normal"
                            href={"/offers"}
                          >
                            {StoreRedux.HomeSetting.settingData.offers}
                            <span className="w-3 h-3 rounded-full animate-ping bg-teal-700 absolute -top-1 -right-1" />
                            <span className="w-3 h-3 rounded-full  bg-teal-700 absolute -top-1 -right-1" />
                          </Link>
                        )}

                    </ListItem>

                    <ListItem
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                    >
                      <Link href={"/info/aboutUs"}>
                        {StoreRedux.HomeSetting.settingData.about_us}
                      </Link>
                    </ListItem>

                    <ListItem
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                    >
                      <Link href={"/info/privacyPolicy"}>
                        {StoreRedux.HomeSetting.settingData.privacy_policy}
                      </Link>
                    </ListItem>
                    <ListItem
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                    >
                      <Link href={"/info/terms_conditions"}>
                        {StoreRedux.HomeSetting.settingData.term_and_condition}
                      </Link>
                    </ListItem>
                    <ListItem
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                    >
                      {StoreRedux.HomeSetting.settingData.FAQ_Header ==
                        "true" && (
                          <Link href={"/faq"}>
                            {StoreRedux.HomeSetting.settingData.faq}
                          </Link>
                        )}

                    </ListItem>

                    <ListItem
                      placeholder=""
                      onPointerEnterCapture={() => { }}
                      onPointerLeaveCapture={() => { }}
                    >
                      <Link href={"/contect_us"}>
                        {StoreRedux.HomeSetting.settingData.contact_us}
                      </Link>
                    </ListItem>
                  </List>
                  {!cookie.access_token ?
                    <div
                      onClick={closeDrawer}
                      className="absolute bottom-6 w-full left-0 px-5 flex flex-col gap-2"
                    >
                      <AuthDialog
                        useIcon={true}
                        variantBtn="contained"
                        name={StoreRedux.HomeSetting.settingData.login}
                      />
                    </div>
                    :
                    <div
                      onClick={closeDrawer}
                      className="absolute  bottom-6 w-full left-0 px-5 flex flex-col gap-2"
                    >
                      <button className="bg-red-400 rounded-lg flex justify-center gap-2 w-full py-2 text-white" onClick={() => {
                        ContarollerAuthDeloag.log_out();
                      }}>
                        <LogOut strokeWidth={1} />
                        {StoreRedux.HomeSetting.settingData.logout}
                      </button>

                    </div>
                  }
                </div>
              </div>
            </Drawer>
            {/* ==== drawer carts shop ==== */}
            <Drawer
              placeholder=""
              onPointerEnterCapture={() => { }}
              onPointerLeaveCapture={() => { }}
              overlay={true}
              onClose={closeDrawerCart}
              placement="right"
              open={openDrawerCart}
              size={430}
            >
              <div className="flex flex-col min-h-full ">
                <div className="flex items-center justify-between bg-deep-purple-50 p-6 ">
                  <div className="flex gap-2">
                    <ShoppingBag strokeWidth={0.5} />
                    <h1 className="font-semibold">
                      Shop Cart ({StoreRedux.ShopCard.items.length})
                    </h1>
                  </div>

                  <button
                    className="text-sm text-gray-500"
                    onClick={closeDrawerCart}
                  >
                    <CloseIcon />
                    Close
                  </button>
                </div>
                {StoreRedux.ShopCard.items.length <= 0 ? (
                  <div className="flex space-y-3 flex-col justify-center items-center flex-grow">
                    <img
                      width={100}
                      height={100}
                      src="/images/icons/charity.gif"
                      alt=""
                    />
                    <h1 className="font-semibold text-xl">
                      Your cart is empty
                    </h1>
                    <span className="text-sm text-gray-400">
                      No items added in your cart. Please add product to your
                      cart list.
                    </span>
                  </div>
                ) : (
                  <div className="overflow-y-scroll flex-grow max-h-full ">
                    {StoreRedux.ShopCard.items.map((e: any, i: number) => {
                      return <ShopCard index={i} key={i} itemCard={e} />;
                    })}
                  </div>
                )}
                <Link
                  onClick={() => {
                    if (!cookie.access_token) {
                      ContarollerAuthDeloag.openAuthDelog();
                    }
                    closeDrawerCart();
                  }}
                  href={"/checkout"}
                  className="w-full bg-white h-[80px]  p-2"
                >
                  <div className="bg-base-color-500 rounded-md h-full w-full flex justify-between items-center px-4 hover:bg-base-color-200/75">
                    <p className="text-white font-medium text-lg">
                      Proceed to Checkout
                    </p>

                    <span className="bg-white rounded-md p-1">
                      ${StoreRedux.ShopCard?.totelPrice.toFixed(2)}
                    </span>
                  </div>
                </Link>
              </div>
            </Drawer>
          </section>


          <div className="z-50 bg-white">
            <div className="mx-auto flex bg-base-color-500  flex-col w-full justify-center items-center py-3 gap-3 px-4 sm:px-6 lg:px-8 md:flex-row">
              <Link className="md:block hidden text-teal-600 mr-3" href="/">
                <span className="sr-only">Home</span>
                <picture>
                  {StoreRedux.HomeSetting != "" && (
                    <Image
                      width={200}
                      height={200}
                      src={
                        StoreRedux?.HomeSetting?.settingData.Header_Logo_image
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
                  className="flex-grow w-full md:w-fit flex-shrink-0 mb-0 block sm:hidden md:block"
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

                <div className="md:flex hidden justify-evenly md:justify-end items-center gap-4 w-full md:w-fit md:ml-12 ">
                  <div className="flex gap-4 items-center">
                    <IconButton onClick={openDrawerCartEvent} aria-label="cart">
                      <Badge
                        badgeContent={StoreRedux.ShopCard?.items?.length}
                        color="error"
                      >
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
                  {!cookie.access_token && (
                    <div>
                      <AuthDialog
                        useIcon={true}
                        variantBtn="contained"
                        name={StoreRedux.HomeSetting.settingData.login}
                      />
                    </div>
                  )}

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
                    {StoreRedux.HomeSetting.settingData.Categories_Header ==
                      "true" && (
                        <li>
                          <DropMenuCar
                            categorys={StoreRedux.CategoryData?.categorys}
                            name={StoreRedux.HomeSetting.settingData.categories}
                          />
                        </li>
                      )}
                    {StoreRedux.HomeSetting.settingData.About_Us_Header ==
                      "true" && (
                        <li className="px-2 hover:text-base-color-500">
                          <Link href={"/info/aboutUs"}>
                            {StoreRedux.HomeSetting.settingData.about_us}
                          </Link>
                        </li>
                      )}
                    {StoreRedux.HomeSetting.settingData.ContactUs_Header ==
                      "true" && (
                        <li className=" px-2 hover:text-base-color-200/75 ">
                          <Link href={"/contect_us"}>
                            {StoreRedux.HomeSetting.settingData.contact_us}
                          </Link>
                        </li>
                      )}
                    {StoreRedux.HomeSetting.settingData.FAQ_Header ==
                      "true" && (
                        <li className=" px-2 hover:text-base-color-200/75 ">
                          <Link href={"/faq"}>
                            {StoreRedux.HomeSetting.settingData.faq}
                          </Link>
                        </li>
                      )}
                    {StoreRedux.HomeSetting.settingData.Offers_Header ==
                      "true" && (
                        <li className=" px-2 hover:text-base-color-200/75 ">
                          <Link
                            className="bg-teal-100/45 relative border border-dashed border-teal-700 text-teal-500  py-1 px-2 rounded-lg font-normal"
                            href={"/offers"}
                          >
                            {StoreRedux.HomeSetting.settingData.offers}
                            <span className="w-3 h-3 rounded-full animate-ping bg-teal-700 absolute -top-1 -right-1" />
                            <span className="w-3 h-3 rounded-full  bg-teal-700 absolute -top-1 -right-1" />
                          </Link>
                        </li>
                      )}
                  </ul>

                  <ul className="flex gap-5 ">
                    {StoreRedux.HomeSetting.settingData.PrivacyPolicy_Header ==
                      "true" && (
                        <li className="cursor-pointer duration-300 hover:text-base-color-200/75">
                          <Link href={"/info/privacyPolicy"}>
                            {StoreRedux.HomeSetting.settingData.privacy_policy}
                          </Link>{" "}
                        </li>
                      )}
                    {StoreRedux.HomeSetting.settingData.Terms_Header ==
                      "true" && (
                        <li className="cursor-pointer duration-300 hover:text-base-color-200/75">
                          <Link href={"/info/terms_conditions"}>
                            {
                              StoreRedux.HomeSetting.settingData
                                .term_and_condition
                            }
                          </Link>{" "}
                        </li>
                      )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>

        </>
      )}
    </>
  );
}


