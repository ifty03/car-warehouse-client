import React from "react";

const Notification = () => {
  return (
    <div className="h-min-screen bg-gray-50">
      <div className="w-5/6 mx-auto py-10">
        {/* <!-- Success --> */}

        <div
          className="flex items-center  justify-between gap-4 p-4 text-green-700 border rounded border-green-900/10 bg-green-50"
          role="alert"
        >
          <div className="flex items-center gap-4">
            <span className="p-2 text-white bg-green-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <p>
              <strong className="text-sm font-medium"> Hooray! </strong>

              <span className="block text-xs opacity-90">
                This post has been published. this is
              </span>
            </p>
          </div>

          <button className="opacity-90" type="button">
            <span className="sr-only"> Close </span>

            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
