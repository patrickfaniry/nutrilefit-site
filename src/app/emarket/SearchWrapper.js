"use client";

import { useSearchParams } from "next/navigation";
import ProductList from "../components/ProductList";

export default function SearchWrapper() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "Tous";

  return <ProductList initialType={initialType} />;
}
