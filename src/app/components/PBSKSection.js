"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Handshake,
  HeartPulse,
  Users,
  Dumbbell,
  ShoppingBasket,
} from "lucide-react";

export default function PBSKSection() {
  return (
    <section id="pbsk" className="bg-[#F9FAFB] py-24 px-6 text-gray-800">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#053026]">
          Protein Shake Bar & Kitchen –{" "}
          <span className="text-[#1B82F1]">PBSK Nutr’IleFit</span>
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-6 text-gray-700">
          Bien plus qu’un bar santé, le <strong>PBSK</strong> est notre espace physique de
          transformation. Accessible à tous, il incarne notre vision : allier nutrition locale,
          accompagnement personnalisé, communauté et impact social.
        </p>
        <p className="text-base max-w-2xl mx-auto mb-10 text-gray-600">
          Venez découvrir, échanger, consommer ou simplement partager un moment.
          Le PBSK est le cœur battant de notre écosystème santé – un lieu pour progresser
          ensemble.
        </p>

        <div className="mb-12 flex justify-center">
          <Image
            src="/pbsk-visuel.jpg"
            alt="Espace PBSK Nutr’IleFit"
            width={700}
            height={420}
            className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-left">
          <PBSKCard
            icon={<UtensilsCrossed className="w-8 h-8 text-[#1B82F1]" />}
            title="Shakes & repas adaptés"
            description="Menus sains et personnalisés pour la prise de masse, la sèche ou la récupération."
          />
          <PBSKCard
            icon={<Handshake className="w-8 h-8 text-[#1B82F1]" />}
            title="Conseils de coachs certifiés"
            description="Profitez de recommandations directes avec nos professionnels sur place."
          />
          <PBSKCard
            icon={<HeartPulse className="w-8 h-8 text-[#1B82F1]" />}
            title="Suivi express bien-être"
            description="Évaluations rapides, bilans de forme et orientation personnalisée."
          />
          <PBSKCard
            icon={<Users className="w-8 h-8 text-[#1B82F1]" />}
            title="Communauté et ambiance"
            description="Rejoignez les défis, les ateliers et les évènements Nutr’IleFit locaux."
          />
          <PBSKCard
            icon={<ShoppingBasket className="w-8 h-8 text-[#1B82F1]" />}
            title="Vente sur place"
            description="Protéines, compléments, snacks et accessoires validés par nos coachs."
          />
          <PBSKCard
            icon={<Dumbbell className="w-8 h-8 text-[#1B82F1]" />}
            title="Impact économique local"
            description="Création d’emplois, valorisation des acteurs santé et production locale."
          />
        </div>
      </motion.div>
    </section>
  );
}

function PBSKCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
