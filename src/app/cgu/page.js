"use client";

import Link from "next/link";

export default function CGUPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-blue-700">Conditions Générales d’Utilisation</h1>
        <p className="text-gray-700">
          Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
        </p>

        <section className="space-y-4 text-gray-800 text-justify">
          <h2 className="text-2xl font-semibold text-green-600">1. Présentation de la plateforme</h2>
          <p>
            La plateforme <strong>Nutr’IleFit</strong> est un service digital développé par Nutr’IleFit Madagascar,
            destiné à promouvoir le sport, la nutrition et le bien-être à travers des outils digitaux et des services personnalisés.
          </p>

          <h2 className="text-2xl font-semibold text-green-600">2. Acceptation des conditions</h2>
          <p>
            En accédant ou en utilisant le site <Link href="/" className="text-blue-600 underline">www.nutrilefit.mg</Link>,
            vous acceptez pleinement et sans réserve les présentes Conditions Générales d’Utilisation (CGU).
          </p>

          <h2 className="text-2xl font-semibold text-green-600">3. Services proposés</h2>
          <ul className="list-disc list-inside">
            <li>Accès à des contenus informatifs sur le sport et la nutrition</li>
            <li>Utilisation d’outils d’analyse et de suivi personnalisés</li>
            <li>Accès à un e-market pour commander des produits recommandés</li>
            <li>Connexion avec des professionnels locaux certifiés</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-600">4. Propriété intellectuelle</h2>
          <p>
            Tous les éléments présents sur la plateforme (textes, images, logos, marques, etc.) sont la propriété exclusive de Nutr’IleFit ou font l’objet d’un droit d’usage.
            Toute reproduction ou utilisation non autorisée est interdite.
          </p>

          <h2 className="text-2xl font-semibold text-green-600">5. Données personnelles</h2>
          <p>
            Nutr’IleFit s’engage à respecter la confidentialité des données personnelles collectées conformément à la réglementation en vigueur.
            Pour en savoir plus, veuillez consulter notre <Link href="/confidentialite" className="text-blue-600 underline">Politique de confidentialité</Link>.
          </p>

          <h2 className="text-2xl font-semibold text-green-600">6. Responsabilités</h2>
          <p>
            Nutr’IleFit met tout en œuvre pour fournir des services fiables. Toutefois, nous ne saurions être tenus responsables en cas d’interruption de service,
            de dysfonctionnement ou d’erreurs éventuelles sur le site.
          </p>

          <h2 className="text-2xl font-semibold text-green-600">7. Modification des CGU</h2>
          <p>
            Nutr’IleFit se réserve le droit de modifier à tout moment les présentes CGU. Les utilisateurs sont invités à les consulter régulièrement.
          </p>

          <h2 className="text-2xl font-semibold text-green-600">8. Droit applicable</h2>
          <p>
            Les présentes CGU sont soumises au droit malgache. En cas de litige, les tribunaux compétents seront ceux du ressort de la Cour d’appel d’Antananarivo.
          </p>
        </section>
      </div>
    </main>
  );
}
