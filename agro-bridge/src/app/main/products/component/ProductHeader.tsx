
"use client";

import { SearchInput } from "~/components/SearchInput";
import { useSearch } from "~/contextSearchContext";

import { PersonStanding, AlertTriangle } from "lucide-react";



export default function ProductHeader() {
  const { searchQuery, setSearchQuery } = useSearch();
  
  return (
    <>
      <div className="flex items-center justify-center w-full h-full bg-gray-50 font-inter">
        <div className="flex flex-col w-full px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) sm:py-(--section-py-sm) py-(--section-py-lg) max-w-7xl h-full mx-auto">
          
          {/* Product Selection */}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg font-semibold text-(--heading-colour)">Product</h2>
            
            {/* Searchable Input */}
            <div className="flex-1 max-w-2xl mx-8">
              <SearchInput
                value={searchQuery}
                placeholder="Search by product name or category..." 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* Notification and Avatar */}
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <PersonStanding className="w-5 h-5" />
            </div>
          </div>
                    
          
        </div>
      </div>
    </>
  );
}
