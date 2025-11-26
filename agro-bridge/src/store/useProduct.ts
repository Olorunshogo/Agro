
import { useMemo } from "react";
import { randomizeProducts } from "~/lib/utils";
import { products } from "./products";

export function useProducts() {
  // Memoized randomization (runs only once per session)
  const randomized = useMemo(() => randomizeProducts(products), []);

  return randomized;
}

