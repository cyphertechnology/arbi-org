export type Post = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  featured?: boolean;
  content?: string;
};

export const blogPosts: Post[] = [
  {
    id: 1,
    title: "Celebrating 500 Children Graduating to Secondary School",
    excerpt:
      "This year marks a milestone as 500 children from our Kids Uplift Program successfully transitioned to secondary school, breaking barriers and opening doors to brighter futures.",
    image: "https://ischool.uw.edu/sites/default/files/inline-images/Z9A_3819_crop950.jpg",
    date: "November 28, 2024",
    category: "Success Story",
    featured: true,
    content:
      "Full story: This year we celebrated 500 children graduating to secondary school. The Kids Uplift Program provided scholarships, mentoring and academic support. Families, volunteers and partners came together to ensure every child continued their education. (Expand with real content later.)",
  },
  {
    id: 2,
    title: "Blood Drive Success: 200 Units Collected in Single Day",
    excerpt:
      "Our largest blood drive to date brought together over 300 community members, resulting in 200 units of blood that will save countless lives in local hospitals.",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&auto=format&fit=crop&q=80",
    date: "November 20, 2024",
    category: "Health Initiative",
    content:
      "Full story: Thanks to volunteers and partner health teams, we collected 200 units in one day. These units were sent to nearby hospitals and are already making an impact.",
  },
  {
    id: 3,
    title: "Volunteer Spotlight: Meet Grace, Our Star Mentor",
    excerpt:
      "Grace Namukasa has been volunteering with arbi for three years, mentoring over 50 children and inspiring them to dream big despite their circumstances.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&auto=format&fit=crop&q=80",
    date: "November 15, 2024",
    category: "Volunteer Story",
    content:
      "Full story: Grace mentors children with weekly sessions focused on confidence and study skills. Her story shows the power of consistent community support.",
  },
  {
    id: 4,
    title: "New Partnership with Ministry of Education Announced",
    excerpt:
      "We're excited to announce a formal partnership with the Ministry of Education to expand our reach to more districts and provide standardized support to underprivileged students.",
    image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800&auto=format&fit=crop&q=80",
    date: "November 10, 2024",
    category: "Announcement",
    content:
      "Full story: The partnership will allow joint programs for school supplies, teacher training, and scaling effective interventions across districts.",
  },
  {
    id: 5,
    title: "Holiday Food Drive: Help Us Feed 1,000 Families",
    excerpt:
      "As the holiday season approaches, join us in our mission to ensure no family goes hungry. Our goal is to provide food packages to 1,000 families by Christmas.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&auto=format&fit=crop&q=80",
    date: "November 5, 2024",
    category: "Campaign",
    content:
      "Full story: We are collecting shelf-stable food and monetary donations to assemble packages for families across our districts.",
  },
  {
    id: 6,
    title: "Mental Health Workshop Series for Youth Launches",
    excerpt:
      "Our new KidsSupport Care Initiative has launched a six-week mental health workshop series designed to help young people build resilience and emotional intelligence.",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop&q=80",
    date: "October 28, 2024",
    category: "Program Update",
    content:
      "Full story: The six-week workshop includes group exercises, mentorship, and family engagement components to support youth wellbeing.",
  },
];

export const categories = [
  "All",
  "Success Story",
  "Health Initiative",
  "Volunteer Story",
  "Announcement",
  "Campaign",
  "Program Update",
  "Events",
];