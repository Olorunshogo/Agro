
// app/products/[slug]/ProductSkeleton.tsx
export default function ProductSkeleton() {
  return (
    <div className="animate-pulse px-(--section-px) max-w-7xl mx-auto py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        
        {/* Left image skeleton */}
        <div className="w-full bg-gray-200 h-96 rounded-xl" />

        {/* Right panel */}
        <div className="flex flex-col gap-6">
          <div className="w-1/2 h-10 bg-gray-200 rounded" />
          <div className="w-1/3 h-8 bg-gray-200 rounded" />
          <div className="w-3/4 h-6 bg-gray-200 rounded" />
          <div className="w-2/4 h-6 bg-gray-200 rounded" />
          <div className="w-1/3 h-6 bg-gray-200 rounded" />
        </div>
      </div>

      {/* Related products */}
      <div className="grid grid-cols-2 gap-6 mt-12 lg:grid-cols-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="flex gap-3">
            <div className="w-20 h-16 bg-gray-200 rounded" />
            <div className="flex flex-col gap-2">
              <div className="w-24 h-4 bg-gray-200 rounded" />
              <div className="w-16 h-4 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

