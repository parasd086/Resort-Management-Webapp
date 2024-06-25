/*import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  return NextResponse.redirect(new URL("/about", request.url));
}
*/

//This auth function has many different functionalities.but it also serves right as a middleware.
import { auth } from "@/app/_lib/auth";
export const middleware = auth;

export const config = {
  //here, we specify all the routes for authorization/all the protected routes
  matcher: ["/account"],
};
