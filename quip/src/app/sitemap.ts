import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quipmakeitwork.com";
  const pages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    entries.push({
      url: `${baseUrl}/es${page.path}`,
      lastModified: new Date("2026-04-21"),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          es: `${baseUrl}/es${page.path}`,
          en: `${baseUrl}/en${page.path}`,
        },
      },
    });
  }

  return entries;
}
