// components/ProductCard.tsx

import Link from "next/link";
import type { Product } from "@/data/products";
import { getProductImage, PLACEHOLDER_IMAGE } from "@/data/products";

// Named export
export function ProductCard({ p }: { p: Product }) {
  const img = getProductImage(p);

  const href = {
    pathname: "/products/[id]",
    query: { id: p.id },
  };

  return (
    <article className="rounded-2xl border overflow-hidden bg-white hover:shadow-soft transition-shadow">
      
      <Link href={href}>
        <div className="aspect-[4/5] bg-brand-light flex items-center justify-center">
          {/* using <img> for fallback safety */}
          <img
            src={img}
            alt={p.name}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = PLACEHOLDER_IMAGE;
            }}
          />
        </div>
      </Link>

      <div className="p-4">
        <h3 className="font-semibold leading-tight">
          <Link href={href} className="hover:underline">
            {p.name}
          </Link>
        </h3>

        {/* ✅ Price optional */}
        {p.price && (
          <p className="text-sm text-gray-500 mt-1">
            £{p.price.toFixed(2)}
          </p>
        )}

        <div className="mt-2 flex flex-wrap gap-2 text-[10px]">
          {p.vegetarian && <span className="badge">Vegetarian</span>}
          {p.readyToEat && <span className="badge">≤ 5 min</span>}
          {p.tags?.slice(0, 2).map((t) => (
            <span key={t} className="badge">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
