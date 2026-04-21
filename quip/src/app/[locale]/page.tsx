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
      locale: locale === "es" ? "es_EC" : "en_US",
      type: "website",
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
      </main>
      <Footer />
    </>
  );
}
