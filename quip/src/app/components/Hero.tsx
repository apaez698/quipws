"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const t = useTranslations("hero");
  const params = useParams();
  const locale = params.locale as string;
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-badge", { opacity: 0, y: 20, duration: 0.6 })
        .from(".hero-title", { opacity: 0, y: 40, duration: 0.8 }, "-=0.3")
        .from(
          ".hero-description",
          { opacity: 0, y: 20, duration: 0.6 },
          "-=0.4",
        )
        .from(".hero-actions", { opacity: 0, y: 20, duration: 0.6 }, "-=0.3")
        .from(
          ".hero-visual-orb",
          { opacity: 0, scale: 0.8, duration: 1 },
          "-=0.6",
        )
        .from(
          ".terminal-line",
          { opacity: 0, x: -10, duration: 0.4, stagger: 0.15 },
          "-=0.5",
        )
        .from(
          ".hero-stats > div",
          { opacity: 0, y: 20, duration: 0.5, stagger: 0.1 },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const terminalLines = [
    "// quip agent v3.2",
    "const agent = new QuipAI();",
    "agent.deploy({",
    "  type: 'chatbot',",
    "  lang: ['en','es'],",
    "  channels: ['web','wa']",
    "});",
    "",
    "\u2713 Agent online. Listening...",
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          {/* Left */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 bg-accent-glow border border-accent/20 text-accent text-xs font-mono tracking-[3px] uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t("badge")}
            </div>

            <h1 className="hero-title font-[var(--font-sora)] font-extrabold text-[clamp(48px,6vw,76px)] leading-[1.05] tracking-[-3px] text-text-primary mb-6">
              {t("title")}
            </h1>

            <p className="hero-description text-text-secondary text-base md:text-lg leading-relaxed max-w-xl mb-10">
              {t("description")}
            </p>

            <div className="hero-actions flex flex-wrap gap-4 mb-16">
              <Link
                href={`/${locale}/contact`}
                className="bg-accent text-bg-primary font-semibold px-7 py-3.5 rounded-[12px] hover:bg-accent-dim transition-colors text-sm"
              >
                {t("cta_primary")}
              </Link>
              <Link
                href={`/${locale}/services`}
                className="border border-border hover:border-border-hover text-text-primary font-medium px-7 py-3.5 rounded-[12px] transition-colors text-sm"
              >
                {t("cta_secondary")}
              </Link>
            </div>

            <div className="hero-stats grid grid-cols-3 gap-6">
              {[
                { value: t("stat1_value"), label: t("stat1_label") },
                { value: t("stat2_value"), label: t("stat2_label") },
                { value: t("stat3_value"), label: t("stat3_label") },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="font-[var(--font-sora)] font-bold text-2xl text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Orb + Terminal */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="hero-visual-orb orb-float relative">
              {/* Orb */}
              <div
                className="w-[380px] h-[380px] rounded-full relative"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(0, 229, 160, 0.3), rgba(123, 97, 255, 0.2), transparent 70%)",
                  boxShadow:
                    "0 0 120px rgba(0, 229, 160, 0.15), 0 0 60px rgba(123, 97, 255, 0.1)",
                }}
              >
                {/* Terminal inside orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-bg-primary/90 border border-border rounded-[12px] p-4 backdrop-blur-sm">
                  <div className="flex gap-1.5 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="font-mono text-[11px] leading-[1.6]">
                    {terminalLines.map((line, i) => (
                      <div
                        key={i}
                        className={`terminal-line ${line.startsWith("\u2713") ? "text-accent" : "text-text-secondary"}`}
                      >
                        {line || "\u00A0"}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
