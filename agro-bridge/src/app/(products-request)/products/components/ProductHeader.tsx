
"use client";

import { SearchInput } from "~/components/SearchInput";
import { useSearch } from "~/contextSearchContext";

import { BellDot, UserCheck } from "lucide-react";



export default function ProductHeader() {
  const { searchQuery, setSearchQuery } = useSearch();
  
  return (
    <>
      <div className="relative justify-center hidden w-full h-full sm:flex font-inter">
        <div className="w-full px-(--section-px) sm:px-(--section-px-sm) lg:px-(--section-px-lg) py-(--section-py) max-w-7xl h-full mx-auto">
          
          {/* Product Selection */}
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg font-semibold text-(--heading-colour)">Product</h2>
            
            {/* Searchable Input */}
            <div className="flex-1 max-w-2xl mx-8">
              <SearchInput
                label=""
                value={searchQuery}
                placeholder="Search by product name or category..." 
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            
            {/* Notification and Avatar */}
            <div className="flex items-center gap-2 *:hover:scale-105 *:hover:cursor-pointer *:duration-300 *:ease-in-out *:transition-all">
              <BellDot className="w-5 h-5 text-(--input-error-red)" />
              <UserCheck className="w-5 h-5 text-(--agro-green-light)" />
            </div>
          </div>
                    
          
        </div>
      </div>
    </>
  );
}
