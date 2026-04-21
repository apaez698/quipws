"use client";

import { useTranslations } from "next-intl";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      details: formData.get("details"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const serviceOptions: string[] = JSON.parse(
    JSON.stringify(t.raw("service_options")),
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-mono tracking-[2px] uppercase text-text-muted mb-2"
        >
          {t("name")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-bg-card border border-border rounded-[10px] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-mono tracking-[2px] uppercase text-text-muted mb-2"
        >
          {t("email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-bg-card border border-border rounded-[10px] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-xs font-mono tracking-[2px] uppercase text-text-muted mb-2"
        >
          {t("service")}
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full bg-bg-card border border-border rounded-[10px] px-4 py-3 text-sm text-text-primary focus:border-accent focus:outline-none transition-colors appearance-none"
        >
          <option value="">--</option>
          {serviceOptions.map((opt: string) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="details"
          className="block text-xs font-mono tracking-[2px] uppercase text-text-muted mb-2"
        >
          {t("details")}
        </label>
        <textarea
          id="details"
          name="details"
          rows={5}
          required
          className="w-full bg-bg-card border border-border rounded-[10px] px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent text-bg-primary font-semibold px-7 py-3.5 rounded-[12px] hover:bg-accent-dim transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {status === "sending" ? "..." : t("submit")}
      </button>

      {status === "sent" && (
        <p className="text-accent text-sm">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
