"use client";
import { useState } from "react";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
    features: "",
    rating: "",
    stock: "",
    sku: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // convert features from string → array
    const productData = {
      ...formData,
      price: parseFloat(formData.price.replace("$", "")), // ensure price is number
      rating: parseFloat(formData.rating),
      stock: parseInt(formData.stock, 10),
      features: formData.features.split(",").map((f) => f.trim()), // comma separated → array
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      const result = await res.json();
      if (res.ok) {
        toast.success("Product added successfully!");
        setFormData({
          name: "",
          category: "",
          price: "",
          image: "",
          description: "",
          features: "",
          rating: "",
          stock: "",
          sku: "",
        });
      } else {
        toast.error("Failed to add product: " + result.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="flex items-center py-10 justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-2xl shadow">
        <h1 className="text-2xl font-bold text-center mb-6">Add Product</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Smart Watch"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-1 font-medium">Category</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Wearables"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block mb-1 font-medium">Price ($)</label>
            <input
              type="number"
              step="0.01"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="199"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 font-medium">Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="https://..."
            />
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="A sleek smartwatch with fitness tracking..."
            />
          </div>

          {/* Features */}
          <div>
            <label className="block mb-1 font-medium">Features (comma separated)</label>
            <input
              name="features"
              value={formData.features}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="Fitness tracking, Heart rate, Notifications..."
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-1 font-medium">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="4.5"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block mb-1 font-medium">Stock</label>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="25"
            />
          </div>

          {/* SKU */}
          <div>
            <label className="block mb-1 font-medium">SKU</label>
            <input
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
              placeholder="SW-001"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
