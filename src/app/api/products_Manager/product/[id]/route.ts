import { NextResponse } from "next/server";

export async function GET(req:Request,context: any) {
    const { params } = context;
    const id = params.id;
    const fatch = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + `/product?id=${id}`);
    const respons = await fatch.json();
    return NextResponse.json(respons);
}