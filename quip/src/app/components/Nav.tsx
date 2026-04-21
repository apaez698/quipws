"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import LangToggle from "./LangToggle";

export default function Nav() {
  const t = useTranslations("nav");
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/services`, label: t("services") },
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-border">
      <nav className="max-w-[1200px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
          <span className="font-[var(--font-sora)] font-extrabold text-xl tracking-tight text-text-primary">
            quip
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-[0.3px] transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LangToggle />
          <Link
            href={`/${locale}/contact`}
            className="bg-accent text-bg-primary text-sm font-semibold px-5 py-2.5 rounded-[10px] hover:bg-accent-dim transition-colors"
          >
            {t("contact")}
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-5 h-0.5 bg-text-primary transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-text-primary transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-5 h-0.5 bg-text-primary transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-secondary border-b border-border px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-sm font-medium tracking-[0.3px] transition-colors hover:text-accent ${
                pathname === link.href ? "text-accent" : "text-text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4 pt-2">
            <LangToggle />
            <Link
              href={`/${locale}/contact`}
              onClick={() => setMobileOpen(false)}
              className="bg-accent text-bg-primary text-sm font-semibold px-5 py-2.5 rounded-[10px] hover:bg-accent-dim transition-colors"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
