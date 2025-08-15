import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://miniapps.example.com";
  const routes = ["","/solution","/methodology","/templates","/legal-first","/pricing","/studio","/about","/contact","/privacy","/terms","/analytics"].map(p=> ({
    url: base + p,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: p===""?1:0.7
  }));
  return routes;
}
