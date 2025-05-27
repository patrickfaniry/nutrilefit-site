"use client";

import { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { db } from "@/lib/firebase/firebase.db";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Share2,
  MessageCircle,
  BadgeCheck,
  ShoppingCart,
} from "lucide-react";
import toast from "react-hot-toast";
import { CartContext } from "@/context/CartContext";

export default function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const docRef = doc(db, "products", id);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          const data = { id: snapshot.id, ...snapshot.data() };
          setProduct(data);
          fetchSimilarProducts(data);
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Erreur lors du chargement du produit :", error);
      } finally {
        setLoading(false);
      }
    }

    async function fetchSimilarProducts(currentProduct) {
      if (!currentProduct || !currentProduct.category) return;
      try {
        const q = query(
          collection(db, "products"),
          where("category", "==", currentProduct.category)
        );
        const snapshot = await getDocs(q);
        const others = snapshot.docs
          .filter((doc) => doc.id !== currentProduct.id)
          .map((doc) => ({ id: doc.id, ...doc.data() }));
        setSimilarProducts(others);
      } catch (error) {
        console.error("Erreur chargement produits similaires :", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Chargement en cours...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Produit introuvable.
      </div>
    );
  }

  const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/emarket/${id}`;
  const badgeColor =
    product.tag === "promo"
      ? "bg-red-500"
      : product.tag === "nouveau"
      ? "bg-green-600"
      : "bg-gray-400";

  const badgeText =
    product.tag === "promo"
      ? "Promo"
      : product.tag === "nouveau"
      ? "Nouveau"
      : null;

  const handleAddToCart = () => {
    if (quantity < 1) return;
    const item = { ...product, quantity: Number(quantity) };
    addToCart(item);
    toast.success("Produit ajouté au panier !");
  };

  return (
    <main className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Zone d'action */}
        <div className="flex items-center justify-between">
          <Link
            href="/emarket"
            className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition"
          >
            <ArrowLeft className="w-4 h-4 mr-1" /> Retour au catalogue
          </Link>

          <div className="flex gap-4">
            <a
              href={`https://wa.me/261000000000?text=Bonjour,%20je%20suis%20intéressé%20par%20le%20produit%20"${encodeURIComponent(
                product.name
              )}"`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              <MessageCircle className="w-4 h-4" /> Contacter
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(shareUrl);
                toast.success("Lien copié dans le presse-papiers !");
              }}
              className="flex items-center gap-1 px-3 py-1.5 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              <Share2 className="w-4 h-4" /> Partager
            </button>
          </div>
        </div>

        {/* Fiche produit */}
        <div className="flex flex-col md:flex-row gap-10">
          <div className="relative w-full md:w-1/2 h-96 rounded-lg overflow-hidden border">
            <Image
              src={product.imageUrl || "/placeholder.png"}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {badgeText && (
              <span className={`absolute top-3 left-3 text-xs text-white font-semibold px-2 py-1 rounded ${badgeColor}`}>
                {badgeText}
              </span>
            )}
          </div>

          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold text-[#053026]">{product.name}</h1>
            <p className="text-base text-gray-700">{product.description}</p>

            <p className="text-2xl font-semibold text-[#FD4101]">
              {product.price?.toLocaleString()} {product.currency || "MGA"}
            </p>

            {product.category && (
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Catégorie :</span> {product.category}
              </p>
            )}

            {product.formats && (
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Formats disponibles :</span> {product.formats}
              </p>
            )}

            {product.deliveryInfo && (
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-800">Livraison / Retrait :</span> {product.deliveryInfo}
              </p>
            )}

            {product.stock && (
              <p className="text-sm text-green-600 font-medium">
                Stock disponible : {product.stock}
              </p>
            )}

            {/* Quantité à commander */}
            <div className="mt-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Quantité à acheter</label>
              <input
                type="number"
                value={quantity}
                min={1}
                max={product.stock || 99}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-24 px-2 py-1 border rounded-md shadow-sm"
              />
            </div>

            {product.effects?.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mt-4 mb-2 text-gray-800">Effets / Bienfaits :</h2>
                <ul className="list-none space-y-2">
                  {product.effects.map((effect, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-700">
                      <BadgeCheck className="w-5 h-5 text-[#B2EE1B]" /> {effect}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {!product.isAvailable && (
              <p className="text-red-600 font-medium">
                Ce produit est actuellement indisponible.
              </p>
            )}

            <div className="pt-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white bg-[#053026] hover:bg-[#06513b] transition"
              >
                <ShoppingCart className="w-5 h-5" /> Ajouter au panier
              </button>
            </div>
          </div>
        </div>

        {/* Galerie d'images secondaires */}
        {product.gallery?.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mt-8 mb-2">Autres images :</h3>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {product.gallery.map((imgUrl, idx) => (
                <div key={idx} className="flex-shrink-0 w-40 h-40 relative border rounded">
                  <Image
                    src={imgUrl}
                    alt={`Image secondaire ${idx + 1}`}
                    fill
                    className="object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Produits similaires */}
        {similarProducts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-4">Vous aimerez aussi :</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {similarProducts.slice(0, 3).map((prod) => (
                <Link key={prod.id} href={`/emarket/${prod.id}`}>
                  <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                    <Image
                      src={prod.imageUrl || "/placeholder.png"}
                      alt={prod.name}
                      width={400}
                      height={300}
                      className="object-cover w-full h-48"
                    />
                    <div className="p-3">
                      <h4 className="font-semibold text-gray-900 truncate">{prod.name}</h4>
                      <p className="text-sm text-gray-600 truncate">
                        {prod.price?.toLocaleString()} {prod.currency || "MGA"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
