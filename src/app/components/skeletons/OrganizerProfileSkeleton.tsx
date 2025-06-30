import React from "react";

export default function OrganizerProfileSkeleton() {
  return (
    <div className="flex items-start gap-8 p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
      {/* Profile Image Skeleton */}
      <div className="flex-shrink-0">
        <div className="w-32 h-32 bg-gray-200 rounded-full animate-pulse" />
      </div>
      {/* Profile Details Skeleton */}
      <div className="flex-1">
        <div className="h-8 w-48 bg-gray-200 rounded mb-4 animate-pulse" />
        <div className="h-5 w-64 bg-gray-100 rounded mb-6 animate-pulse" />
        <div className="space-y-3">
          <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-100 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
