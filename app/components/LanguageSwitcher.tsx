"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isLocale, locales, localeNames, type Locale } from "../../lib/i18n";

const LOCALE_SHORT_LABELS: Record<Locale, string> = {
  en: "EN",
  zhans: "简",
  zhant: "繁",
};

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none">
      <path
        d="m5 12 5 5 9-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function getActiveLocale(pathname: string | null): Locale {
  const segment = pathname?.split("/").filter(Boolean)[0];
  return segment && isLocale(segment) ? segment : "en";
}

function buildLocalizedPath(pathname: string | null, nextLocale: Locale) {
  const segments = pathname?.split("/").filter(Boolean) ?? [];

  if (segments.length > 0 && isLocale(segments[0])) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }

  return `/${segments.join("/")}`;
}

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeLocale = getActiveLocale(pathname);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleSelect = (nextLocale: Locale) => {
    setIsOpen(false);

    if (nextLocale === activeLocale) {
      return;
    }

    router.push(buildLocalizedPath(pathname, nextLocale));
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="flex h-9 items-center gap-1 rounded-full border border-black/10 bg-white/70 px-3 text-[13px] font-medium text-[#282828] shadow-[0_4px_14px_rgba(0,0,0,0.08)] backdrop-blur-md transition-opacity hover:opacity-70 sm:h-10 sm:px-3.5 sm:text-[14px]"
      >
        <span>{LOCALE_SHORT_LABELS[activeLocale]}</span>
        <ChevronDownIcon
          className={`h-3.5 w-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen ? (
        <div
          role="listbox"
          className="absolute right-0 z-30 mt-2 w-44 rounded-[20px] border border-black/10 bg-white/95 p-1.5 text-[14px] font-medium shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-md"
        >
          {locales.map((locale) => {
            const isSelected = locale === activeLocale;

            return (
              <button
                key={locale}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(locale)}
                className={`flex w-full items-center justify-between gap-2 rounded-full px-3.5 py-2 text-left transition-colors hover:bg-black/6 ${
                  isSelected ? "text-black" : "text-[#4a4a4a]"
                }`}
              >
                {localeNames[locale]}
                {isSelected ? <CheckIcon /> : null}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}