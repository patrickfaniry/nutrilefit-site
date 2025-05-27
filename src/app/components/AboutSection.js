"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="a-propos" className="py-20 bg-white text-[#1F2937]">
      <motion.div
        className="max-w-6xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#053026]">
          À propos de <span className="text-[#B2EE1B]">Nutr’IleFit</span>
        </h2>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          <strong>Nutr’IleFit</strong> est bien plus qu’une simple application. C’est un
          <span className="text-[#FD4101] font-semibold"> écosystème complet de santé, nutrition et sport</span>,
          pensé pour répondre aux besoins spécifiques de la population malgache, tout en s’inspirant des standards internationaux.
        </p>

        <p className="text-lg md:text-xl mb-6 leading-relaxed">
          En combinant le coaching personnalisé, les données de santé publique,
          l’intelligence artificielle, et une <span className="text-[#1B82F1] font-semibold">infrastructure physique locale</span> 
          (Bar à Shakes, Kitchen, et plus), Nutr’IleFit permet à chacun d’évoluer à son rythme,
          avec des solutions concrètes, accessibles et modernes.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          Notre mission : <span className="font-semibold text-green-700">transformer durablement les habitudes de vie</span>, 
          en créant une communauté active, engagée et en bonne santé, tout en générant un impact 
          social mesurable à l’échelle nationale et africaine.
        </p>
      </motion.div>
    </section>
  );
}
