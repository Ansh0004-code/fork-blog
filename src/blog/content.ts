export interface BlogContent {
  overview: string;
  points: string[];
  quote: string;
}

export interface BlogPost {
  id: number;
  tag: string;
  time: string;
  title: string;
  description: string;
  category: string;
  image?: string;
  readTime: string;
  date: string;
  content: BlogContent;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    tag: "REGULATIONS",
    time: "1 week ago",
    title: "Understanding Tax Reforms",
    description:
      "A comprehensive breakdown of the new tax laws introduced this fiscal year and their impact.",
    category: "Taxation",
    image: "/blog-banner.jpg",
    readTime: "6 Mins",
    date: "Oct 18, 2023",
    content: {
      overview:
        "This article explains the recent tax reforms and how they impact individuals and businesses across sectors.",
      points: [
        "New income tax slabs explained",
        "Corporate tax compliance changes",
        "Impact on salaried professionals",
      ],
      quote:
        "Tax reforms are not just about revenue, but about economic direction.",
    },
  },
  {
    id: 2,
    tag: "FINANCE",
    time: "3 days ago",
    title: "Budget 2025 Highlights",
    description:
      "Key announcements and changes from the latest budget that affect individuals and businesses.",
    category: "Finance",
    image: "/blog-banner.jpg",
    readTime: "5 Mins",
    date: "Oct 24, 2023",
    content: {
      overview:
        "Budget 2025 focuses on growth, infrastructure, and digital transformation.",
      points: [
        "Increased infrastructure spending",
        "Boost for MSMEs and startups",
        "Digital economy initiatives",
      ],
      quote:
        "A forward-looking budget lays the foundation for sustainable growth.",
    },
  },
  {
    id: 3,
    tag: "FINTECH",
    time: "2 days ago",
    title: "Fintech & AI Trends",
    description:
      "How AI is transforming accounting, auditing, and financial services.",
    category: "Fintech & AI",
    image: "/blog-banner.jpg",
    readTime: "4 Mins",
    date: "Oct 26, 2023",
    content: {
      overview:
        "AI is redefining how financial data is processed, analyzed, and audited.",
      points: [
        "Automation in accounting",
        "AI-driven audits",
        "Predictive financial analytics",
      ],
      quote:
        "The future accountant will be a technologist and strategist.",
    },
  },
  {
    id: 4,
    tag: "ECONOMY",
    time: "1 day ago",
    title: "India Economic Outlook 2025",
    description:
      "Growth outlook, risks, and opportunities for the Indian economy.",
    category: "Economy",
    image: "/blog-banner.jpg",
    readTime: "7 Mins",
    date: "Oct 27, 2023",
    content: {
      overview:
        "India’s economic trajectory shows strong growth potential with global challenges.",
      points: [
        "GDP growth projections",
        "Inflation and interest rates",
        "Global trade impact",
      ],
      quote:
        "Economic resilience comes from informed policy and innovation.",
    },
  },
];
