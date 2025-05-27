"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AppPreviewSection() {
  return (
    <section id="application" className="py-24 bg-white text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#053026] mb-6">
          L’application <span className="text-[#1B82F1]">Nutr’IleFit</span> dans votre poche
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 px-4">
          Visualisez l’interface de notre app mobile. Simplicité, performance, interaction :
          une expérience pensée pour vous accompagner au quotidien dans vos objectifs
          de santé et de bien-être.
        </p>
      </motion.div>

      <motion.div
        className="flex justify-center gap-8 flex-wrap px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/mockup1.png"
          alt="Écran d’accueil de l’application Nutr’IleFit"
          width={300}
          height={600}
          className="rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
        />
        <Image
          src="/mockup2.png"
          alt="Écran de suivi personnalisé Nutr’IleFit"
          width={300}
          height={600}
          className="rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105"
        />
      </motion.div>
    </section>
  );
}
