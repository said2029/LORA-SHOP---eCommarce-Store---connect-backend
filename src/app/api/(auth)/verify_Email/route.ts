import axiosClient from "@/_utils/axiosClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const respons = await axiosClient.post("/verify_email", body);
  return NextResponse.json(respons.data);
}
