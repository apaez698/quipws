"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Footer() {
  const t = useTranslations();
  const params = useParams();
  const locale = params.locale as string;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              <span className="font-[var(--font-sora)] font-extrabold text-xl tracking-tight">
                quip
              </span>
            </div>
            <p className="text-text-secondary text-sm max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[3px] uppercase text-text-muted mb-1">
              {locale === "es" ? "PÁGINAS" : "PAGES"}
            </span>
            <Link
              href={`/${locale}/services`}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {t("nav.services")}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {t("nav.about")}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {t("nav.contact")}
            </Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs tracking-[3px] uppercase text-text-muted mb-1">
              {locale === "es" ? "LEGAL" : "LEGAL"}
            </span>
            <Link
              href={`/${locale}/terms`}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {t("nav.terms")}
            </Link>
            <Link
              href={`/${locale}/privacy`}
              className="text-sm text-text-secondary hover:text-accent transition-colors"
            >
              {t("nav.privacy")}
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            &copy; {year} Quip Make It Work. {t("footer.copyright")}
          </p>
          <p className="text-text-muted text-xs">Quito, Ecuador</p>
        </div>
      </div>
    </footer>
  );
}
