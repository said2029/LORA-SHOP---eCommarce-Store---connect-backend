import { NextResponse } from "next/server";

export async function GET() {
    const fatch = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/setting/A_P");
    const respons = await fatch.json();
    return NextResponse.json(respons);
}