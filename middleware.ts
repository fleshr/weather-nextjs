import createMiddleware from "next-intl/middleware";
import { routing } from "@/4_shared/i18n";
import { NextRequest, NextResponse } from "next/server";

const handleI18nRouting = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  if (/^\/(ru|en)?$/.test(request.nextUrl.pathname)) {
    return handleI18nRouting(request);
  }

  return NextResponse.redirect(new URL("/ru", request.url));
}

export const config = { matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"] };
