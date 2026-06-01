import React from "react";
import Skeleton from "@/components/Skeleton";

export default function IndustriesLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
        <div className="text-center space-y-4">
          <Skeleton variant="rectangular" width="60%" height={60} className="mx-auto" />
          <Skeleton variant="rectangular" width="40%" height={24} className="mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card p-12 rounded-[2.5rem] border border-white/5 space-y-8">
              <Skeleton variant="circular" width={64} height={64} />
              <div className="space-y-4">
                <Skeleton variant="rectangular" width="70%" height={40} />
                <div className="space-y-2">
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="80%" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((j) => (
                  <Skeleton key={j} variant="rectangular" width="100%" height={40} className="rounded-xl" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
