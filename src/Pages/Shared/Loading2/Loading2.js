import React from "react";

const Loading2 = () => {
  return (
    <div className="p-20">
      <div className="flex w-fit mx-auto items-center justify-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
        <div className="w-4 h-4 rounded-full animate-pulse bg-violet-600"></div>
      </div>
    </div>
  );
};

export default Loading2;
