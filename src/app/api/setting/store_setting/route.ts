import { NextResponse } from "next/server";

export async function GET() {
    try {

        const fatch = await fetch(process.env.BACKENDURL + "/getStoreSetting");
        const respons = await fatch.json();
        return NextResponse.json(respons);
    } catch (error) {
        return NextResponse.json({ msg: "failed!" }, { status: 500 });
    }
}