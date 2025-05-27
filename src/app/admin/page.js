"use client";

import { useEffect, useState } from "react";

export default function AdminPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // S'assurer que le composant est bien monté côté client
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // évite l’erreur "window is not defined" lors du build
  }

  return (
    <main className="min-h-screen py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Espace Admin</h1>
        <p className="text-gray-600">
          Bienvenue dans le panneau d’administration de Nutr’IleFit. Cette
          section est réservée aux administrateurs.
        </p>
        {/* Tu peux ajouter ici des boutons, composants de gestion, stats, etc. */}
      </div>
    </main>
  );
}
