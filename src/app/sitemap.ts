import type { MetadataRoute } from "next";

const baseUrl = "https://www.holyhabits.club";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
