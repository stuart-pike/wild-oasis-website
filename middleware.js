/*import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  // No matter where the user is they will be redirected to the 'about' page
  return NextResponse.redirect(new URL("/about", request.url));
}*/

import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
