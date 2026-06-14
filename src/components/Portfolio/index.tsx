"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import SinglePortfolioCard from "./SinglePortfolioCard";
import portfolioData from "./portfolioData";

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Web Application",
  "Enterprise Software",
  "Data & AI",
  "SaaS",
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Our Portfolio"
          paragraph="Explore our latest projects and see how we deliver excellence in software development across various industries and technologies."
          center
        />

        {/* Category Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-6 py-2 font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredPortfolio.map((portfolio) => (
            <div key={portfolio.id} className="w-full">
              <SinglePortfolioCard portfolio={portfolio} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPortfolio.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
