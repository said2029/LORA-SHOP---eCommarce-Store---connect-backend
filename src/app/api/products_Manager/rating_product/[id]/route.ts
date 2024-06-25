import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req:Request,context: any) {
    const { params } = context;
    const id = params.id;
    const fatch = await fetch(process.env.BACKENDURL + `/product/rating/${id}`);
    const respons = await fatch.json();
    return NextResponse.json(respons);
}