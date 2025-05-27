"use client";

import { useState, useContext } from "react";
import { ShoppingCart, Trash2, X } from "lucide-react";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";

export default function CartDrawer() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  const total = cartItems.reduce((acc, item) => acc + (item.price || 0), 0);

  return (
    <>
      {/* Bouton flottant pour ouvrir le panier */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-lime-400 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transition"
      >
        Voir le panier ({cartItems.length})
      </button>

      {/* Drawer du panier */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={() => setIsOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                <ShoppingCart className="w-6 h-6 text-lime-500" />
                Mon Panier
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-red-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-600">Votre panier est vide.</p>
            ) : (
              <>
                <ul className="space-y-4">
                  {cartItems.map((item, index) => (
                    <li key={index} className="flex items-center gap-4 border-b pb-4">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={item.imageUrl || "/placeholder.png"}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.formats}</p>
                        <p className="text-sm text-gray-800 font-semibold">{item.price?.toLocaleString()} MGA</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t pt-4 space-y-4">
                  <div className="flex justify-between text-lg font-semibold text-gray-800">
                    <span>Total :</span>
                    <span>{total.toLocaleString()} MGA</span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <button
                      onClick={clearCart}
                      className="w-1/2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 rounded"
                    >
                      Vider
                    </button>
                    <button
                      onClick={() => alert("Fonction d'achat à venir...")}
                      className="w-1/2 bg-lime-500 hover:bg-lime-600 text-white font-semibold py-2 rounded"
                    >
                      Acheter
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
