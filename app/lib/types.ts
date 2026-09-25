export interface BlogPost {
  title: string;
  slug: string;
  description: string;
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
}
