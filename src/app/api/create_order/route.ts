import axiosClient from "@/_utils/axiosClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const value = await axiosClient.post("/CreateOrder", body);
        if (value.data.status === "failed") {
            return NextResponse.json({ message: "order failed" }, { status: 401 });
        }
        const order = await axiosClient.post("/order", { id: value.data.order._id });
        return NextResponse.json({ message: "Coupon created successfully", data: order.data }, { status: 201 });
    } catch (error: any) {
        return NextResponse.json({ message: error?.message }, { status: 500 });
    }
}