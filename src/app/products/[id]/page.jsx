"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!id) return;

    axios.get(`/api/products/${id}`).then((res) => setProduct(res.data));
  }, [id]);

  if (!product) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{product.name}</h1>

      {product.image && (
        <div className="relative w-full h-[200px] md:h-[400px] mb-6">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            placeholder="blur"
            blurDataURL="/placeholder.png"
            className="object-cover rounded-md"
          />
        </div>
      )}

      <div className="space-y-3 text-lg">
        <p>
          <span className="font-semibold">Name:</span> {product.name}
        </p>
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {product.description}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${product.price}
        </p>
        {product.category && (
          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
        )}
        {product.brand && (
          <p>
            <span className="font-semibold">Brand:</span> {product.brand}
          </p>
        )}
        {product.stock && (
          <p>
            <span className="font-semibold">In Stock:</span> {product.stock}
          </p>
        )}
      </div>
    </div>
  );
}
