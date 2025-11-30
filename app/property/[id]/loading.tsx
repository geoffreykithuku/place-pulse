export default function PropertyLoading() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
      <div className="animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="h-4 bg-neutral-200 rounded w-48 mb-6"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Image gallery */}
          <div className="lg:col-span-2 space-y-4">
            <div className="h-96 bg-neutral-200 rounded-lg"></div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-neutral-200 rounded"></div>
              ))}
            </div>
          </div>

          {/* Right column - Details */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 space-y-4">
              <div className="h-8 bg-neutral-200 rounded w-3/4"></div>
              <div className="h-6 bg-neutral-200 rounded w-1/2"></div>
              <div className="h-4 bg-neutral-200 rounded w-full"></div>
              <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
              <div className="h-12 bg-neutral-200 rounded w-full mt-4"></div>
            </div>

            {/* Scout info skeleton */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-neutral-200 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-neutral-200 rounded-full"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
                  <div className="h-3 bg-neutral-200 rounded w-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description skeleton */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border border-neutral-200">
          <div className="h-6 bg-neutral-200 rounded w-32 mb-4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-neutral-200 rounded w-full"></div>
            <div className="h-4 bg-neutral-200 rounded w-full"></div>
            <div className="h-4 bg-neutral-200 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
