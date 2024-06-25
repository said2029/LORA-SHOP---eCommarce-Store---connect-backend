import { NextResponse } from "next/server";

export async function GET() {
    const fatch = await fetch(process.env.BACKENDURL + "/coupons?published=true");
    const respons = await fatch.json();
    return NextResponse.json(respons);
}