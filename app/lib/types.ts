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
  readTime: number;
  keywords: string[];
  internalLinks: string[];
  category: string;
  featured?: boolean;
}
