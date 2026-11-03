import type { MetadataRoute } from "next";
import { getAllPublishedPosts } from "./lib/blog-posts";
import { SITE_URL } from "./lib/seo";

// Fecha del último commit que tocó cada página; actualizar al cambiarla.
const STATIC_PAGES: Record<string, string> = {
  "/": "2026-11-03",
  "/automatizar": "2026-11-03",
  "/automatizar-restaurantes": "2026-11-03",
  "/automatizar-ecommerce": "2026-11-03",
  "/automatizar-agencias": "2026-11-03",
  "/automatizar-otros": "2026-11-03",
  "/precios": "2026-11-03",
  "/casos": "2026-11-03",
  "/sobre-nosotros": "2026-11-03",
  "/blog": "2026-11-03",
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
