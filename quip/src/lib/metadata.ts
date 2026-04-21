import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";

export async function generatePageMetadata(
  locale: string,
  page: string,
  path: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `metadata.${page}` });
  const altLocale = locale === "es" ? "en" : "es";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { [altLocale]: `/${altLocale}${path}` },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `/${locale}${path}`,
      locale: locale === "es" ? "es_EC" : "en_US",
    },
    twitter: {
      title: t("title"),
      description: t("description"),
    },
  };
}
