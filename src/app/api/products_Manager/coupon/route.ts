import { NextResponse } from "next/server";


export async function POST(req: Request) {
    const body = await req.json();
    const fatch = await fetch(process.env.BACKEND_URL + "/useCoupon",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    const respons = await fatch.json();
    return NextResponse.json(respons);
}