import type { MetadataRoute } from "next";

import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/services", "/work", "/work/gns-commercial", "/contact"].map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
