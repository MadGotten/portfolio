import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://madgotten.me",
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: "https://madgotten.me/pl",
          en: "https://madgotten.me/en",
        },
      },
      priority: 1,
    },
  ];
}
