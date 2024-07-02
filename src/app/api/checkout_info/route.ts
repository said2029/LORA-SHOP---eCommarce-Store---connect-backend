import { NextResponse } from "next/server";

export async function GET() {
  const fatch = await fetch(process.env.BACKEND_URL + "/checkout");
  const respons = await fatch.json();
  return NextResponse.json(respons);
}
