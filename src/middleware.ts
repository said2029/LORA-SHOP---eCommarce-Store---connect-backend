import { NextResponse, type NextRequest } from "next/server";


export function middleware(req: NextRequest) {
  const isLog:any = req.cookies.get("access_token") ;
  if (!isLog || isLog?.value == "null" || isLog?.value == "") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/checkout"]
}