import { NextResponse } from "next/server";


export async function GET() {
    const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/setting/GetFAQs');
    const data = await response.json();
    return NextResponse.json({data})
}