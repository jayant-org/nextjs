import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    paragraph:
      "Learn best practices for architecting React applications that scale. Discover component optimization, state management, and performance tips.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Web Security Best Practices for Developers",
    paragraph:
      "Essential security practices every developer should know: authentication, encryption, and protecting against common vulnerabilities.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Cloud Migration: From On-Premise to Serverless",
    paragraph:
      "A comprehensive guide to migrating legacy applications to cloud platforms. Learn strategies for a smooth transition and maximizing benefits.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
