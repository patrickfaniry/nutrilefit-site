import { Suspense } from "react";
import SearchWrapper from "./SearchWrapper";

export default function EMarketPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Bienvenue sur le <span className="text-blue-600">E-market Nutr’IleFit</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Découvrez notre sélection de protéines, compléments, équipements, vêtements et autres produits liés au sport, à la nutrition et au bien-être.
        </p>
      </div>

      <Suspense fallback={<div>Chargement des produits...</div>}>
        <SearchWrapper />
      </Suspense>
    </main>
  );
}
