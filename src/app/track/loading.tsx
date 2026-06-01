import React from "react";
import Skeleton from "@/components/Skeleton";
import LoadingIllustration from "@/components/LoadingIllustration";

export default function TrackLoading() {
  return (
    <div className="flex flex-col min-h-screen bg-background pt-20">
      <div className="max-w-4xl mx-auto px-6 py-24 space-y-12">
        <div className="text-center space-y-4">
          <LoadingIllustration />
          <Skeleton variant="rectangular" width="60%" height={60} className="mx-auto" />
          <Skeleton variant="rectangular" width="40%" height={24} className="mx-auto" />
        </div>

        <div className="glass-card p-10 rounded-3xl border border-white/5 space-y-8">
          <div className="space-y-4">
            <Skeleton variant="rectangular" width={150} height={20} />
            <div className="flex gap-4">
              <Skeleton variant="rectangular" width="100%" height={60} className="rounded-xl" />
              <Skeleton variant="rectangular" width={120} height={60} className="rounded-xl" />
            </div>
          </div>

          <div className="space-y-6 pt-8 border-t border-white/5">
             <div className="grid grid-cols-2 gap-8">
                <div className="space-y-4">
                   <Skeleton variant="rectangular" width={100} height={16} />
                   <Skeleton variant="rectangular" width="100%" height={32} />
                </div>
                <div className="space-y-4">
                   <Skeleton variant="rectangular" width={100} height={16} />
                   <Skeleton variant="rectangular" width="100%" height={32} />
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
