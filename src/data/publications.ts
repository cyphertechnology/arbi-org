import  School from "@/assets/7.jpg";
import  Peace from "@/assets/9.jpg";
import  Health from "@/assets/18.jpg";
import Workers from "@/assets/11.jpg";
import Grants from "@/assets/21.jpg";
import Gathering from "@/assets/4.jpg";
import Conference from "@/assets/20.jpg";

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

export const newsPosts: Publication[] = [
  {
    id: "news-1",
    title: "ARBI Launches New Mental Health Program in Masisi",
    excerpt: "A comprehensive psychosocial support initiative reaches 500+ community members in conflict-affected areas.",
    content: "Full content here...",
    date: "March 15, 2024",
    image: Health,
    category: "News",  // Changed from "news" to "News"
    featured: true,
  },
  {
    id: "news-2",
    title: "Peace-Building Workshop Brings Together Community Leaders",
    excerpt: "Over 100 local leaders gather in Goma to discuss reconciliation strategies.",
    content: "Full content here...",
    date: "February 28, 2024",
    image: Peace,
    category: "News",  // Changed from "news" to "News"
  },
  {
    id: "news-3",
    title: "ARBI Partners with Local Schools for Youth Resilience Program",
    excerpt: "New initiative focuses on preventing delinquency and substance abuse among youth.",
    content: "Full content here...",
    date: "February 10, 2024",
    image: School,
    category: "News",  // Changed from "news" to "News"
  },
  {
    id: "news-4",
    title: "Community Health Workers Graduate from Training Program",
    excerpt: "45 new community health workers certified to provide essential care in remote areas.",
    content: "Full content here...",
    date: "January 25, 2024",
    image: Health,
    category: "News",
  },
  {
    id: "news-5",
    title: "ARBI Receives Grant for Peace-Building Initiatives",
    excerpt: "New funding will expand reconciliation programs across North Kivu.",
    content: "Full content here...",
    date: "January 10, 2024",
    image: Grants,
    category: "News",
  },
];

export const events: Publication[] = [
  {
    id: "event-1",
    title: "Annual Peace Conference 2024",
    excerpt: "Join us for a three-day conference on peace-building and reconciliation in North Kivu.",
    content: "Full content here...",
    date: "April 20-22, 2024",
    image: Conference,
    category: "Events",  // Changed from "event" to "Events"
    featured: true,
    location: "Goma, DRC",
    time: "9:00 AM - 5:00 PM",
  },
  {
    id: "event-2",
    title: "Mental Health Awareness Webinar",
    excerpt: "Online session on trauma healing and psychosocial support for community workers.",
    content: "Full content here...",
    date: "May 5, 2024",
    image: Health,
    category: "Events",
    location: "Online (Zoom)",
    time: "2:00 PM CAT",
  },
  {
    id: "event-3",
    title: "Youth Leadership Training Camp",
    excerpt: "A 5-day intensive training for young leaders from across North Kivu.",
    content: "Full content here...",
    date: "June 10-14, 2024",
    image: School,
    category: "Events",
    location: "Rutshuru, DRC",
    time: "8:00 AM - 6:00 PM",
  },
  {
    id: "event-4",
    title: "Community Leaders Forum",
    excerpt: "Monthly gathering of community leaders to discuss peace and development strategies.",
    content: "Full content here...",
    date: "April 10, 2024",
    image: Gathering,
    category: "Events",
    location: "Masisi, DRC",
    time: "10:00 AM - 3:00 PM",
  },
  {
    id: "event-5",
    title: "Fundraising Gala for Youth Programs",
    excerpt: "An evening of celebration to support youth resilience initiatives.",
    content: "Full content here...",
    date: "May 20, 2024",
    image: Grants,
    category: "Events",
    location: "Goma, DRC",
    time: "6:00 PM - 10:00 PM",
  },
];

export const categories = ["All", "News", "Events"];