import React from "react";

const Timeline2023 = () => {
  return (
    <ol className="relative border-s border-gray-400 dark:border-gray-700 ml-4">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -start-4 dark:ring-gray-900 dark:bg-blue-900">
          <img src="/roadmap/2023.svg" alt="2023" width={"80%"} />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">2023</h3>
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Formation of an idea to create a business model for generating stable profits.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Selecting a suitable location for the company's head office.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Registration of the necessary documents for legal work anywhere in the world.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Beginning the formation of the company's core team of employees.{" "}
        </p>
      </li>
    </ol>
  );
};

export default Timeline2023;
