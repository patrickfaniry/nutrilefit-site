"use client";

import { MessageSquareHeart, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const testimonials = [
  {
    icon: <MessageSquareHeart className="h-9 w-9 text-[#FD4101] mb-4" />,
    title: "Une plateforme qui rassemble",
    description:
      "Les utilisateurs attendent un espace qui connecte coachs, sportifs et nutritionnistes. Nutr’IleFit est vu comme un catalyseur de communauté bien-être locale.",
  },
  {
    icon: <Users className="h-9 w-9 text-[#1B82F1] mb-4" />,
    title: "Adaptée à notre réalité",
    description:
      "Un service pensé pour les contraintes et objectifs malgaches. Cette approche locale est ce qui rend Nutr’IleFit unique et pertinent pour les utilisateurs d’ici.",
  },
  {
    icon: <Star className="h-9 w-9 text-[#B2EE1B] mb-4" />,
    title: "Un coach fiable au quotidien",
    description:
      "Le besoin d’un accompagnement sérieux, structuré, visible. L'app est perçue comme une réponse concrète aux attentes en résultats durables.",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-[#053026]">
          Ce qu’attend notre communauté
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Avant même le lancement, Nutr’IleFit suscite des attentes fortes. Voici
          les messages clés de notre panel testeurs malgaches.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((card, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition duration-300 border border-gray-100"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={i}
          >
            {card.icon}
            <h3 className="text-xl font-bold text-[#053026] mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
