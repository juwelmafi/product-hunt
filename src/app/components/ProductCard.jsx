"use client"
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-500">{product.category}</p>
        <p className="mt-2 text-green-600 font-bold">{product.price}</p>

        {/* Description (short) */}
        <p className="mt-2 text-gray-600 text-sm flex-1">
          {product.description.length > 60
            ? product.description.substring(0, 60) + "..."
            : product.description}
        </p>

        {/* Detail Button */}
        <button
          className="mt-4 w-full py-2 text-white bg-emerald-500 rounded-md hover:bg-emerald-700 transition-colors font-medium"
          onClick={() => alert(`View details for ${product.name}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}
