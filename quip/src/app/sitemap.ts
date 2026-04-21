import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quipmakeitwork.com";
  const locales = ["es", "en"];
  const pages = ["", "/services", "/about", "/contact", "/terms", "/privacy"];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : page === "/services" ? 0.9 : 0.7,
      });
    }
  }

  return entries;
}
