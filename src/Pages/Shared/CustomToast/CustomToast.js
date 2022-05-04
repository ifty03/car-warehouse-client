import React from "react";

const CustomToast = ({ children }) => {
  return (
    <div class="shadow-lg rounded-2xl p-4  bg-gray-800 w-64 m-auto">
      <div class="w-full h-full text-center">
        <div class="flex h-full flex-col justify-between">
          <svg
            class="h-12 w-12 mt-4 m-auto text-green-500"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <p class="text-gray-600 dark:text-gray-100 text-md py-2 px-6">
            Item
            <span class="text-gray-800 dark:text-white font-bold">
              {children == "Thanks for your feedback" ? "" : { children }}
            </span>
            {children == "Thanks for your feedback"
              ? "Thanks for your feedback"
              : "has been deleted form database."}
          </p>
          <div class="flex items-center justify-between gap-4 w-full mt-8"></div>
        </div>
      </div>
    </div>
  );
};

export default CustomToast;
