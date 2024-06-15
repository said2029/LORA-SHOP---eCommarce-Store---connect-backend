import axiosClient from "@/_utils/axiosClient";
import { NextResponse } from "next/server";

function generateRandomCode() {
  const value = Math.floor(Math.random() * 90000) + 10000;
  return value.toString();
}
export async function POST(req: Request) {
  const body = await req.json();
  const code = generateRandomCode();
  body.code = code;
  const respons = await axiosClient.post("/verify_email", body);
  respons.data.code = code;
  return NextResponse.json(respons.data);
}
