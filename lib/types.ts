export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
  published: boolean;
};

export type BlogPostMetadata = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
};

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toLowerCase();
}
