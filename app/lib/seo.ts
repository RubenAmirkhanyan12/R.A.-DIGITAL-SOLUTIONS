import type { Metadata } from "next";
import { SITE } from "./site-config";

export const SITE_URL = SITE.url;
export const CONTACT_HREF = "/#contacto";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
};

export function pageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  authors,
  tags,
}: PageMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const images = ["/opengraph-image"];
  const base = {
    title,
    description,
    url,
    siteName: SITE.name,
    locale: "es_ES",
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph:
      type === "article"
        ? { ...base, images, type, publishedTime, modifiedTime, authors, tags }
        : { ...base, images, type },
    twitter: { card: "summary_large_image", title, description, images },
  };
}
