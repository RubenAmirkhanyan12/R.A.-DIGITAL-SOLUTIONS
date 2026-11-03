export interface BlogPost {
  title: string;
  seoTitle?: string; // <title>; si falta, se usa title (que es el H1)
  slug: string;
  description: string;
  answer?: string; // «Respuesta corta» bajo el H1
  content: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  publishDate: string; // ISO "YYYY-MM-DD"
  updatedDate?: string; // ISO "YYYY-MM-DD" — si existe, se usa como dateModified en schema
  readTime: number;
  keywords: string[];
  internalLinks: string[];
  category: string;
  featured?: boolean;
  footerFeatured?: boolean;
  continueReading?: { href: string; label: string }[];
}
