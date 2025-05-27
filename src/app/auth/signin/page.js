'use client';

import { getProviders, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

export default function SignInPage() {
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    async function loadProviders() {
      const res = await getProviders();
      setProviders(res);
    }
    loadProviders();
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-[#053026]">
          Connexion à NutrIleFit
        </h1>
        <p className="text-center text-sm text-gray-600 mb-4">
          Veuillez choisir une méthode de connexion :
        </p>

        {providers &&
          Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() => signIn(provider.id)}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg shadow"
              >
                Se connecter avec {provider.name}
              </button>
            </div>
          ))}
      </div>
    </main>
  );
}
