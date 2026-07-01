import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, normalizeLocale } from "./lib/i18n";

function getPreferredLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  if (cookieLocale) {
    const locale = normalizeLocale(cookieLocale);

    if (locale) {
      return locale;
    }
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const languages = acceptLanguage
    .split(",")
    .map((entry) => entry.split(";")[0]?.trim())
    .filter(Boolean);

  for (const language of languages) {
    const matchedLocale = normalizeLocale(language);

    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const [, maybeLocale] = pathname.split("/");

  if (isLocale(maybeLocale)) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", maybeLocale);
    return response;
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
