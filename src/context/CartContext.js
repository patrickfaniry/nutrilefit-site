"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Création du contexte
export const CartContext = createContext();

// Hook personnalisé pour utiliser le contexte proprement
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart doit être utilisé dans CartProvider");
  }
  return context;
}

// Provider du contexte
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Charger depuis localStorage au démarrage
  useEffect(() => {
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  // Sauvegarder à chaque changement
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Ajouter au panier
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Supprimer du panier
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Vider le panier
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
