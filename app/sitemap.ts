import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://madgotten.com",
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: "https://madgotten.com/pl",
          en: "https://madgotten.com/en",
        },
      },
      priority: 1,
    },
  ];
}
