
import React from "react";
import { SearchProvider } from "~/contextSearchContext";
import type { ReactNode } from "react";
import ProductHeader from "./component/ProductHeader";

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <div className="relative min-h-screen bg-(--primary-bg-light) font-openSans">
        {/* Fixed Header with Search */}
        <div className="relative z-50">
          <ProductHeader />
        </div>

        {/* Page Content */}
        <main>{children}</main>
      </div>
    </SearchProvider>
  );
}




