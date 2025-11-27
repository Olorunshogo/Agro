
// app/products/[slug]/Breadcrumbs.tsx
import Link from "next/link";

export default function Breadcrumbs({
  category,
  productName,
}: {
  category: string;
  productName: string;
}) {
  return (
    <nav className="flex gap-2 text-sm text-gray-600">
      <Link href="/products" className="hover:text-(--agro-green-dark)">Products</Link>
      <span>/</span>
      <Link
        href={`/products?category=${category}`}
        className="hover:text-(--agro-green-dark)"
      >
        {category}
      </Link>
      <span>/</span>
      <span className="font-semibold">{productName}</span>
    </nav>
  );
}


