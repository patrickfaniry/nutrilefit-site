"use client";

import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase.db";
import { toast } from "react-hot-toast";

export default function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    currency: "MGA",
    imageUrl: "",
    isAvailable: true,
    formats: "",
    tag: "",
    category: "",
    stock: 0,
    effects: "",
    deliveryInfo: "",
    brand: "", // ✅ Nouveau champ
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formattedEffects = formData.effects
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item.length > 0);

      await addDoc(collection(db, "products"), {
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        effects: formattedEffects,
        updatedAt: new Date(),
      });

      toast.success("Produit ajouté avec succès !");
      setFormData({
        name: "",
        description: "",
        price: "",
        currency: "MGA",
        imageUrl: "",
        isAvailable: true,
        formats: "",
        tag: "",
        category: "",
        stock: 0,
        effects: "",
        deliveryInfo: "",
        brand: "", // ✅ reset brand
      });
    } catch (error) {
      console.error("Erreur lors de l’ajout :", error);
      toast.error("Erreur lors de l’ajout du produit.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-white border border-green-300 p-6 rounded-xl shadow-md mb-10">
      <h2 className="text-xl font-bold text-green-700 mb-4">Ajouter un produit</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nom du produit */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom du produit</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
            placeholder="Ex : Tapis Yoga Pro"
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
          ></textarea>
        </div>

        {/* Prix et Devise */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Prix</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
              placeholder="750000"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Devise</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
            >
              <option value="MGA">Ar (MGA)</option>
              <option value="EUR">€ (EUR)</option>
              <option value="USD">$ (USD)</option>
            </select>
          </div>
        </div>

        {/* Marque / Collection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Marque / Collection</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
            placeholder="Ex : Adidas, Nutr'IleFit, etc."
          />
        </div>

        {/* Formats */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Formats disponibles</label>
          <input
            type="text"
            name="formats"
            value={formData.formats}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
            placeholder="1kg / 2kg / M / L..."
          />
        </div>

        {/* Stock */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Quantité en stock</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
          />
        </div>

        {/* Catégorie */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Catégorie</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
          />
        </div>

        {/* Tag */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tag</label>
          <select
            name="tag"
            value={formData.tag}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
          >
            <option value="">-- Tag --</option>
            <option value="nouveau">Nouveau</option>
            <option value="promo">Promo</option>
          </select>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Image (URL)</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
            placeholder="https://..."
          />
        </div>

        {/* Effets / Bienfaits */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Effets / Bienfaits (séparés par virgule)</label>
          <input
            type="text"
            name="effects"
            value={formData.effects}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
            placeholder="Augmente la récupération, Améliore l’endurance..."
          />
        </div>

        {/* Livraison / Retrait */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Infos de livraison / retrait</label>
          <input
            type="text"
            name="deliveryInfo"
            value={formData.deliveryInfo}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md shadow-sm"
            placeholder="Livraison sous 48h, Retrait possible"
          />
        </div>

        {/* Disponibilité */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isAvailable"
            checked={formData.isAvailable}
            onChange={handleChange}
            className="h-4 w-4"
          />
          <label className="text-sm text-gray-700">Disponible à la vente</label>
        </div>

        {/* Bouton */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 rounded-md text-white font-semibold shadow transition ${
              isSubmitting ? "bg-gray-400" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isSubmitting ? "Enregistrement..." : "Ajouter le produit"}
          </button>
        </div>
      </form>
    </section>
  );
}
