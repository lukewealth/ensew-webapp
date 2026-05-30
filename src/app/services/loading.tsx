import React from "react";
import Skeleton from "@/components/Skeleton";
import LoadingIllustration from "@/components/LoadingIllustration";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 w-full py-24 space-y-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <LoadingIllustration />
          <Skeleton variant="rectangular" width={200} height={20} className="mb-4" />
          <Skeleton variant="rectangular" width="60%" height={60} />
          <Skeleton variant="rectangular" width="40%" height={24} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-card p-8 rounded-2xl border border-white/5 space-y-4">
              <Skeleton variant="circular" width={48} height={48} />
              <Skeleton variant="rectangular" width="70%" height={24} />
              <div className="space-y-2">
                <Skeleton variant="text" />
                <Skeleton variant="text" />
                <Skeleton variant="text" width="80%" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
