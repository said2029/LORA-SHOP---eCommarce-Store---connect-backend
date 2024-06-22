import axiosClient from "@/_utils/axiosClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const value = await axiosClient.post("/CreateOrder", body);
        if (value.data.status === "failed") {
            return NextResponse.json({ message: "order failed" },{ status: 401 });
        }
        return NextResponse.json({ status: 201, message: "Coupon created successfully", data: value?.data });
    } catch (error: any) {
        return NextResponse.json({ message: error?.message }, { status: 500 });
    }
}