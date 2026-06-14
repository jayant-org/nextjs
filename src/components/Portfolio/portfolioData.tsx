import { Portfolio } from "@/types/portfolio";

const portfolioData: Portfolio[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment gateway integration, and advanced analytics dashboard. Built with Next.js and Node.js for optimal performance.",
    image: "/images/blog/blog-01.jpg",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
  },
  {
    id: 2,
    title: "Financial Dashboard",
    category: "Web Application",
    description:
      "Enterprise-grade financial dashboard providing real-time data visualization, portfolio tracking, and automated reporting. Handles millions of transactions with sub-second response times.",
    image: "/images/blog/blog-02.jpg",
    technologies: ["React", "TypeScript", "D3.js", "PostgreSQL", "AWS"],
    link: "#",
  },
  {
    id: 3,
    title: "Mobile Health App",
    category: "Mobile Development",
    description:
      "Cross-platform health monitoring application with IoT integration, real-time health alerts, and telemedicine features. Available on iOS and Android with 100k+ active users.",
    image: "/images/blog/blog-03.jpg",
    technologies: ["React Native", "Firebase", "IoT", "AWS Lambda"],
    link: "#",
  },
  {
    id: 4,
    title: "AI-Powered Analytics Platform",
    category: "Data & AI",
    description:
      "Advanced analytics platform leveraging machine learning for predictive insights. Processes 10TB+ data daily with predictive models achieving 95% accuracy rate.",
    image: "/images/blog/blog-details-01.jpg",
    technologies: ["Python", "TensorFlow", "React", "Kafka", "BigQuery"],
    link: "#",
  },
  {
    id: 5,
    title: "Real Estate Management System",
    category: "Enterprise Software",
    description:
      "Comprehensive property management system handling leases, maintenance, and tenant communications. Streamlined operations for 500+ properties across multiple locations.",
    image: "/images/blog/blog-details-02.jpg",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    link: "#",
  },
  {
    id: 6,
    title: "Social Media Analytics",
    category: "SaaS",
    description:
      "Social media intelligence platform providing sentiment analysis, influencer tracking, and campaign performance metrics across all major platforms in real-time.",
    image: "/images/blog/post-01.jpg",
    technologies: ["Next.js", "Python", "Redis", "Elasticsearch", "GraphQL"],
    link: "#",
  },
];

export default portfolioData;
