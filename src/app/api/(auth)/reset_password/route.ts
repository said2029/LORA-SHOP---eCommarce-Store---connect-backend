import axiosClient from "@/_utils/axiosClient";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const axiosRespons = await axiosClient.post("/reset_password", body);
  return NextResponse.json(axiosRespons.data);
}
