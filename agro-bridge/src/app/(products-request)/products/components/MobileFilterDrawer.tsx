"use client";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "~/components/ui/dropdown-menu";
import { Slider } from "~/components/ui/slider";
import { ChevronDown, RotateCcw, Filter } from "lucide-react";
import { useSearch } from "~/contextSearch";

const CATEGORIES = ["Grains", "Fruits", "Seeds", "Spices", "Nuts", "Oils"] as const;
const COUNTRIES = ["Nigeria", "Ghana", "Ivory Coast", "Benin", "Togo"] as const;
const STOCK_STATUS = ["In Stock", "Coming Soon"] as const;

export default function MobileFilterDropdowns() {
  const {
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

  // Helper to get selected count
  const getSelectedCount = (arr: any[]) => (arr.length > 0 ? ` (${arr.length})` : "");

  return (
    <div className="flex flex-wrap gap-3 lg:hidden">
      {/* Category Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Category{getSelectedCount(categories)}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-4" align="start">
          <DropdownMenuLabel>Product Category</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="space-y-2 overflow-y-auto max-h-60">
            {CATEGORIES.map((cat) => (
              <DropdownMenuCheckboxItem
                key={cat}
                checked={categories.includes(cat)}
                onCheckedChange={(checked) => {
                  setCategories(
                    checked
                      ? [...categories, cat]
                      : categories.filter((c) => c !== cat)
                  );
                }}
              >
                {cat}
              </DropdownMenuCheckboxItem>
            ))}
          </div>
          <DropdownMenuSeparator />
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCategories([])}
              className="flex-1"
            >
              <RotateCcw className="w-3 h-3 mr-1" /> Reset
            </Button>
            <Button size="sm" className="flex-1 bg-(--agro-green-dark)">
              Apply
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Country Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Country{getSelectedCount(countries)}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-4" align="start">
          <DropdownMenuLabel>Country of Origin</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="space-y-2 overflow-y-auto max-h-60">
            {COUNTRIES.map((country) => (
              <DropdownMenuCheckboxItem
                key={country}
                checked={countries.includes(country)}
                onCheckedChange={(checked) => {
                  setCountries(
                    checked
                      ? [...countries, country]
                      : countries.filter((c) => c !== country)
                  );
                }}
              >
                {country}
              </DropdownMenuCheckboxItem>
            ))}
          </div>
          <DropdownMenuSeparator />
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setCountries([])}
              className="flex-1"
            >
              <RotateCcw className="w-3 h-3 mr-1" /> Reset
            </Button>
            <Button size="sm" className="flex-1 bg-(--agro-green-dark)">
              Apply
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Price Range Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Price Range
            {priceRange[0] !== 100 || priceRange[1] !== 10000 ? ` ($${priceRange[0]}-$${priceRange[1]})` : ""}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4 w-72" align="start">
          <DropdownMenuLabel>Price Range</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              min={100}
              max={10000}
              step={100}
              className="mt-4"
            />
            <div className="flex justify-between text-sm font-medium">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          <DropdownMenuSeparator />
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setPriceRange([100, 10000])}
              className="flex-1"
            >
              <RotateCcw className="w-3 h-3 mr-1" /> Reset
            </Button>
            <Button size="sm" className="flex-1 bg-(--agro-green-dark)">
              Apply
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Availability Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex items-center gap-2">
            Availability{getSelectedCount(stockStatus)}
            <ChevronDown className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-4" align="start">
          <DropdownMenuLabel>Availability</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="space-y-2">
            {STOCK_STATUS.map((status) => (
              <DropdownMenuCheckboxItem
                key={status}
                checked={stockStatus.includes(status)}
                onCheckedChange={(checked) => {
                  setStockStatus(
                    checked
                      ? [...stockStatus, status]
                      : stockStatus.filter((s) => s !== status)
                  );
                }}
              >
                {status}
              </DropdownMenuCheckboxItem>
            ))}
          </div>
          <DropdownMenuSeparator />
          <div className="flex gap-2 pt-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => setStockStatus([])}
              className="flex-1"
            >
              <RotateCcw className="w-3 h-3 mr-1" /> Reset
            </Button>
            <Button size="sm" className="flex-1 bg-(--agro-green-dark)">
              Apply
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Global Reset All */}
      <Button
        variant="outline"
        size="sm"
        onClick={resetFilters}
        className="flex items-center gap-2"
      >
        <RotateCcw className="w-4 h-4" />
        Clear All
      </Button>
    </div>
  );
}