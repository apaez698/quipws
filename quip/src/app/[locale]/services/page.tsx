"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import ServiceCard from "@/app/components/ServiceCard";
import ExpandItem from "@/app/components/ExpandItem";
import { useGsapReveal } from "@/lib/gsap";

export default function ServicesPage() {
  const t = useTranslations("services");
  const containerRef = useGsapReveal();
  const [openExpand, setOpenExpand] = useState<number | null>(null);

  const cards = t.raw("cards") as Array<{
    title: string;
    description: string;
    tags: string[];
  }>;

  const expandItems = [
    { title: t("expand.tech_title"), content: t("expand.tech_content") },
    {
      title: t("expand.timeline_title"),
      content: t("expand.timeline_content"),
    },
    {
      title: t("expand.security_title"),
      content: t("expand.security_content"),
    },
  ];

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cards.map((card, i) => (
                <ServiceCard
                  key={i}
                  index={i}
                  title={card.title}
                  description={card.description}
                  tags={card.tags}
                />
              ))}
            </div>

            {/* Expandable sections */}
            <div className="mt-20 max-w-2xl reveal">
              {expandItems.map((item, i) => (
                <ExpandItem
                  key={i}
                  title={item.title}
                  content={item.content}
                  isOpen={openExpand === i}
                  onToggle={() => setOpenExpand(openExpand === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
