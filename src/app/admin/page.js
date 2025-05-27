"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import auth from "@/lib/firebase/firebase.auth";
import ProductForm from "./ProductForm";

export default function AdminPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else window.location.href = "/login"; // Redirige si non connecté
    });

    return () => unsubscribe();
  }, []);

  if (!user) return null;

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold mb-6">Panneau d’administration</h1>

        <p className="mb-4 text-sm text-gray-600">
          Connecté en tant que : <strong>{user.email}</strong>
        </p>

        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold mb-4">🔧 Ajouter un produit</h2>
          <ProductForm /> {/* 👈 Formulaire intégré ici */}
        </div>
      </div>
    </main>
  );
}
