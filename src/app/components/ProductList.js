"use client";

import { useEffect, useState } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "@/lib/firebase/firebase.db";
import auth from "@/lib/firebase/firebase.auth";
import ProductCard from "./ProductCard";
import ProductForm from "../admin/ProductForm";

export default function ProductList({ initialType = "Tous" }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState(initialType);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [availableTypes, setAvailableTypes] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "products"));
      const fetchedProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(fetchedProducts);

      const types = Array.from(
        new Set(fetchedProducts.map((p) => p.type?.toLowerCase()).filter(Boolean))
      );
      setAvailableTypes(types);
    } catch (error) {
      console.error("Erreur de chargement des produits :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Supprimer ce produit ?")) return;
    try {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    } catch (error) {
      console.error("Erreur suppression :", error);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name?.toLowerCase().includes(search.toLowerCase());
    const matchType =
      filterType === "Tous" || product.type?.toLowerCase() === filterType.toLowerCase();
    return matchSearch && matchType;
  });

  return (
    <div className="space-y-10">
      {user && (
        <div className="bg-white p-6 rounded-xl shadow-md border border-green-300">
          <h3 className="text-xl font-bold text-green-700 mb-4">
            {editingProduct ? "Modifier un produit" : "Ajouter un produit"}
          </h3>
          <ProductForm
            initialData={editingProduct}
            onSuccess={() => {
              setEditingProduct(null);
              fetchProducts();
            }}
          />
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 border rounded shadow-sm"
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full md:w-1/4 p-2 border rounded shadow-sm"
        >
          <option value="Tous">Tous les types</option>
          {availableTypes.map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <p className="text-center text-gray-500">Chargement des produits...</p>
      ) : filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">Aucun produit trouvé.</p>
      ) : (
        <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isAdmin={!!user}
              onEdit={() => setEditingProduct(product)}
              onDelete={() => handleDelete(product.id)}
            />
          ))}
        </section>
      )}
    </div>
  );
}
