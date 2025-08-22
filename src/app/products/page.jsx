// components/ProductHighlight.jsx
import React from "react";
import ProductCard from "../components/ProductCard";


export default async function Products() {
  // Use absolute path for server-side fetch
  const res = await fetch("http://localhost:3000/api/products");
  const json = await res.json();
  const products = json.data; // ← use .data

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          All Products Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
