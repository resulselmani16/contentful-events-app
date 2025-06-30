import React from "react";

const EventListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 max-w-6xl mx-auto">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-[#18181b] rounded-lg shadow-lg overflow-hidden max-w-sm w-full border border-gray-700 animate-pulse"
        >
          <div className="h-40 bg-gray-800 w-full" />
          <div className="p-5">
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-800 rounded w-1/2 mb-2" />
            <div className="mb-4 text-gray-400 text-sm">
              <div className="h-4 bg-gray-700 rounded w-1/2 mb-2" />
              <div className="h-4 bg-gray-800 rounded w-2/3" />
            </div>
            <div className="h-10 bg-gray-700 rounded w-full mt-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventListSkeleton;
