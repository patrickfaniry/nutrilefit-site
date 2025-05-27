"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Nécessaire pour éviter le mismatch SSR/CSR
    setIsClient(true);
  }, []);

  const handleNavClick = (id) => {
    if (pathname === "/") {
      // Si on est déjà sur la home page, scroll jusqu'à l’ancre
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Sinon, redirige vers la home avec le hash
      router.push(`/#${id}`);
    }
  };

  if (!isClient) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/logo-nutrilefit.png"
              alt="Logo Nutr’IleFit"
              width={42}
              height={42}
              className="rounded"
              priority
            />
            <span className="text-2xl font-black text-gray-900">
              <span className="text-[#002B23]">Nutr’</span>
              <span className="text-[#C6F221]">IleFit</span>
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap gap-3 text-sm font-semibold">
          {[
            { label: "Accueil", id: "accueil" },
            { label: "À propos", id: "a-propos" },
            { label: "Fonctionnalités", id: "fonctionnalites" },
            { label: "Témoignages", id: "temoignages" },
            { label: "Application", id: "application" },
            { label: "Découvrir le PBSK", id: "pbsk" },
            { label: "Partenaires", id: "partenaires" },
            { label: "Contact", id: "contact" },
          ].map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="px-4 py-2 rounded-full text-gray-700 hover:text-white hover:bg-gradient-to-r from-[#C6F221] to-[#FD4101] transition-all duration-300 shadow-sm"
            >
              {label}
            </button>
          ))}
        </nav>
      </div>

      {/* Barre décorative */}
      <div className="h-1 bg-gradient-to-r from-[#C6F221] via-[#FD4101] to-[#002B23]" />
    </header>
  );
}
