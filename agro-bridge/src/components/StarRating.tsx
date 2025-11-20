
"use client";

interface StarRatingProps {
  rating: number; // Supports 0–5, including halves like 3.5
}

export function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const full = i + 1 <= rating;
        const half = !full && i + 0.5 <= rating;

        return (
          <div
            key={i}
            className="transition-transform duration-300 hover:scale-110"
          >
            {/* FULL STAR */}
            {full && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#FACC15"
              >
                <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"/>
              </svg>
            )}

            {/* HALF STAR */}
            {half && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient id={`half-${i}`}>
                    <stop offset="50%" stopColor="#FACC15" />
                    <stop offset="50%" stopColor="#E5E7EB" />
                  </linearGradient>
                </defs>
                <path
                  fill={`url(#half-${i})`}
                  d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"
                />
              </svg>
            )}

            {/* EMPTY STAR */}
            {!full && !half && (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#E5E7EB"
              >
                <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"/>
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}
