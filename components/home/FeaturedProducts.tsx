// components/home/FeaturedProducts.tsx

import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featured = products.slice(0, 3); // simple for now

  return (
    <section className="container-max py-10">
      <h2 className="text-2xl font-bold text-ink mb-6">
        Featured products
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
