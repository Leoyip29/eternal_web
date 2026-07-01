"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Stone catalogue", href: "/stone-catalogue" },
  { label: "Our Work", href: "/our-work" },
  { label: "Booking", href: "/booking" },
];

function LogoMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-[22px] w-[24px]"
      viewBox="0 0 24 22"
      fill="none"
    >
      <path
        d="M2.5 20.5L7.65 3.25l4.72 8.78 3.35-5.4 5.78 13.87H2.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-7 w-7"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m21 21-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-8 w-8"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 6h2l1.4 8.4a2 2 0 0 0 1.98 1.67h5.87a2 2 0 0 0 1.93-1.47L20 8H8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M10 20h.01M17 20h.01"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-[18px] w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.75 19.75 0 0 1-8.63-3.07 19.47 19.47 0 0 1-6-6A19.75 19.75 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.6a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.29-1.29a2 2 0 0 1 2.11-.45c.83.29 1.7.5 2.6.62A2 2 0 0 1 22 16.92Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (!pathname) {
      return href === "/";
    }

    const segments = pathname.split("/").filter(Boolean);
    const pathWithoutLocale =
      segments.length > 0 ? `/${segments.slice(1).join("/")}` : "/";

    if (href === "/") {
      return pathWithoutLocale === "/";
    }

    return pathWithoutLocale === href;
  };

  return (
    <header
      className="w-full text-[#272727]"
      style={{
        background: "#F6EEE3",
        borderBottom: "1px solid #FFFFFF33",
        boxShadow: "2px 2px 10px 0px #00000026",
        opacity: 1,
        backdropFilter: "blur(64px)",
        WebkitBackdropFilter: "blur(64px)",
      }}
    >
      <div className=" max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-3 px-8 py-3 xl:min-h-[72px] xl:flex-nowrap xl:gap-8 xl:py-[10px]">
        <Link
          href="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="flex min-w-0 shrink items-center gap-2 text-[15px] font-medium sm:text-[18px] xl:shrink-0 xl:text-[20px]"
        >
          <div className="shrink-0">
            <LogoMark />
          </div>
          <span className="truncate whitespace-nowrap">Gravestone Memorials</span>
        </Link>

        <nav
          id="mobile-navigation"
          className={`${isMobileMenuOpen ? "flex" : "hidden"} order-4 basis-full flex-col gap-2 rounded-[24px] bg-white/80 p-3 text-[14px] font-medium leading-none shadow-[0_10px_24px_rgba(0,0,0,0.1)] backdrop-blur-md md:order-3 md:flex md:basis-full md:flex-row md:items-center md:gap-x-3 md:gap-y-2 md:overflow-x-auto md:rounded-full md:px-3 md:py-2 md:shadow-[0_4px_14px_rgba(0,0,0,0.08)] lg:px-4 md:text-[16px] lg:justify-center lg:gap-x-6 xl:order-none xl:basis-auto xl:flex-nowrap xl:justify-start xl:gap-[40px] xl:overflow-visible xl:rounded-none xl:bg-transparent xl:px-0 xl:py-0 xl:shadow-none xl:backdrop-blur-0 xl:text-[20px] 2xl:gap-[56px]`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative whitespace-nowrap rounded-full px-3 py-3 text-black transition-opacity hover:opacity-70 md:px-3 md:py-2 xl:px-1"
            >
              {item.label}
              {isActive(item.href) ? (
                <>
                  <span className="absolute inset-0 -z-10 rounded-full bg-black/6 xl:hidden" />
                  <span className="absolute -bottom-[2px] left-0 hidden h-[2px] w-full bg-black xl:block" />
                </>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3 xl:gap-[24px]">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center text-[#282828] transition-opacity hover:opacity-70 sm:h-10 sm:w-10"
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="flex h-9 w-9 items-center justify-center text-[#282828] transition-opacity hover:opacity-70 sm:h-10 sm:w-10"
          >
            <CartIcon />
          </button>
          <Link
            href="tel:+85200000000"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2B2B2B] text-[14px] font-medium text-white transition-opacity hover:opacity-90 lg:h-[44px] lg:w-auto lg:gap-2 lg:px-4 lg:text-[16px]"
          >
            <PhoneIcon />
            <span className="hidden lg:inline">+852 0000 0000</span>
          </Link>
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#282828] shadow-[0_4px_14px_rgba(0,0,0,0.08)] backdrop-blur-md transition-opacity hover:opacity-70 md:hidden"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
