
"use client";

import { useMemo } from "react";
import { products } from "~/store/products";
// import { useProducts } from "~/store/useProduct";
import ProductCard from "~/components/ProductCard";
import { CheckboxInput } from "~/components/input-fields/CheckboxInput";
import { Button } from "~/components/ui/button";
import { Slider } from "~/components/ui/slider";
import MobileFilterDrawer from "./components/MobileFilterDrawer";
import { RotateCcw } from "lucide-react";
import { useSearch } from "~/contextSearch";

const CATEGORIES = ["Grains", "Fruits", "Seeds", "Spices"] as const;
const COUNTRIES = ["Nigeria", "Ghana", "Ivory Coast", "Benin", "Togo"] as const;
const STOCK_STATUS = ["In Stock", "Coming Soon"] as const;

export default function ProductsPage() {
  const {
    searchQuery,
    categories,
    countries,
    priceRange,
    stockStatus,
    setCategories,
    setCountries,
    setPriceRange,
    setStockStatus,
    resetFilters,
  } = useSearch();

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

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (searchQuery) {
        const matches = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        product.category.toLowerCase().includes(searchQuery.toLowerCase());
        if (!matches) return false;
      }
      if (categories.length && !categories.includes(product.category as any)) return false;
      if (countries.length && !countries.some(c => product.location.includes(c))) return false;
      if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
      if (stockStatus.length) {
        const status = product.inStock ? "In Stock" : "Coming Soon";
        if (!stockStatus.includes(status as any)) return false;
      }
      return true;
    });
  }, [searchQuery, categories, countries, priceRange, stockStatus]);
   
  return (
    <div className="relative w-full h-full min-h-screen py-12 bg-(--primary-bg-light)">
      <div className="flex flex-col gap-6 px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) w-full h-full mx-auto max-w-7xl">
        
        {/* Mobile Filter Trigger */}
        <div className="flex mx-auto lg:hidden">
          <MobileFilterDrawer />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[190px_1fr] gap-8 w-full max-w-7xl mx-auto h-full">
          
          {/* Sidebar Desktop Filters */}
          <aside className="hidden gap-6 lg:flex lg:flex-col">

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
                      checked={categories.includes(category)}
                      disabled={!isAvailable && !categories.includes(category)}
                      onCheckedChange={(checked) => {
                        setCategories(
                          checked
                            ? [...categories, category]
                            : categories.filter(c => c !== category)
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
                      checked={countries.includes(country)}
                      disabled={!isAvailable && !countries.includes(country)}
                      onCheckedChange={(checked) => {
                        setCountries(
                          checked
                            ? [...countries, country]
                            : countries.filter(c => c !== country)
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
                    checked={stockStatus.includes(status)}
                    onCheckedChange={(checked) => {
                      setStockStatus(
                        checked
                          ? [...stockStatus, status]
                          : stockStatus.filter(s => s !== status)
                      );
                    }}
                  />
                ))}
              </div>
                
            </div>

            {/* Apply & Reset Buttons */}
            <div className="flex gap-3 mt-10">
              <Button
                variant="default"
                onClick={resetFilters}
                className="flex items-center gap-2 p-2 rounded-md hover:cursor-pointer text-white bg-(--agro-green-dark) hover:bg-(--agro-green-light) duration-300 ease-in-out transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                Apply
              </Button>
              
              <Button
                variant="outline"
                onClick={resetFilters}
                className="flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>
            </div>

          </aside>

          {/* Products Grid */}
          <div className="flex flex-col gap-8">

            <div className="flex flex-col gap-6 text-center ">
              <h1 className="text-4xl font-bold">Our Products</h1>
              <p className="text-(--text-colour)">{filteredProducts.length} products found</p>
            </div>          
            

            {filteredProducts.length === 0 ? (
              <div className="py-12 text-center">
                <p className="text-xl">No products match your filters.</p>
                <Button 
                  variant="link"
                  onClick={resetFilters}
                >
                  Clear all filters
                </Button>
              </div>
            ) : (
              <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(230px,1fr))]">
                {filteredProducts.map(p => (
                  <ProductCard
                    key={p.slug}
                    product={{
                      slug: p.slug,
                      name: p.name,
                      price: p.price,
                      location: p.location,
                      inStock: p.inStock,
                      imageUrl: p.imageUrl,
                      imageAlt: p.imageAlt,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

        </div>
      
      </div>
    </div>
  );
}
