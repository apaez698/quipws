"use client";

import { useTranslations } from "next-intl";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import ValueCard from "@/app/components/ValueCard";
import AgentFleet from "@/app/components/AgentFleet";
import { useGsapReveal } from "@/lib/gsap";

export default function AboutPage() {
  const t = useTranslations("about");
  const containerRef = useGsapReveal();

  const values = t.raw("values") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <>
      <Nav />
      <main ref={containerRef}>
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="max-w-[1200px] mx-auto px-6 md:px-10">
            <div className="reveal mb-16">
              <span className="font-mono text-xs tracking-[3px] uppercase text-accent mb-4 block">
                {t("label")}
              </span>
              <h2 className="font-[var(--font-sora)] font-bold text-[clamp(36px,5vw,56px)] leading-[1.1] tracking-[-1.5px] text-text-primary">
                {t("title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
              {/* Left - Prose */}
              <div className="reveal">
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
                  {t("prose1")}
                </p>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                  {t("prose2")}
                </p>
              </div>

              {/* Right - Value Cards */}
              <div className="flex flex-col gap-5">
                {values.map((value, i) => (
                  <ValueCard
                    key={i}
                    title={value.title}
                    description={value.description}
                  />
                ))}
              </div>
            </div>

            <AgentFleet />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
