// components/ProductHighlight.jsx
import React from "react";
import ProductCard from "./ProductCard";
import dbConnect from "@/lib/dbConnect";

export default async function ProductHighlight() {
  // Use absolute path for server-side fetch
  // const products = await dbConnect("products").find({}).toArray();
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store", // always fetch fresh
  });
  const json = await res.json();
  const products = json.data; // ← use .data

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
