import { getTranslations } from "next-intl/server";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Marquee from "@/app/components/Marquee";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  const altLocale = locale === "es" ? "en" : "es";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: { [altLocale]: `/${altLocale}` },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      locale: locale === "es" ? "es_EC" : "en_US",
      type: "website",
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Quip Make It Work",
        url: "https://quipmakeitwork.com",
        logo: "https://quipmakeitwork.com/favicon.svg",
        email: "hello@quip.ec",
        telephone: "+593963247907",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Quito",
          addressCountry: "EC",
        },
        sameAs: ["https://wa.me/593963247907"],
        description:
          "AI agency specializing in chatbot development, business automation, and AI integration.",
      },
      {
        "@type": "WebSite",
        name: "Quip — Make It Work",
        url: "https://quipmakeitwork.com",
        inLanguage: ["es", "en"],
      },
      {
        "@type": "ProfessionalService",
        name: "Quip Make It Work",
        url: "https://quipmakeitwork.com",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Quito",
          addressCountry: "EC",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -0.1807,
          longitude: -78.4678,
        },
        areaServed: ["EC", "LATAM"],
        serviceType: [
          "AI Chatbot Development",
          "Business Process Automation",
          "AI Integration",
          "Web Application Development",
          "AI Consulting",
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <Marquee />
      </main>
      <Footer />
    </>
  );
}
