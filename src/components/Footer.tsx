"use client";

import { useTranslation } from "./LanguageProvider";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-8 text-center text-sm text-text-muted">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
        <span>&copy; {new Date().getFullYear()} {t.common.copyright}</span>
        <span className="hidden sm:inline text-border">|</span>
        <a
          href="/privacy"
          className="hover:text-primary-dark transition-colors"
        >
          {t.common.privacyPolicy}
        </a>
        <span className="hidden sm:inline text-border">|</span>
        <a href="/terms" className="hover:text-primary-dark transition-colors">
          {t.common.termsOfService}
        </a>
        <span className="hidden sm:inline text-border">|</span>
        <a
          href="mailto:bloompath@quakr.dev"
          className="hover:text-primary-dark transition-colors"
        >
          {t.common.supportEmail}
        </a>
      </div>
    </footer>
  );
}
