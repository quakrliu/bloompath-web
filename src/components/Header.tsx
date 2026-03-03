"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "./LanguageProvider";

export function Header() {
  const { locale, setLocale } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-text font-bold tracking-wide"
        >
          <Image
            src="/logo.png"
            alt="育見未來 BloomPath"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span>育見未來</span>
          <span className="text-text-muted font-semibold text-sm">BloomPath</span>
        </Link>

        <div className="flex items-center gap-1 text-sm">
          <button
            onClick={() => setLocale("zh-TW")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              locale === "zh-TW"
                ? "text-text font-bold bg-primary/10"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            中文
          </button>
          <span className="text-border">|</span>
          <button
            onClick={() => setLocale("en")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              locale === "en"
                ? "text-text font-bold bg-primary/10"
                : "text-text-muted hover:text-text-secondary"
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
