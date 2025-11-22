

// export async function generateMetadata({ params }: { params: { slug: string } }) {
//   const product = await getProduct(params.slug);
//   if (!product) notFound();

//   return {
//     title: `${product.name} | Nigeria Export`,
//     description: product.seoDescription,
//     openGraph: {
//       url: `/products/${params.slug}`,
//       title: `${product.name} - AgroBridge`,
//     },
//   };
// }

export default function ProductSlugPage() {
  return (
    <div>ProductSlugPage</div>
  )
}



