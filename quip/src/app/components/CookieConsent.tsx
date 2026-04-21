"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type CookiePreferences = {
  essential: true;
  analytics: boolean;
  functional: boolean;
};

const COOKIE_CONSENT_KEY = "quip_cookie_consent";
const COOKIE_PREFS_KEY = "quip_cookie_prefs";

function getStoredConsent(): boolean | null {
  if (typeof window === "undefined") return null;
  const val = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (val === null) return null;
  return val === "true";
}

function getStoredPrefs(): CookiePreferences {
  if (typeof window === "undefined")
    return { essential: true, analytics: false, functional: false };
  try {
    const val = localStorage.getItem(COOKIE_PREFS_KEY);
    if (val) return JSON.parse(val);
  } catch {
    /* ignore */
  }
  return { essential: true, analytics: false, functional: false };
}

export default function CookieConsent() {
  const { locale } = useParams();
  const isEs = locale === "es";
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    functional: false,
  });

  useEffect(() => {
    const consent = getStoredConsent();
    if (consent === null) {
      // No consent decision yet — show banner
      setVisible(true);
    } else {
      setPrefs(getStoredPrefs());
    }
  }, []);

  function saveConsent(preferences: CookiePreferences) {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFS_KEY, JSON.stringify(preferences));
    setPrefs(preferences);
    setVisible(false);
  }

  function acceptAll() {
    saveConsent({ essential: true, analytics: true, functional: true });
  }

  function rejectNonEssential() {
    saveConsent({ essential: true, analytics: false, functional: false });
  }

  function saveCustom() {
    saveConsent(prefs);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9998] p-4 md:p-6">
      <div className="max-w-[640px] mx-auto bg-bg-card border border-border rounded-[20px] p-6 md:p-8 shadow-2xl shadow-black/40 backdrop-blur-xl">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-accent mt-0.5 shrink-0"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M9 9h.01M15 9h.01M8 14s1.5 2 4 2 4-2 4-2" />
          </svg>
          <div>
            <h3 className="font-[var(--font-sora)] font-semibold text-base text-text-primary mb-1">
              {isEs ? "Uso de Cookies" : "Cookie Usage"}
            </h3>
            <p className="text-text-secondary text-xs leading-relaxed">
              {isEs
                ? "Utilizamos cookies esenciales para el funcionamiento del sitio y cookies opcionales para análisis y funcionalidad. De conformidad con la Ley Orgánica de Protección de Datos Personales (LOPDP) del Ecuador, las cookies no esenciales requieren su consentimiento previo."
                : "We use essential cookies for site operation and optional cookies for analytics and functionality. In accordance with Ecuador\u2019s Ley Org\u00e1nica de Protecci\u00f3n de Datos Personales (LOPDP), non-essential cookies require your prior consent."}
            </p>
            <Link
              href={`/${locale}/privacy#cookies`}
              className="text-accent text-xs hover:text-accent-dim transition-colors inline-block mt-1"
            >
              {isEs ? "Ver Pol\u00edtica de Privacidad" : "View Privacy Policy"}
            </Link>
          </div>
        </div>

        {/* Expandable details */}
        {showDetails && (
          <div className="border-t border-border pt-4 mt-4 space-y-3">
            {/* Essential */}
            <label className="flex items-center justify-between">
              <div>
                <span className="text-text-primary text-xs font-semibold block">
                  {isEs ? "Cookies Esenciales" : "Essential Cookies"}
                </span>
                <span className="text-text-muted text-[11px]">
                  {isEs
                    ? "Sesión, idioma, seguridad. Siempre activas."
                    : "Session, language, security. Always active."}
                </span>
              </div>
              <div className="w-10 h-5 bg-accent/30 rounded-full flex items-center justify-end px-0.5 cursor-not-allowed">
                <span className="w-4 h-4 bg-accent rounded-full" />
              </div>
            </label>

            {/* Analytics */}
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="text-text-primary text-xs font-semibold block">
                  {isEs ? "Cookies de Análisis" : "Analytics Cookies"}
                </span>
                <span className="text-text-muted text-[11px]">
                  {isEs
                    ? "Datos anónimos de uso y navegación."
                    : "Anonymous usage and browsing data."}
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setPrefs({ ...prefs, analytics: !prefs.analytics })
                }
                className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                  prefs.analytics
                    ? "bg-accent/30 justify-end"
                    : "bg-border justify-start"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full transition-colors ${
                    prefs.analytics ? "bg-accent" : "bg-text-muted"
                  }`}
                />
              </button>
            </label>

            {/* Functional */}
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="text-text-primary text-xs font-semibold block">
                  {isEs ? "Cookies Funcionales" : "Functional Cookies"}
                </span>
                <span className="text-text-muted text-[11px]">
                  {isEs
                    ? "Preferencias y datos de formulario."
                    : "Preferences and form data."}
                </span>
              </div>
              <button
                type="button"
                onClick={() =>
                  setPrefs({ ...prefs, functional: !prefs.functional })
                }
                className={`w-10 h-5 rounded-full flex items-center px-0.5 transition-colors ${
                  prefs.functional
                    ? "bg-accent/30 justify-end"
                    : "bg-border justify-start"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full transition-colors ${
                    prefs.functional ? "bg-accent" : "bg-text-muted"
                  }`}
                />
              </button>
            </label>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-2 mt-5">
          <button
            onClick={acceptAll}
            className="bg-accent text-bg-primary text-xs font-semibold px-5 py-2.5 rounded-[10px] hover:bg-accent-dim transition-colors flex-1"
          >
            {isEs ? "Aceptar Todas" : "Accept All"}
          </button>
          <button
            onClick={rejectNonEssential}
            className="border border-border text-text-secondary text-xs font-medium px-5 py-2.5 rounded-[10px] hover:border-border-hover hover:text-text-primary transition-colors flex-1"
          >
            {isEs ? "Solo Esenciales" : "Essential Only"}
          </button>
          {showDetails ? (
            <button
              onClick={saveCustom}
              className="border border-accent/30 text-accent text-xs font-medium px-5 py-2.5 rounded-[10px] hover:bg-accent-glow transition-colors flex-1"
            >
              {isEs ? "Guardar Preferencias" : "Save Preferences"}
            </button>
          ) : (
            <button
              onClick={() => setShowDetails(true)}
              className="border border-border text-text-muted text-xs font-medium px-5 py-2.5 rounded-[10px] hover:border-border-hover hover:text-text-secondary transition-colors flex-1"
            >
              {isEs ? "Personalizar" : "Customize"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
