// Shared placeholder data for the blog wireframe (categories + posts).
export const blogCategories = [
  "All",
  "Business Model",
  "Leadership",
  "Sales",
  "Culture",
  "AI & Technology",
  "Team Management",
]

export type BlogPost = {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Resistant Business Model in Uncertain Times",
    excerpt:
      "Learn the key principles of creating a business that can weather any storm and come out stronger on the other side.",
    category: "Business Model",
    date: "Jun 1, 2026",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "The Power of Clear Vision: Why Direction Matters More Than Speed",
    excerpt: "Discover how clarity of vision can transform your organization and align every team around what matters.",
    category: "Leadership",
    date: "May 28, 2026",
    readTime: "6 min read",
  },
  {
    id: 3,
    title: "Effective Sales Strategies for B2B Consulting",
    excerpt: "A deep dive into what actually works when selling consulting services to discerning buyers.",
    category: "Sales",
    date: "May 25, 2026",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Creating Deliberate Organizational Culture",
    excerpt: "Culture happens whether you plan it or not. Here's how to be intentional about building it.",
    category: "Culture",
    date: "May 20, 2026",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "AI in Business Strategy: Our Manifesto",
    excerpt: "Our stance on integrating AI responsibly into business transformation without losing the human edge.",
    category: "AI & Technology",
    date: "May 15, 2026",
    readTime: "12 min read",
  },
  {
    id: 6,
    title: "Building Accountability Without Micromanagement",
    excerpt: "How to create a culture of ownership and results that doesn't rely on looking over shoulders.",
    category: "Team Management",
    date: "May 10, 2026",
    readTime: "9 min read",
  },
]
