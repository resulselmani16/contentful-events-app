import React from "react";

const SingleEventSkeleton = () => {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 animate-pulse">
      <div className="h-56 bg-gray-800 rounded mb-6" />
      <div className="h-8 bg-gray-700 rounded w-2/3 mb-4" />
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-2" />
      <div className="h-4 bg-gray-800 rounded w-1/3 mb-2" />
      <div className="h-4 bg-gray-800 rounded w-2/3 mb-2" />
      <div className="h-10 bg-gray-700 rounded w-full mt-6" />
    </div>
  );
};

export default SingleEventSkeleton;
