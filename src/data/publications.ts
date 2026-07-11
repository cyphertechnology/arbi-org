// This file previously contained mock data for news and events.
// Standard data is now fetched dynamically from Sanity CMS V3.
// We preserve the types and empty arrays for backwards-compatibility or utility.

export interface Publication {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  category: "News" | "Events";
  featured?: boolean;
  location?: string;
  time?: string;
}

export const newsPosts: Publication[] = [];
export const events: Publication[] = [];
export const categories = ["All", "News", "Events"];