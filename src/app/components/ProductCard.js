"use client";

import Image from "next/image";
import { BadgeCheck, Pencil, Trash2, ShoppingCart, Heart, HeartOff } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext"; // ✅

export default function ProductCard({ product, isAdmin, onEdit, onDelete }) {
  const { addToCart } = useCart();
  const { favorites, toggleFavorite, isFavorite } = useFavorites(); // ✅

  if (!product) return null;

  const imageUrl = product.imageUrl?.trim() ? product.imageUrl : "/placeholder.png";

  const badgeColor =
    product.tag === "promo"
      ? "bg-red-500"
      : product.tag === "nouveau"
      ? "bg-green-600"
      : "bg-gray-400";

  const badgeText =
    product.tag === "promo"
      ? "Promo"
      : product.tag === "nouveau"
      ? "Nouveau"
      : null;

  const favorite = isFavorite(product.id); // ✅

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden border border-gray-100 relative"
    >
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {badgeText && (
          <span className={`absolute top-2 left-2 text-xs text-white font-semibold px-2 py-1 rounded ${badgeColor}`}>
            {badgeText}
          </span>
        )}
        {!isAdmin && (
          <button
            onClick={() => toggleFavorite(product.id)}
            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:scale-110 transition"
            title={favorite ? "Retirer des favoris" : "Ajouter aux favoris"}
          >
            {favorite ? (
              <Heart className="w-5 h-5 text-red-600 fill-red-600" />
            ) : (
              <Heart className="w-5 h-5 text-gray-400" />
            )}
          </button>
        )}
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold text-gray-900">{product.name}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>

        <p className="text-gray-800 font-bold">
          {product.price?.toLocaleString()} {product.currency || "MGA"}
        </p>

        {product.formats && (
          <p className="text-xs text-gray-500 italic">Formats : {product.formats}</p>
        )}

        {!product.isAvailable && (
          <p className="text-red-500 mt-2 text-sm font-medium">
            Indisponible actuellement
          </p>
        )}

        <div className="flex flex-wrap justify-between items-center mt-3 gap-2">
          {isAdmin ? (
            <>
              <button
                onClick={onEdit}
                className="flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm"
              >
                <Pencil className="w-4 h-4" /> Modifier
              </button>
              <button
                onClick={onDelete}
                className="flex items-center gap-1 text-red-600 hover:text-red-800 text-sm"
              >
                <Trash2 className="w-4 h-4" /> Supprimer
              </button>
            </>
          ) : (
            product.isAvailable && (
              <button
                onClick={() => addToCart(product)}
                className="flex items-center gap-1 text-green-600 hover:text-green-800 text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                Ajouter au panier
              </button>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
}
