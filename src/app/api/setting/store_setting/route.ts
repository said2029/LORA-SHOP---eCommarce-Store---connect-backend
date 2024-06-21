import { NextResponse } from "next/server";

export async function GET() {
    const fatch = await fetch(process.env.NEXT_PUBLIC_BACKENDURL + "/getStoreSetting");
    const respons = await fatch.json();
    return NextResponse.json(respons);
}