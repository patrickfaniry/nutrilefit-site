import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext"; // ✅ Ajout

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nutr'IleFit – Plateforme Sportive Malgache",
  description: "Rejoignez la communauté sportive malgache avec Nutr'IleFit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <FavoritesProvider> {/* ✅ Nouveau contexte */}
          <CartProvider> {/* ✅ Toujours présent */}
            <Header />
            <main className="pt-20">{children}</main>
            <Footer />
            <CartDrawer />
            <Toaster position="top-center" />
          </CartProvider>
        </FavoritesProvider>
      </body>
    </html>
  );
}
