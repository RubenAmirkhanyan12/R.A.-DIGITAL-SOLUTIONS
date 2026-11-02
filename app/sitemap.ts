import type { MetadataRoute } from "next";
import { getAllPublishedPosts } from "./lib/blog-posts";
import { SITE_URL } from "./lib/seo";

// Fecha del último commit que tocó cada página; actualizar al cambiarla.
const STATIC_PAGES: Record<string, string> = {
  "/": "2026-11-02",
  "/automatizar": "2026-11-02",
  "/automatizar-restaurantes": "2026-11-02",
  "/automatizar-ecommerce": "2026-11-02",
  "/automatizar-agencias": "2026-11-02",
  "/automatizar-otros": "2026-11-02",
  "/precios": "2026-11-02",
  "/casos": "2026-11-02",
  "/sobre-nosotros": "2026-11-02",
  "/blog": "2026-11-02",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.entries(STATIC_PAGES).map(([path, lastModified]) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
  }));

  const posts = getAllPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.updatedDate ?? post.publishDate,
  }));

  return [...pages, ...posts];
}
