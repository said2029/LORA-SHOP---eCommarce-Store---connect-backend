import { url } from "inspector";
import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isLog = req.cookies.get("access_token");
  if (!isLog) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config ={
    matcher:["/checkout"]
}