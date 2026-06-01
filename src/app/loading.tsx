import React from "react";
import LoadingIllustration from "@/components/LoadingIllustration";
import Skeleton from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="pt-32 pb-16 flex flex-col items-center justify-center space-y-8 px-6">
        <LoadingIllustration />
        
        <div className="max-w-3xl w-full space-y-6 text-center">
          <Skeleton variant="rectangular" width="40%" height={24} className="mx-auto" />
          <Skeleton variant="rectangular" width="80%" height={60} className="mx-auto" />
          <Skeleton variant="rectangular" width="60%" height={20} className="mx-auto" />
        </div>

        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {[1, 2, 3].map((i) => (
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
