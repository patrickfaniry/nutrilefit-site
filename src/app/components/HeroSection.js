"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="accueil"
      className="bg-light text-primary py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Texte à gauche */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight font-display">
            Rejoignez la <span className="text-accent">communauté Nutr’IleFit</span><br />
            <span className="text-secondary">santé, sport & nutrition</span> à Madagascar
          </h1>

          <p className="mt-6 text-lg text-gray-700 font-sans max-w-xl">
            Une plateforme dédiée à votre bien-être, pour progresser ensemble grâce à des produits adaptés, une application mobile et une communauté soudée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/emarket"
              className="bg-accent hover:bg-[#e13c00] text-white font-semibold px-6 py-3 rounded-full shadow text-center transition"
            >
              Explorer le E-market
            </Link>

            <Link
              href="#a-propos"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-full transition text-center"
            >
              En savoir plus
            </Link>
          </div>
        </motion.div>

        {/* Image à droite */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="flex justify-center"
        >
          <Image
            src="/athlete-hero.png"
            alt="Sportif Nutr'IleFit"
            width={450}
            height={450}
            className="rounded-2xl shadow-xl border"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
