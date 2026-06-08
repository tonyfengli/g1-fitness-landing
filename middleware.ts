import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Extract subdomain
  // e.g., "classes.g1fitnessoc.com" → "classes"
  // e.g., "training.g1fitnessoc.com" → "training"
  // For localhost, check query param ?subdomain=classes for testing
  let subdomain = hostname.split(".")[0];

  // Allow testing locally with ?subdomain=classes or ?subdomain=training
  const testSubdomain = url.searchParams.get("subdomain");
  if (testSubdomain) {
    subdomain = testSubdomain;
  }

  // Only rewrite root path or /free-week to appropriate landing page
  if (url.pathname === "/" || url.pathname === "/free-week") {
    if (subdomain === "classes") {
      url.pathname = "/lp/group";
      return NextResponse.rewrite(url);
    }

    if (subdomain === "training") {
      url.pathname = "/lp/semi-private";
      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/free-week"],
};
