"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

export default function AgentFleet() {
  const t = useTranslations("about");
  const { locale } = useParams();

  const agents = Array.from({ length: 8 });

  return (
    <div className="reveal bg-bg-card border border-border rounded-[20px] p-8 md:p-12 mt-16">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex gap-2">
          {agents.map((_, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-accent pulse-dot"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          ))}
        </div>
        <span className="font-mono text-xs tracking-[2px] uppercase text-accent">
          {agents.length}{" "}
          {locale === "es" ? "agentes activos" : "agents active"}
        </span>
      </div>

      <h3 className="font-[var(--font-sora)] font-bold text-2xl tracking-[-1px] text-text-primary mb-4">
        {t("fleet_title")}
      </h3>

      <p className="text-text-secondary text-sm md:text-base leading-relaxed max-w-3xl">
        {t("fleet_description")}
      </p>
    </div>
  );
}
