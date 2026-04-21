"use client";

import { useTranslations } from "next-intl";

export default function Marquee() {
  const t = useTranslations("marquee");
  const items = t("items");

  // Double the content for seamless loop
  const content = `${items}  /  ${items}  /  `;

  return (
    <div className="relative overflow-hidden border-y border-border bg-bg-secondary py-5">
      <div className="marquee-track flex whitespace-nowrap">
        <span className="font-mono text-sm tracking-[3px] text-text-muted uppercase shrink-0 px-4">
          {content}
        </span>
        <span className="font-mono text-sm tracking-[3px] text-text-muted uppercase shrink-0 px-4">
          {content}
        </span>
      </div>
    </div>
  );
}
