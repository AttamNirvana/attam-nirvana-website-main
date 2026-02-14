export default function Loading() {
  return (
    <div className="min-h-screen bg-primary-700 pt-24 pb-12">
      <div className="container-main">
        {/* Hero Skeleton */}
        <div className="animate-pulse space-y-8 mb-16">
          <div className="h-8 w-48 bg-primary-600 rounded mx-auto" />
          <div className="h-16 w-3/4 bg-primary-600 rounded mx-auto" />
          <div className="h-6 w-2/3 bg-primary-600 rounded mx-auto" />
        </div>

        {/* Content Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-primary-900 rounded-xl p-6 border border-primary-700">
              <div className="w-12 h-12 bg-primary-600 rounded-lg mb-4" />
              <div className="h-6 bg-primary-600 rounded mb-3 w-3/4" />
              <div className="space-y-2">
                <div className="h-4 bg-primary-600 rounded" />
                <div className="h-4 bg-primary-600 rounded w-5/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
