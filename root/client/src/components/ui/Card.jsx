export default function Card({
  image_url,
  product_name,
  product_price,
  product_rating,
}) {
  const maxStars = 5;
  const fullStars = Math.floor(product_rating);
  const hasHalfStar = product_rating % 1 >= 0.5;

  return (
    <div className="inline-block font-sans">
      <div className="relative w-64 bg-white rounded-2xl border border-red-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:scale-[1.02] transition-all duration-200 cursor-pointer overflow-hidden group">
        {/* <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md shadow-red-200">
          Featured
        </span> */}

        <div className="w-full h-44 bg-red-50 flex items-center justify-center overflow-hidden">
          {image_url ? (
            <img
              src={image_url}
              alt={product_name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <rect width="64" height="64" rx="12" fill="#fdecea" />
              <path
                d="M20 44V22a2 2 0 012-2h14l8 8v16a2 2 0 01-2 2H22a2 2 0 01-2-2z"
                fill="#e74c3c"
                opacity="0.2"
              />
              <path
                d="M36 20v8h8"
                stroke="#e74c3c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 44V22a2 2 0 012-2h14l8 8v16a2 2 0 01-2 2H22a2 2 0 01-2-2z"
                stroke="#e74c3c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26 34h12M26 38h8"
                stroke="#e74c3c"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </div>

        <div className="px-4 pt-4 pb-5">
          <p className="text-[15px] font-extrabold text-gray-900 mb-2.5 truncate tracking-tight">
            {product_name || "Product Name"}
          </p>

          <div className="flex items-center gap-0.5 mb-4">
            {Array.from({ length: maxStars }, (_, i) => {
              if (i < fullStars)
                return (
                  <span key={i} className="text-red-500 text-lg leading-none">
                    ★
                  </span>
                );
              if (i === fullStars && hasHalfStar)
                return (
                  <span
                    key={i}
                    className="text-red-400 text-lg leading-none opacity-60"
                  >
                    ★
                  </span>
                );
              return (
                <span key={i} className="text-gray-200 text-lg leading-none">
                  ★
                </span>
              );
            })}
            <span className="ml-1.5 text-xs font-bold text-gray-400">
              ({product_rating?.toFixed(1) ?? "0.0"})
            </span>
          </div>

          <div className="flex items-center justify-between border-t border-red-50 pt-3">
            <div className="text-xl font-extrabold text-red-500 tracking-tight">
              <span className="text-sm font-semibold text-red-700 mr-0.5">
                ₹
              </span>
              {product_price?.toLocaleString("en-IN") ?? "0"}
            </div>
            <button className="bg-red-500 hover:bg-red-700 text-white text-[11px] font-extrabold uppercase tracking-wide px-4 py-1.5 rounded-lg transition-all duration-150 hover:scale-105 active:scale-95">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
