import dynamic from "next/dynamic";

// On importe dynamiquement le formulaire de connexion sans le rendre côté serveur
const LoginForm = dynamic(() => import("./LoginForm"), { ssr: false });

export default function LoginPage() {
  return <LoginForm />;
}
