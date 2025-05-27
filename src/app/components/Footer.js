"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#053026] text-white pt-16 pb-10 px-6">
      {/* ——— CONTENU PRINCIPAL ——— */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        {/* Logo & description */}
        <div>
          <Image
            src="/logo-nutrilefit.png"          /* mets ici ton png haute-def */
            alt="Logo Nutr'IleFit"
            width={160}
            height={48}
            className="mb-4"
          />
          <p className="text-sm text-gray-300 leading-relaxed">
            Nutr’IleFit reconnecte sport, nutrition et communauté pour un mode
            de vie sain à Madagascar et en Afrique.
          </p>
        </div>

        {/* Navigation interne */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#B2EE1B]">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              ["#accueil", "Accueil"],
              ["#a-propos", "À propos"],
              ["#fonctionnalites", "Fonctionnalités"],
              ["#partenaires", "Partenaires"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#B2EE1B]">
            Contact
          </h4>
          <ul className="text-sm space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={18} /> contact@nutrilefit.mg
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +261 38 35 590 02
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#B2EE1B]">
            Suivez-nous
          </h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/nutrilefit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#1B82F1]"
            >
              <Facebook size={22} />
            </a>
            <a
              href="https://www.instagram.com/nutrilefit"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#FD4101]"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* ——— COPYRIGHT / LIENS LÉGAUX ——— */}
      <div className="text-center text-xs text-gray-400 mt-8">
        © {new Date().getFullYear()} Nutr’IleFit · Tous droits réservés.
        <div className="mt-1">
          <Link href="/cgu" className="underline hover:text-white">
            CGU
          </Link>{" "}
          ·{" "}
          <Link
            href="/confidentialite"
            className="underline hover:text-white"
          >
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
