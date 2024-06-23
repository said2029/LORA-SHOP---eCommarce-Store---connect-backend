"use client";

import { resetShopCards } from "@/Redux/feature/ShopCards/ShopCards";
import { getStoreState } from "@/Redux/store";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table_Products } from "./_components/table";
import { Printer } from "lucide-react";
import { cn } from "../../../utils/cn";

export default function page() {
    const router = useRouter();
    const [isLoading, set_isLoading] = useState(true);
    const [success, set_success] = useState(false);
    const [order_respons, set_order_respons] = useState<any>({});

    const dispatch = useDispatch();
    const selector = useSelector(getStoreState);



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
            .then(res => res.data).then(async (data) => {
                set_isLoading(false);
                set_success(true);
                // clear order from local storage after processing
                window.localStorage.removeItem("order");
                window.localStorage.removeItem("shopCard");
                dispatch(resetShopCards());

                set_order_respons(data.data.body[0]);
            }).catch(error => {
                set_isLoading(false);
            });




    }
    function handlePrint() {
        window.print();
    }

    useEffect(() => {
        handleClick();
    }, [])



    return (
        <div className="p-10 text-gray-800">
            {!isLoading && success &&

                <div>
                    <div className="bg-purple-50/55 rounded-lg p-3 md:p-8 print:p-0 print:mt-44">

                        <section className="flex justify-between flex-wrap print:flex">
                            <div className="flex-grow md:flex-grow-0">
                                <h1 className="text-2xl font-bold">INVOICE</h1>
                                <p className="text-sm text-gray-500">Status : <span className="text-yellow-900">{order_respons?.status}</span></p>
                            </div>
                            <div className="flex-grow md:flex-grow-0">
                                <img width={150} src={selector.HomeSetting.settingData.Footer_logo_image} alt="/logoipsum.svg" />
                                <span className="text-[12px] text-gray-500">{selector.HomeSetting.settingData.footer_block_four_address
                                }</span>
                            </div>
                        </section>
                        <hr className="w-full border-1 border-white opacity-55 my-10" />

                        <div className="flex flex-wrap items-center justify-between">
                            <section>
                                <h1 className="text-lg font-bold">DATE</h1>
                                <span className="text-sm text-gray-500">{order_respons?.createdAt}</span>

                            </section>
                            <section>
                                <h1 className="text-lg font-bold">INVOICE NUMBER</h1>
                                <span className="text-sm text-gray-500">#{order_respons?._id.slice(-5)}</span>

                            </section>
                            <section>
                                <h1 className="text-lg font-bold">INVOICE TO</h1>
                                <p className="text-sm text-gray-500">{order_respons?.full_Name}</p>
                                <p className="text-sm text-gray-500">{order_respons?.address?.email} {order_respons?.address?.zipCode}</p>
                                <p className="text-sm text-gray-500">{order_respons?.address?.street}</p>

                            </section>
                        </div>
                    </div>

                    {/* table */}
                    <section className="mt-14">
                        <Table_Products order_respons={order_respons} />
                    </section>

                    <section className="mt-14 flex flex-wrap gap-3 justify-between bg-blue-50 p-8 rounded-lg">
                        <div>
                            <h1 className="text-lg font-bold ">PAYMENT METHOD</h1>
                            <span className="text-sm text-gray-600">{order_respons?.method}</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold ">DISCOUNT</h1>
                            <span className="text-sm text-gray-600">${order_respons?.discount}</span>
                        </div>

                        <div>
                            <h1 className="text-lg font-bold ">SHOPPING COST</h1>
                            <span className="text-sm text-gray-600">${order_respons?.ShoppingCost}</span>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold ">TOTAL AMOUNT</h1>
                            <span className="text-red-400 text-lg font-semibold">${order_respons?.total}</span>
                        </div>

                    </section>

                    <section className="mt-10 print:hidden">
                        <Button className="text-white flex gap-2" onClick={handlePrint} variant="filled" color="amber" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                            Prine Invoice <Printer size={15} startOffset={1} />
                        </Button>
                    </section>
                </div>
            }



            <div className={cn(`w-full flex-col min-h-full mt-52 flex justify-center items-center ${success && "hidden"}`)}>

                <h1 className="font-bold text-3xl">Keep your tabs open to receive your invoice!</h1>
                <Button disabled={isLoading || success} onClick={handleClick} color={success ? "green" : "red"} loading={isLoading} className="mt-6" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
                    {!isLoading && !success ? "try again!" : success ? "Completed!" : ""}
                </Button>
            </div>
        </div>
    )
}
