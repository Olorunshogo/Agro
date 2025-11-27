
import { SearchProvider } from "~/contextSearch";
import ProductHeader from "./products/components/ProductHeader";
import { Suspense, type ReactNode } from "react";

export const dynamic = "force-dynamic";


export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <div className="relative min-h-screen bg-(--primary-bg-light) font-openSans">
        {/* Fixed Header with Search */}
        <Suspense fallback={null}>
          <ProductHeader />
        </Suspense>

        {/* Page Content */}
        <main>{children}</main>
      </div>
    </SearchProvider>
  );
}




