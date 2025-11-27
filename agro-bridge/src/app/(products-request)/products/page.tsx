
"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { products } from "~/store/products";
// import { useProducts } from "~/store/useProduct";
import ProductCard from "~/components/ProductCard";
import type { ProductCardInfo } from "~/app/types/types";
import { CheckboxInput } from "~/components/input-fields/CheckboxInput";
import { Button } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";
import { RotateCcw } from "lucide-react";

const CATEGORIES = ["Grains", "Fruits", "Seeds", "Spices"] as const;
const COUNTRIES = ["Nigeria", "Ghana", "Ivory Coast", "Benin", "Togo"] as const;
const STOCK_STATUS = ["In Stock", "Coming Soon"] as const;

export default function ProductsPage() {
  const router = useRouter();
  
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([700, 10000]);
  const [selectedStock, setSelectedStock] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allProducts = products;

  // Available filters
  const availableCategories = useMemo(() => {
    return Array.from(new Set(allProducts.map(p => p.category)));
  }, [allProducts]);

  const availableCountries = useMemo(() => {
    const set = new Set<string>();
    allProducts.forEach(p => {
      COUNTRIES.forEach(country => {
        if (p.location.toLowerCase().includes(country.toLowerCase())) {
          set.add(country);
        }
      });
    });
    return Array.from(set);
  }, [allProducts]);
  
  // Filter products
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      // Search query
      if (searchQuery) {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              product.category.toLowerCase().includes(searchQuery.toLowerCase());
        if (!matchesSearch) return false;
      }
      
      // Category
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category))
        return false;

      // Country
      if (selectedCountries.length > 0) {
        const matchesCountry = selectedCountries.some(c =>
          product.location.toLowerCase().includes(c.toLowerCase())
        );
        if (!matchesCountry) return false;
      }

      // Price Range
      if (product.price < priceRange[0] || product.price > priceRange[1])
        return false;

      // Stock Status
      if (selectedStock.length > 0) {
        const status = product.inStock ? "In Stock" : "Coming Soon";
        if (!selectedStock.includes(status)) return false;
      }

      return true;
    });
  }, [allProducts, selectedCategories, selectedCountries, priceRange, selectedStock]);

  // Map filtered products to card info
  const productCardInfo: ProductCardInfo[] = filteredProducts.map(p => ({
    slug: p.slug,
    name: p.name,
    price: p.price,
    location: p.location,
    inStock: p.inStock,
    imageUrl: p.imageUrl,
    imageAlt: p.imageAlt,
  }));

  function resetFilters() {
    setSelectedCategories([]);
    setSelectedCountries([]);
    setPriceRange([100, 10000]);
    setSelectedStock([]);
    setSearchQuery("");
  }
   
  return (
    <div className="relative w-full h-full min-h-screen py-12 bg-(--primary-bg-light)">
      <div className="px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full h-full mx-auto max-w-7xl">

        <div className="grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-8 w-full max-w-7xl mx-auto h-full">
          
          {/* Sidebar Filters */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] sm:flex sm:flex-col gap-6">

            {/* Product Categories */}
            <div className="flex flex-col gap-4 text-sm">
              <h2 className="font-semibold text-(--heading-colour)">
                Product Category
              </h2>

              {/* Countries Checkbox */}
              <div className="flex flex-col gap-2 text-(--text-colour)">
                {CATEGORIES.map(category => {
                  const isAvailable = availableCategories.includes(category);
                  return (
                    <CheckboxInput
                      key={category}
                      label={category}
                      checked={selectedCategories.includes(category)}
                      disabled={!isAvailable && !selectedCategories.includes(category)}
                      onCheckedChange={(checked) => {
                        setSelectedCategories(prev =>
                          checked ? [...prev, category] : prev.filter(c => c !== category)
                        );
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Country of Origin */}
            <div className="flex flex-col gap-4 text-sm">
              <h2 className="font-semibold text-(--heading-colour)">
                Country of Origin
              </h2>
                
              {/* Countries Checkbox */}
              <div className="flex flex-col gap-2">
                {COUNTRIES.map(country => {
                  const isAvailable = availableCountries.includes(country);
                  return (
                    <CheckboxInput
                      key={country}
                      label={country}
                      checked={selectedCountries.includes(country)}
                      disabled={!isAvailable && !selectedCountries.includes(country)}
                      onCheckedChange={(checked) => {
                        setSelectedCountries(prev =>
                          checked ? [...prev, country] : prev.filter(c => c !== country)
                        );
                      }}
                    />
                  );
                })}
              </div>
                
            </div>

            {/* Price Range Slider */}
            <div className="flex flex-col gap-4 text-sm">
              <h3 className="font-medium text-sm text-(--heading-colour)">Growth Score range</h3>
              <div className="flex flex-col gap-2">
                <Slider
                  value={priceRange}
                  onValueChange={(value) => setPriceRange(value as [number, number])}
                  min={100}
                  max={10000}
                  step={100}
                  className="w-full"
                />
                <div className="flex justify-between text-(--text-colour)">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex flex-col gap-4 text-sm">
              <h2 className="font-semibold text-(--heading-colour)">Availability</h2>
                
              {/* Countries Checkbox */}
              <div className="flex flex-col gap-2">
                {STOCK_STATUS.map(status => (
                  <CheckboxInput
                    key={status}
                    label={status}
                    checked={selectedStock.includes(status)}
                    onCheckedChange={(checked) => {
                      setSelectedStock(prev =>
                        checked ? [...prev, status] : prev.filter(s => s !== status)
                      );
                    }}
                  />
                ))}
              </div>
                
            </div>

            {/* Apply & Reset Buttons */}
            <div className="flex gap-3 mt-10">
              <Button
                variant="outline"
                onClick={resetFilters}
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>

          </div>

          {/* Products Grid */}
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
              <p className="text-(--text-colour)">
                {filteredProducts.length} 
                &nbsp;
                product{filteredProducts.length !== 0 && filteredProducts.length !== 1 ? 's' : ''} 
                &nbsp;
                found
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col gap-4 text-center">
                <p className="text-lg lg:text-xl text-(--text-colour)">No products match your filters.</p>
                <Button 
                  onClick={resetFilters} 
                  variant="link"
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-8 grid-cols-[repeat(auto-fill,minmax(240px,1fr))]">
                {productCardInfo.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>
      
      </div>
    </div>
  );
}
