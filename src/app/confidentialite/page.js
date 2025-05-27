"use client";

import { motion } from "framer-motion";
import { ShieldCheck, User, Settings, Share2, Lock, CalendarCheck } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:px-24 bg-white text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-blue-700 mb-2">Politique de Confidentialité</h1>
        <p className="text-sm text-gray-500 mb-6">Dernière mise à jour : 26/05/2025</p>

        {/* Sommaire */}
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg shadow mb-10">
          <p className="font-semibold mb-2">Sommaire :</p>
          <ul className="list-disc list-inside text-sm space-y-1">
            <li><a href="#intro" className="text-green-700 hover:underline">1. Introduction</a></li>
            <li><a href="#donnees" className="text-green-700 hover:underline">2. Données collectées</a></li>
            <li><a href="#finalites" className="text-green-700 hover:underline">3. Finalités de la collecte</a></li>
            <li><a href="#partage" className="text-green-700 hover:underline">4. Partage des données</a></li>
            <li><a href="#duree" className="text-green-700 hover:underline">5. Durée de conservation</a></li>
            <li><a href="#droits" className="text-green-700 hover:underline">6. Droits des utilisateurs</a></li>
            <li><a href="#securite" className="text-green-700 hover:underline">7. Sécurité des données</a></li>
          </ul>
        </div>

        {/* Section 1 */}
        <Section id="intro" title="1. Introduction" icon={<ShieldCheck className="text-green-600 w-6 h-6" />}>
          <p>
            La présente Politique de Confidentialité explique comment Nutr’IleFit collecte, utilise et protège vos données personnelles, conformément au RGPD et aux lois en vigueur à Madagascar.
          </p>
        </Section>

        {/* Section 2 */}
        <Section id="donnees" title="2. Données collectées" icon={<User className="text-green-600 w-6 h-6" />}>
          <ul className="list-disc list-inside space-y-2">
            <li>Informations personnelles : nom, email, téléphone, sexe, âge.</li>
            <li>Données de navigation et d’utilisation de l’application.</li>
            <li>Données de santé volontairement fournies (poids, objectifs, bilans).</li>
          </ul>
        </Section>

        {/* Section 3 */}
        <Section id="finalites" title="3. Finalités de la collecte" icon={<Settings className="text-green-600 w-6 h-6" />}>
          <ul className="list-disc list-inside space-y-2">
            <li>Créer et gérer votre compte utilisateur.</li>
            <li>Personnaliser vos recommandations de coaching et nutrition.</li>
            <li>Optimiser l’expérience utilisateur de notre plateforme.</li>
            <li>Envoyer des notifications ou communications.</li>
          </ul>
        </Section>

        {/* Section 4 */}
        <Section id="partage" title="4. Partage des données" icon={<Share2 className="text-green-600 w-6 h-6" />}>
          <p>
            Les données ne sont jamais vendues. Elles peuvent être partagées avec des prestataires techniques (hébergement, analyse, support) dans le cadre strict de l’utilisation du service Nutr’IleFit.
          </p>
        </Section>

        {/* Section 5 */}
        <Section id="duree" title="5. Durée de conservation" icon={<CalendarCheck className="text-green-600 w-6 h-6" />}>
          <p>
            Les données sont conservées tant que le compte est actif ou nécessaire au bon fonctionnement du service. Elles sont supprimées sur demande ou au bout de 3 ans d’inactivité.
          </p>
        </Section>

        {/* Section 6 */}
        <Section id="droits" title="6. Droits des utilisateurs" icon={<User className="text-green-600 w-6 h-6" />}>
          <p>
            Conformément à la loi, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition aux données vous concernant. Pour exercer vos droits, contactez : <a href="mailto:contact@nutrilefit.mg" className="text-blue-600 underline">contact@nutrilefit.mg</a>.
          </p>
        </Section>

        {/* Section 7 */}
        <Section id="securite" title="7. Sécurité des données" icon={<Lock className="text-green-600 w-6 h-6" />}>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre toute perte, utilisation abusive, accès non autorisé ou divulgation.
          </p>
        </Section>
      </motion.div>
    </main>
  );
}

function Section({ id, title, icon, children }) {
  return (
    <section id={id} className="mb-10">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h2 className="text-2xl font-bold text-green-700">{title}</h2>
      </div>
      <div className="text-gray-700 space-y-3 text-[1.05rem] leading-relaxed">
        {children}
      </div>
    </section>
  );
}
