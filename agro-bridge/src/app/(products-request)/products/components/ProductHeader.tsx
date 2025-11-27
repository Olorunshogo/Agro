
"use client";

import { SearchInput } from "~/components/input-fields/SearchInput";
import { useSearch } from "~/contextSearch";
import { BellDot, UserCheck, ShoppingCart, Menu } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";
import Link from "next/link";
import { products } from "~/store/products";
import { Product } from "~/app/types/types";
import Image from "next/image";


export default function ProductHeader() {
  const { searchQuery, setSearchQuery } = useSearch();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  // Debounced context + URL sync
  const handleSearchChange = debounce((value: string) => {
    setSearchQuery(value);
  }, 300);

  // Filter products based on current search query
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const lowerQuery = searchQuery.toLowerCase();
    return products
      .filter((p: Product) => {
        return (
          p.name.toLowerCase().includes(lowerQuery) ||
          p.category.toLowerCase().includes(lowerQuery)
        );
      })
      .slice(0, 10); // Max 10 results
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = debounce((value: string) => {
    setSearchQuery(value);
    if (value.trim()) {
      router.push(`/products?q=${encodeURIComponent(value)}`);
    } else {
      router.push("/products");
    }
  }, 400);

  const handleResultClick = (slug: string) => {
    setIsDropdownOpen(false);
    // setSearchQuery(""); // Optional: clear search after selection
    router.push(`/products/${slug}`);
  };
  
  return (
    <>
      <div className="relative z-50 flex justify-center w-full h-full font-inter">
        <div className="w-full px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) max-w-7xl h-full mx-auto">
          
          {/* Product Selection */}
          <div className="flex items-center justify-between w-full">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-(--agro-green-light) hidden sm:flex">Debrigger</span>
            </Link>

            <Button
              variant="ghost"
              className="transition-all duration-300 ease-in-out cursor-pointer sm:hidden lg:hidden"
              onClick={() => {
                setIsSidebarOpen(true);
                console.log(isSidebarOpen);
              }}
            >
              <span className="sr-only">Menu</span>
              <Menu className="w-6 h-6" />
            </Button>
            
            {/* Searchable Input */}
            <div className="flex-1 max-w-2xl mx-8">
              <SearchInput
                label=""
                value={searchQuery}
                placeholder="Search by product name or category..." 
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearchChange(e.target.value);
                  setIsDropdownOpen(true);
                }}
                onFocus={() => searchQuery.trim() && setIsDropdownOpen(true)}
                className="w-full"
              />
              
              {/* Search Results Dropdown */}
              {isDropdownOpen && searchResults.length > 0 && (
                <div className="absolute left-0 right-0 z-50 mt-2 overflow-hidden bg-white border rounded-lg shadow-lg top-full">
                  <div className="overflow-y-auto max-h-96">
                    {searchResults.map((product) => (
                      <button
                        key={product.slug}
                        onClick={() => handleResultClick(product.slug)}
                        className="flex items-center w-full gap-3 px-4 py-3 text-left transition-all duration-300 ease-in-out border-b hover:cursor-pointer hover:bg-gray-50 last:border-b-0"
                      >
                        <div className="flex-shrink-0 w-10 h-10 overflow-hidden rounded">
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-(--text-colour)">
                            {product.name}
                          </p>
                          <p className="text-xs text-(--text-colour)">
                            {product.category} • ${product.price}/Ton
                          </p>
                        </div>
                      </button>
                    ))}
                  </div>
                  {searchResults.length === 10 && (
                    <div className="px-4 py-2 text-xs text-center text-gray-500 border-t">
                      Showing 10 of {products.length}+ results
                    </div>
                  )}
                </div>
              )}
              
            </div>
            
            {/* Notification and Avatar */}
            <div className="flex items-center gap-2 *:hover:scale-105 *:hover:cursor-pointer *:duration-300 *:ease-in-out *:transition-all">
              <BellDot className="w-5 h-5 text-(--input-error-red)" />
              <ShoppingCart className="w-5 h-5 text-yellow-600" />
              <UserCheck className="w-5 h-5 text-(--agro-green-light)" />
            </div>

          </div>                   
          
        </div>
      </div>
    </>
  );
}
