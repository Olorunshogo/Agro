
"use client";

import { useState, useMemo } from "react";
import { products } from "~/store/products";
// import { useProducts } from "~/store/useProduct";
import ProductCard from "~/components/ProductCard";
import type { ProductCardInfo } from "~/app/types/types";
import { CheckboxInput } from "~/components/CheckboxInput";
import { Button } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";
import { RotateCcw } from "lucide-react";

const allProducts = products;

const CATEGORIES = ["Grains", "Fruits", "Seeds", "Spices"] as const;
const COUNTRIES = ["Nigeria", "Ghana", "Ivory Coast", "Benin", "Togo"] as const;
const STOCK_STATUS = ["In Stock", "Coming Soon"] as const;

export default function ProductsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([700, 10000]);
  const [selectedStock, setSelectedStock] = useState<string[]>([]);

  // Extract unique countries from products (fallback to Nigeria if none)
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
  
  // Filter logic
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category))
        return false;

      if (selectedCountries.length > 0) {
        const matchesCountry = selectedCountries.some(c =>
          product.location.toLowerCase().includes(c.toLowerCase())
        );
        if (!matchesCountry) return false;
      }

      if (product.price < priceRange[0] || product.price > priceRange[1])
        return false;

      if (selectedStock.length > 0) {
        const status = product.inStock ? "In Stock" : "Coming Soon";
        if (!selectedStock.includes(status)) return false;
      }

      return true;
    });
  }, [allProducts, selectedCategories, selectedCountries, priceRange, selectedStock]);

  // Map filtered products to card info
  const productCardInfo: ProductCardInfo[] = filteredProducts.map(
    ({ slug, name, price, location, inStock, imageUrl, imageAlt }) => ({
      slug, name, price, location, inStock, imageUrl, imageAlt
    })
  );

  function resetFilters() {
    setSelectedCategories([]);
    setSelectedCountries([]);
    setPriceRange([100, 10000]);
    setSelectedStock([]);
  }
   
  return (
    <div className="relative w-full h-full min-h-screen py-12">
      <div className="px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-(--section-py-sm) py-(--section-py-lg) w-full h-full mx-auto max-w-7xl">

        <div className="grid grid-cols-1 md:grid-cols-[190px_1fr] gap-8 w-full max-w-7xl mx-auto h-full">
          
          {/* Sidebar Filters */}
          <div className="flex flex-col w-full gap-6">

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
          <div className="flex flex-col gap-8">
              <div className="text-center">
                <h1 className="text-4xl font-bold">Our Products</h1>
                <p className="mt-2 text-gray-600">
                  {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
                </p>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="text-xl text-gray-500">No products match your filters.</p>
                  <Button onClick={resetFilters} variant="link" className="mt-4">
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-8 bg-red-900 sm:grid-cols-2 xl:grid-cols-3">
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
