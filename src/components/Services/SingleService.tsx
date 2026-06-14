import { Service } from "@/types/service";

export default function SingleService({ service }: { service: Service }) {
  return (
    <div className="group overflow-hidden rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl dark:bg-dark">
      <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
        {service.icon}
      </div>

      <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
        {service.title}
      </h3>

      <p className="mb-6 text-gray-600 dark:text-gray-400">
        {service.description}
      </p>

      <div className="space-y-3">
        <h4 className="font-semibold text-dark dark:text-white">
          Key Features:
        </h4>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <svg
                className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
