"use client";

import { resetShopCards } from "@/Redux/feature/ShopCards/ShopCards";
import { getStoreState } from "@/Redux/store";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function page() {
    const router = useRouter();
    const [isLoading, set_isLoading] = useState(true);
    const [success, set_success] = useState(false);

    const dispatch = useDispatch();

    function handleClick() {
        set_isLoading(true);
        if (!window.localStorage.getItem("order")) {
            router.push("/");
            return;
        }
        const order = window.localStorage.getItem("order");
        const data = JSON.parse(order || "{}");
        data.address = JSON.parse(data.address || "{}");
        data.products = JSON.parse(data.products || "{}");
        // send order_id to your backend for processing
        axios.post("/api/create_order", data)
            .then(res => res.data).then(data => {
                set_isLoading(false);
                set_success(true);
                window.localStorage.removeItem("order");
                window.localStorage.removeItem("shopCard");
                dispatch(resetShopCards());
                // clear order from local storage after processing
            }).catch(error => {
                set_isLoading(false);
            });

    }

    useEffect(() => {
        handleClick();
    }, [])



    return (
        <div className="w-full flex-col min-h-full mt-52 flex justify-center items-center">

            <h1 className="font-bold text-3xl">Keep your tabs open to receive your invoice!</h1>
            <Button disabled={isLoading || success} onClick={handleClick} color={success ? "green" : "red"} loading={isLoading} className="mt-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                {!isLoading && !success ? "try again!" : success ? "Completed!" : ""}
            </Button>
        </div>
    )
}
