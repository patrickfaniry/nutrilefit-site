"use client";

import { Briefcase, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function PartnersSection() {
  return (
    <section id="partenaires" className="bg-white py-24 px-6 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#053026] mb-4">
          Devenez partenaire stratégique de Nutr’IleFit
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Nous collaborons avec les marques, coachs, institutions et professionnels de santé
          qui souhaitent s’engager dans un modèle innovant, local et à fort impact.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {[
          {
            icon: <Briefcase className="h-10 w-10 mx-auto text-[#1B82F1] mb-4" />,
            title: "Visibilité & Croissance",
            text: "Bénéficiez d’une exposition ciblée auprès d’une audience engagée, locale et africaine."
          },
          {
            icon: <TrendingUp className="h-10 w-10 mx-auto text-[#B2EE1B] mb-4" />,
            title: "Rentabilité & Innovation",
            text: "Investissez dans une plateforme hybride, scalable, adossée à des espaces physiques stratégiques."
          },
          {
            icon: <Users className="h-10 w-10 mx-auto text-[#1B82F1] mb-4" />,
            title: "Réseau & Crédibilité",
            text: "Rejoignez un écosystème de professionnels du bien-être, de la nutrition et du sport en Afrique."
          }
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition text-center"
          >
            {card.icon}
            <h3 className="text-xl font-bold text-[#053026]">{card.title}</h3>
            <p className="mt-2 text-gray-600">{card.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <p className="text-gray-700 max-w-2xl mx-auto mb-6 text-base md:text-lg">
          Vous êtes une marque, une salle de sport, un centre de santé, une ONG ou un acteur du
          digital santé ? Rejoignez notre mission et participez à une transformation durable à Madagascar.
        </p>
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-[#1B82F1] hover:bg-[#166FD0] text-white font-semibold text-sm rounded-full shadow transition"
        >
          Devenir partenaire
        </a>
      </motion.div>
    </section>
  );
}
