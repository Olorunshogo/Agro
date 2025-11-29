"use client";

import { useSearch } from "~/contextSearch";
import { BellDot, X, UserCheck, ShoppingCart, Search, Menu, LogIn, MousePointer } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import { useRouter } from "next/navigation";
import { debounce } from "lodash";
import Link from "next/link";
import { products } from "~/store/products";
import { Product } from "~/app/types/types";
import { AppLogo } from "~/components/app-logo";
import PrimaryLink from "~/components/LinkPrimary";
import SecondaryLink from "~/components/LinkSecondary";
import NavigationLinksLg from "~/components/NavigationLinksLg";
import { SearchInput } from "~/components/input-fields/SearchInput";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductHeader() {
  const { searchQuery, setSearchQuery } = useSearch();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const authRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
      if (authRef.current && !authRef.current.contains(e.target as Node)) {
        setIsAuthOpen(false);
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
    setSearchQuery("");
    router.push(`/products/${slug}`);
  };

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return products
      .filter((p: Product) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
      )
      .slice(0, 10);
  }, [searchQuery]);

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 left-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

          {/* Left: Menu + Logo */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu className="w-5 h-5" />
            </Button>

            <Link href="/" className="flex items-center gap-2">
              <AppLogo className="w-8 h-8" />
              <span className="hidden text-xl font-bold text-emerald-600 lg:block">Debrigger</span>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <div className="flex-1 hidden max-w-2xl mx-8 lg:block">
            <NavigationLinksLg />
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-3">

            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
              className="relative"
            >
              {isSearchBarOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5 text-yellow-600" />
            </Button>

            {/* Desktop Auth Links */}
            <div className="items-center hidden gap-3 lg:flex">
              <SecondaryLink href="/login" label="Sign In" icon={LogIn} />
              <PrimaryLink href="/signup" label="Sign Up" icon={MousePointer} />
            </div>

            {/* Mobile Auth Toggle */}
            <div className="relative lg:hidden" ref={authRef}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsAuthOpen(!isAuthOpen)}
              >
                <UserCheck className="w-5 h-5 text-emerald-600" />
              </Button>

            </div>
          </div>
        </div>
      </header>

      {/* Full-Width Search Bar (appears below header) */}
      <AnimatePresence>
        {isSearchBarOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-b bg-background/95 backdrop-blur"
          >
            <div className="max-w-3xl px-4 py-4 mx-auto">
              <div ref={inputRef} className="relative">
                <SearchInput
                  value={searchQuery}
                  placeholder="Search products or categories..."
                  onChange={(e) => {
                    const val = e.target.value;
                    setSearchQuery(val);
                    handleSearch(val);
                    setIsDropdownOpen(val.length > 0);
                  }}
                  onFocus={() => searchQuery && setIsDropdownOpen(true)}
                  autoFocus
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}