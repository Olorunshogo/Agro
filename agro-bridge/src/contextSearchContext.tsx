
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { debounce } from "lodash";

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

type Category = "Grains" | "Fruits" | "Seeds" | "Spices" | "Nuts" | "Oils";
type Country = "Nigeria" | "Ghana" | "Ivory Coast" | "Benin" | "Togo";
type StockStatus = "In Stock" | "Coming Soon";

interface Filters {
  searchQuery: string;
  categories: Category[];
  countries: Country[];
  priceRange: [number, number];
  stockStatus: StockStatus[];
}

const defaultFilters: Filters = {
  searchQuery: "",
  categories: [],
  countries: [],
  priceRange: [100, 10000],
  stockStatus: [],
};

interface SearchContextType extends Filters {
  setSearchQuery: (q: string) => void;
  setCategories: (c: Category[]) => void;
  setCountries: (c: Country[]) => void;
  setPriceRange: (range: [number, number]) => void;
  setStockStatus: (s: StockStatus[]) => void;
  resetFilters: () => void;
  applyFilters: () => void; // for mobile drawer
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState<Filters>(() => {
    const params = new URLSearchParams(searchParams);
    return {
      searchQuery: params.get("q") || "",
      categories: (params.get("cat")?.split(",") as Category[]) || [],
      countries: (params.get("country")?.split(",") as Country[]) || [],
      priceRange: [
        Number(params.get("min")) || 100,
        Number(params.get("max")) || 10000,
      ],
      stockStatus: (params.get("stock")?.split(",") as StockStatus[]) || [],
    };
  });

  // Sync filters → URL
  const syncToUrl = debounce(() => {
    const params = new URLSearchParams();

    if (filters.searchQuery) params.set("q", filters.searchQuery);
    if (filters.categories.length) params.set("cat", filters.categories.join(","));
    if (filters.countries.length) params.set("country", filters.countries.join(","));
    if (filters.priceRange[0] !== 100) params.set("min", filters.priceRange[0].toString());
    if (filters.priceRange[1] !== 10000) params.set("max", filters.priceRange[1].toString());
    if (filters.stockStatus.length) params.set("stock", filters.stockStatus.join(","));

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);

  useEffect(() => {
    syncToUrl();
  }, [filters]);

  const updateFilters = (updater: (prev: Filters) => Filters) => {
    setFilters(prev => {
      const next = updater(prev);
      return next;
    });
  };

  const value: SearchContextType = {
    ...filters,
    setSearchQuery: (q) => updateFilters(prev => ({ ...prev, searchQuery: q })),
    setCategories: (c) => updateFilters(prev => ({ ...prev, categories: c })),
    setCountries: (c) => updateFilters(prev => ({ ...prev, countries: c })),
    setPriceRange: (range) => updateFilters(prev => ({ ...prev, priceRange: range })),
    setStockStatus: (s) => updateFilters(prev => ({ ...prev, stockStatus: s })),
    resetFilters: () => setFilters(defaultFilters),
    applyFilters: () => {}, // no-op on desktop
  };

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}


