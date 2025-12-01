
"use client";

import { SearchInput } from "~/components/input-fields/SearchInput";
import { useSearch } from "~/contextSearch";
import { BellDot, X, UserCheck, ShoppingCart, Search, Menu, MouseIcon, MousePointer } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";
import { debounce, set } from "lodash";
import Link from "next/link";
import { products } from "~/store/products";
import { Product } from "~/app/types/types";
import { AppLogo } from "~/components/app-logo";
import PrimaryLink from "~/components/LinkPrimary";
import SecondaryLink from "~/components/LinkSecondary";
import { navLinks } from "~/store/store";
import NavigationLinksLg from "~/components/NavigationLinksLg";

export default function ProductHead() {
  const { searchQuery, setSearchQuery } = useSearch();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(true);
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(true);

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
      <header className="sticky top-0 left-0 z-50 w-full backdrop-blur-md bg-(--border-gray)">
        <div className="flex items-center justify-between gap-2 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full max-w-7xl mx-auto h-full">
          {/* Logo */}
          <div className="flex items-center py-4">
            <Link href="/" className="flex items-center gap-2">
              <AppLogo className="w-8 h-8 text-lg" />
              <span className="hidden text-xl font-bold lg:flex text-(--agro-green-light)">Debridger</span>
            </Link>
          </div>

          {/* Navigaiton Links */}
          <NavigationLinksLg />          

          {/* Notification and Avatar */}
          <div className="relative flex items-center gap-2 *:hover:scale-105 *:hover:cursor-pointer *:duration-300 *:ease-in-out *:transition-all">
            
            {isSearchBarOpen ? (
              <X
                onClick={() => setIsSearchBarOpen(false)}
                className="w-5 h-5 text-(--input-error-red) lg:hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              />
            ) : (
              <Search
                onClick={() => setIsSearchBarOpen(true)}
                className="w-5 h-5 text-(--heading-colour) lg:hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
              />
            )}

            <ShoppingCart className="w-5 h-5 text-yellow-600 cursor-pointer" />
            <UserCheck 
              className="w-5 h-5 text-(--agro-green-light) cursor-pointer" 
              onClick={() => setIsAuthOpen(true)}
            />

            {isAuthOpen && (
              <div className="flex flex-wrap max-w-sm gap-4 top-full right-4">
                <PrimaryLink
                  href="/signup"
                  label="Sign In"
                  icon={MousePointer}
                  rotateClass="-rotate-45"
                  className=""
                />
                
                <PrimaryLink
                  href="/signup"
                  label="Sign In"
                  icon={MousePointer}
                  rotateClass="-rotate-45"
                  className=""
                />
              </div>
            )}
          </div>

          {/* Sidebar Toggle Button */}
          <Button
            variant="ghost"
            className="transition-all duration-300 ease-in-out cursor-pointer lg:hidden"
            onClick={() => {
              setIsSidebarOpen(true);
              console.log(isSidebarOpen);
            }}
          >
            <span className="sr-only">Menu</span>
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      
      
    
    {/* *
      <div className="relative z-50 flex justify-center w-full h-full font-inter">
        <div className="w-full px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) max-w-7xl h-full mx-auto">
          
          {/* Product Selection *
          <div className="flex items-center justify-between w-full">
            {/* Logo and Menu Button *
            <div className="flex items-center">
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

              {/* Logo *
              <Link 
                href="/" 
                className="flex items-center gap-2 text-xl font-bold text-(--agro-green-light)"
              >
                <AppLogo className="w-5 h-5" />
                <span className="hidden sm:flex">Debridger</span>
              </Link>
            </div>
            
            {/* Searchable Input *
            <div className="relative flex-1 hidden w-full max-w-xl mx-8 lg:flex">
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
              
              {/* Search Results Dropdown *
              {/* {isDropdownOpen && searchResults.length > 0 && (
                <div className="absolute z-50 w-full mx-auto overflow-hidden bg-white border rounded-lg shadow-md max-w-[550px] top-full">
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
              )} *
              
            </div>
            
            {/* Notification and Avatar *
            <div className="flex items-center gap-2 *:hover:scale-105 *:hover:cursor-pointer *:duration-300 *:ease-in-out *:transition-all">
              
              {isSearchBarOpen ? (
                <X
                  onClick={() => setIsSearchBarOpen(false)}
                  className="w-5 h-5 text-(--input-error-red) lg:hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                />
              ) : (
                <Search
                  onClick={() => setIsSearchBarOpen(true)}
                  className="w-5 h-5 text-(--heading-colour) lg:hidden cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
                />
              )}

              <ShoppingCart className="w-5 h-5 text-yellow-600 cursor-pointer" />
              <UserCheck className="w-5 h-5 text-(--agro-green-light) cursor-pointer" />
            </div>

          </div>  
          *

          {/* Searchable Input on small screen 
          {isSearchBarOpen && (
            <div className="z-[99] bg-white flex-1 max-w-2xl mx-8 lg:hidden fixed top-18 w-full mx-auto left-0">

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
                className="mx-auto w-9/10"
              />
          
              {/* Search Results Dropdown *
              {/* {isDropdownOpen && searchResults.length > 0 && (
                <div className="absolute z-50 w-full overflow-hidden bg-white border shadow-md top-full">
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
          )}  
          *        
          
        </div>
      </div>
      
      */}
      </header>      
    </>
  );
}
