"use client";
import { getStoreState } from "@/Redux/store";
import { ContarollerAuthDeloag } from "@/components/dialog/authDialog";
import { Avatar, Badge } from "@mui/material";
import { AlignLeft, Home, ShoppingCart, UserRound, } from "lucide-react";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { ContarollerDrawer2 } from "../header";
import { useEffect, useState } from "react";

export default function mobile_header() {
    const StoreRedux = useSelector(getStoreState);
    const [cookie, setCookie] = useCookies(["access_token"]);


    let [imageUser, set_imageUser] = useState("");
    useEffect(() => {
        if (typeof window !== "undefined") {
            set_imageUser(window?.localStorage?.getItem("UserImage") || "");
        }
    }, []);


    return (
        <footer className="bg-base-color-500 z-50 w-full float-end min-h-16 fixed bottom-0 md:hidden">

            <ul className="flex justify-around items-center min-h-16 text-white">
                <li>
                    <button onClick={() => {
                        ContarollerDrawer2.toggleOpenDrawerNav();
                    }}>
                        <AlignLeft size={26} strokeWidth={2} />
                    </button>
                </li>
                <li>
                    <button onClick={() => {
                        ContarollerDrawer2.toggleSetOpenDrawerCart();
                    }}>
                        <Badge
                            badgeContent={StoreRedux.ShopCard?.items?.length}
                            color="error"
                        >

                            <ShoppingCart size={26} strokeWidth={2} />
                        </Badge>

                    </button>
                </li>
                <li>
                    <Link href={"/"} >
                        <Home size={26} strokeWidth={2} />
                    </Link>
                </li>
                <li>
                    <button onClick={() => {
                        if (!cookie.access_token) {
                            ContarollerAuthDeloag.openAuthDelog();
                        }
                    }} >
                        {cookie ?
                            <Avatar sx={{ width: "34px", height: "34px" }} alt="user image" src={imageUser || ""} />
                            :
                            <UserRound size={26} strokeWidth={2} />
                        }
                    </button>
                </li>
            </ul>
        </footer>
    )
}
