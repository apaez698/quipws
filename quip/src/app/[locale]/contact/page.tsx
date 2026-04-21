"use client";

import { useTranslations } from "next-intl";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import ContactForm from "@/app/components/ContactForm";
import { useGsapReveal } from "@/lib/gsap";

export default function ContactPage() {
  const t = useTranslations("contact");
  const containerRef = useGsapReveal();

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left */}
              <div className="reveal">
                <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-10">
                  {t("description")}
                </p>

                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    <a
                      href={`mailto:${t("email")}`}
                      className="text-text-secondary hover:text-accent transition-colors text-sm"
                    >
                      {t("email")}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="text-text-secondary text-sm">
                      {t("location")}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="text-accent"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a
                      href="https://wa.me/593963247907"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors text-sm"
                    >
                      {t("whatsapp")}
                    </a>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="reveal">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
