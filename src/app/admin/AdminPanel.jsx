"use client";

import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "@/lib/firebase/firebase.config";

export default function AdminPanel() {
  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        window.location.href = "/login";
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <main className="min-h-screen py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Espace Admin</h1>
        <p className="text-gray-600">
          Bienvenue dans le panneau d’administration de Nutr’IleFit.
        </p>
      </div>
    </main>
  );
}
