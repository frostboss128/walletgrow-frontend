import React from "react";

const Timeline2024 = () => {
  return (
    <ol className="relative border-s border-gray-400 dark:border-gray-700 ml-4">
      <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -start-4 dark:ring-gray-900 dark:bg-blue-900">
          <img src="/roadmap/2024.svg" alt="2024" width={"80%"} />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">2024</h3>
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Generating sources of income to ensure stable operation of the company's business model.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Organization of necessary working departments for comfortable work.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Creating a staff to ensure the performance of all departments.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Development of artifical intelligence algorithms.
        </p>
      </li>
      <li className="mb-10 ms-6">
        <span className="absolute mt-2 flex items-center justify-center w-4 h-4 rounded-full bg-white -start-2 dark:ring-gray-900 dark:bg-blue-900 border border-blue-500" />
        <p className="mt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          Development of our own trading robotic system based on artificial
        </p>
      </li>
    </ol>
  );
};

export default Timeline2024;
