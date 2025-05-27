"use client";

import {
  Dumbbell,
  BrainCircuit,
  Camera,
  Users,
  ShoppingCart,
  Building2,
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#053026]">
          Pourquoi choisir <span className="text-[#B2EE1B]">Nutr’IleFit</span> ?
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          Bien plus qu’une simple app, Nutr’IleFit combine <strong className="text-[#FD4101]">technologie, nutrition locale, coaching humain</strong> 
          et <strong className="text-[#1B82F1]">espace physique</strong>, pour créer une expérience personnalisée et accessible à tous les malgaches.
        </p>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          <FeatureCard
            icon={<BrainCircuit className="w-8 h-8 text-[#1B82F1]" />}
            title="NutriBot : votre coach IA"
            description="Un programme intelligent et évolutif selon votre corps, vos objectifs et votre rythme. Zéro excuse, 100% progrès."
          />
          <FeatureCard
            icon={<Camera className="w-8 h-8 text-[#FD4101]" />}
            title="NutriScan & ExpressScan IA"
            description="Analyse automatique des repas via photo ou description. Adapté aux aliments et habitudes locales."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-[#053026]" />}
            title="Coaching humain de qualité"
            description="Nutritionnistes et coachs malgaches certifiés, joignables à tout moment pour un suivi réel et motivant."
          />
          <FeatureCard
            icon={<Building2 className="w-8 h-8 text-[#B2EE1B]" />}
            title="Shake Bar & Communauté locale"
            description="Des lieux pour tester, échanger, participer à des défis. Le sport devient social et concret."
          />
          <FeatureCard
            icon={<ShoppingCart className="w-8 h-8 text-[#1B82F1]" />}
            title="Boutique E-market intégrée"
            description="Protéines, accessoires, équipements : commandables directement depuis l’app avec livraison rapide."
          />
          <FeatureCard
            icon={<Dumbbell className="w-8 h-8 text-[#FD4101]" />}
            title="Impact Santé & Données"
            description="Vos progrès renforcent les politiques de santé publique via des données locales anonymisées."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#053026] mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
