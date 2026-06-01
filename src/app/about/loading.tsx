import React from "react";
import Skeleton from "@/components/Skeleton";
import LoadingIllustration from "@/components/LoadingIllustration";

export default function AboutLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      {/* Header Skeleton */}
      <div className="relative py-32 overflow-hidden border-b border-white/5 bg-navy/20">
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center space-y-6">
          <Skeleton variant="rectangular" width="60%" height={80} className="mx-auto" />
          <Skeleton variant="rectangular" width="40%" height={24} className="mx-auto" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
        {/* Story Section Skeleton */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <Skeleton variant="rectangular" width={100} height={20} />
            <Skeleton variant="rectangular" width="80%" height={48} />
            <div className="space-y-4">
              <Skeleton variant="text" />
              <Skeleton variant="text" />
              <Skeleton variant="text" width="90%" />
            </div>
          </div>
          <Skeleton variant="rectangular" width="100%" height={500} className="rounded-[2.5rem]" />
        </div>

        {/* Experts Section Skeleton */}
        <div className="space-y-12">
          <div className="flex justify-between items-end">
            <div className="space-y-4 w-full max-w-xl">
              <Skeleton variant="rectangular" width={100} height={20} />
              <Skeleton variant="rectangular" width="70%" height={40} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton variant="rectangular" width="100%" height={300} className="rounded-3xl" />
                <Skeleton variant="rectangular" width="60%" height={24} />
                <Skeleton variant="rectangular" width="40%" height={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
