import axiosClient from "@/_utils/axiosClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();
  const respons = await axiosClient.post("/valid_customer", { email:email });
  return NextResponse.json(respons.data);
}
