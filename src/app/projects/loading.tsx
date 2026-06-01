import React from "react";
import Skeleton from "@/components/Skeleton";
import LoadingIllustration from "@/components/LoadingIllustration";

export default function ProjectsLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      {/* Hero Skeleton */}
      <div className="relative py-32 bg-navy/20 border-b border-white/10 overflow-hidden">
        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center space-y-8">
          <Skeleton variant="rectangular" width="60%" height={100} className="mx-auto" />
          <Skeleton variant="rectangular" width={300} height={40} className="mx-auto rounded-full" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden border border-white/5 space-y-6 pb-8">
              <Skeleton variant="rectangular" width="100%" height={240} />
              <div className="px-8 space-y-6">
                <Skeleton variant="rectangular" width="80%" height={28} />
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Skeleton variant="rectangular" width={80} height={12} />
                    <Skeleton variant="text" />
                    <Skeleton variant="text" width="60%" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton variant="rectangular" width={80} height={12} />
                    <Skeleton variant="rectangular" width="40%" height={20} />
                  </div>
                </div>
                <Skeleton variant="rectangular" width="50%" height={20} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
