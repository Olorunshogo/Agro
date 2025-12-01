"use client";

import { useSearch } from "~/contextSearch";
import { X, UserCheck, ShoppingCart, Search, Menu, LogIn } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";
import { Button } from "~/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { debounce } from "lodash";
import Link from "next/link";
import { products } from "~/store/products";
import { Product } from "~/app/types/types";
import { AppLogo } from "~/components/app-logo";
import PrimaryLink from "~/components/LinkPrimary";
import SecondaryLink from "~/components/LinkSecondary";import { SearchInput } from "~/components/input-fields/SearchInput";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { navLinks, sideNavLinks } from "~/store/store";

export default function ProductHeader() {
  const { searchQuery, setSearchQuery } = useSearch();
  const router = useRouter();
  const pathname = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const authRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
  //       setIsDropdownOpen(false);
  //     }
  //     if (authRef.current && !authRef.current.contains(e.target as Node)) {
  //       setIsAuthOpen(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);

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
    //setSearchQuery("");
    router.push(`/products/${slug}`);
    setTimeout(() => {
      setIsSearchBarOpen(false);
      setSearchQuery("");
    }, 2000);
  };

  // Get a dropdown of search results: Check the ProductHer component
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

  // Animation variants
  const sidebarVariants: Variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
        duration: 0.4,
      },
    },
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants: Variants = {
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      {/* Main Header */}
      <header className="sticky top-0 left-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="relative flex items-center justify-between h-(--navbar-h) px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">

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
              <span className="hidden text-xl font-bold text-(--agro-green-dark) lg:block">Debrigger</span>
            </Link>
          </div>

          {/* Center: Desktop Nav */}
          <nav className="items-center hidden gap-2 lg:flex">
            <ul className="flex items-center gap-2 bg-(--agro-green-dark) rounded-full p-1 shadow-md">
              {navLinks.map(({ label, href, icon: Icon }) => {
                const isActive = pathname == href;
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold font-inter hover:opacity-90 rounded-full transition-all duration-300 ease-in-out
                        ${
                          isActive
                            ? "text-(--agro-green-dark) bg-white shadow-md"
                            : "text-white hover:bg-white hover:text-(--agro-green-dark)"
                        }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      <span>{label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>  

          {/* Right: Icons */}
          <div className="relative flex items-center gap-1 sm:gap-2">

            {/* Search Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchBarOpen(!isSearchBarOpen)}
              className="relative"
            >
              {isSearchBarOpen ? <X className="w-5 h-5 text-(--input-error-red)" /> : <Search className="w-5 h-5" />}
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5 text-yellow-600 cursor-default" />
            </Button>

            {/* Auth Links Toggle */}
             <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              className="relative flex"
            >
              {isAuthOpen ? 
                <X className="w-5 h-5 text-(--input-error-red)" /> : 
                <UserCheck className="w-5 h-5 text-(--agro-green-dark)" />
              }
            </Button>

            {/* Absolute Desktop Auth Links */}
            <AnimatePresence>
              {isAuthOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute flex items-center justify-center w-[260px] bg-black/60 rounded-md backdrop-blur-md top-12 right-2"
                >
                  <div className="p-2 mx-auto">
                    <div 
                      ref={authRef}
                      className="flex items-center w-full gap-2"
                    >
                      <SecondaryLink 
                        href="/signin" label="Log In" icon={LogIn} 
                        rotateClass="rotate-90"
                      />
                      <PrimaryLink href="/signup" label="Sign Up" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Sidebar Content */}
            <motion.aside
              variants={sidebarVariants}
              initial="closed"
              animate="open"
              exit="closed"              
              className="fixed lg:hidden top-0 left-0 z-50 h-full bg-white shadow-lg w-full sm:w-1/2 lg:w-1/3 h-full duration-300 ease-in-out transform transition-all"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                ref={sidebarRef}
                className="flex flex-col h-full gap-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col h-full gap-4">
                  <div className="flex items-center justify-between w-full gap-4 p-3 shadow-md backdrop-blur-sm h-(--navbar-h)">
                    <div className="flex items-center">
                      <Link
                        href="/"
                        className="flex items-center gap-2"
                        onClick={() => {
                          setIsSidebarOpen(false);
                          console.log(isSidebarOpen);
                        }}
                      >
                        <AppLogo className="w-8 h-8 text-lg" />
                        <span className="text-xl text-(--agro-green-dark) font-bold">Debrigger</span>
                      </Link>
                    </div>

                    <Button
                      variant="ghost"
                      className="h-6 flex items-center justify-center w-6 text-xl font-bold text-(--text-colour) hover:text-(--input-error-red) duration-300 ease-in-out hover:cursor-pointer transition-all"
                      onClick={() => {
                        setIsSidebarOpen(false);
                        console.log(isSidebarOpen);
                      }}
                    >
                      x
                    </Button>
                  </div>

                  <nav className="w-full p-4">
                    <ul className="grid w-full gap-2">
                      {sideNavLinks.map(({ label, href, icon: Icon }) => {
                        const isActive = pathname === href;
                        return (
                          <li key={href}>
                            <Link
                              href={href}
                              passHref
                              className={`${
                                isActive
                                  ? "bg-[#E8EEE9] border-1 border-(--border-gray) text-(--heading-colour) shadow-md"
                                  : "text-(--text-colour) hover:bg-[[#E8EEE9] hover:shadow-md hover:bg-[#E8EEE9]"
                              } flex items-center gap-2 px-2 py-2 text-base font-medium rounded-md`}
                              onClick={() => setIsSidebarOpen(false)}
                            >
                              {Icon && <Icon className="w-5 h-5 text-(--agro-green-dark)" />}
                              <span>{label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  {/* Authentication Links */}
                  <div className="flex flex-wrap items-center gap-4 p-4">
                    <SecondaryLink
                      href='/signin'
                      label="Login"
                    />

                    
                    <PrimaryLink
                      href='/signup'
                      label="Sign Up"
                    />
                  </div>

                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

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
            <div className="max-w-3xl p-4 mx-auto">
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
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (searchResults.length > 0) {
                        handleResultClick(searchResults[0].slug);
                      }
                    }
                  }}
                />
              </div>

              {/* Search Results Dropdown */}
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
                  {searchResults.length === 5 && (
                    <div className="px-4 py-2 text-xs text-center text-gray-500 border-t">
                      Showing 5 of {products.length}+ results
                    </div>                    
                  )}
                </div>
              )} */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}