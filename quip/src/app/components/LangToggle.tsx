"use client";

import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function LangToggle() {
  const params = useParams();
  const pathname = usePathname();
  const router = useRouter();
  const locale = params.locale as string;

  const toggle = () => {
    const newLocale = locale === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggle}
      className="text-xs font-mono tracking-[3px] uppercase text-text-secondary hover:text-accent border border-border hover:border-border-hover px-3 py-1.5 rounded-full transition-colors"
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
