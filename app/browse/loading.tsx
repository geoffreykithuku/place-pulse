export default function BrowseLoading() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="mb-8 animate-pulse">
        <div className="h-10 bg-neutral-200 rounded w-64 mb-4"></div>
        <div className="h-6 bg-neutral-200 rounded w-96"></div>
      </div>

      {/* Filter skeleton */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-neutral-200 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="h-10 bg-neutral-200 rounded"></div>
          <div className="h-10 bg-neutral-200 rounded"></div>
          <div className="h-10 bg-neutral-200 rounded"></div>
          <div className="h-10 bg-neutral-200 rounded"></div>
        </div>
      </div>

      {/* Property cards skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-neutral-200"></div>
            <div className="p-6 space-y-3">
              <div className="h-6 bg-neutral-200 rounded w-3/4"></div>
              <div className="h-4 bg-neutral-200 rounded w-1/2"></div>
              <div className="h-4 bg-neutral-200 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
