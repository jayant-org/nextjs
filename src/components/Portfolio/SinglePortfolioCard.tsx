import Image from "next/image";
import Link from "next/link";
import { Portfolio } from "@/types/portfolio";

export default function SinglePortfolioCard({
  portfolio,
}: {
  portfolio: Portfolio;
}) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-dark">
      <div className="relative h-64 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
        <Image
          src={portfolio.image}
          alt={portfolio.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/50">
          <span className="scale-75 transform text-white opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
            {portfolio.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          {portfolio.category}
        </div>
        <h3 className="mb-2 text-xl font-bold text-dark dark:text-white">
          {portfolio.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-gray-600 dark:text-gray-400">
          {portfolio.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {portfolio.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-block rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {portfolio.technologies.length > 3 && (
            <span className="inline-block rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              +{portfolio.technologies.length - 3}
            </span>
          )}
        </div>

        {portfolio.link && (
          <Link
            href={portfolio.link}
            className="inline-flex items-center text-sm font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View Project →
          </Link>
        )}
      </div>
    </div>
  );
}
