// app/away-from-home/[slug]/page.js (or .jsx / .ts / .tsx)

import ProductPageClient from './ProductPageClient'; // Import the client component
import { productData } from '@/products';

export async function generateStaticParams() {
  const paths = productData.map((product) => ({
    slug: product.slug,
  }));

  return paths;
}

const ProductPage = ({ params }) => {
  const { slug } = params;
  const product = productData.find((product) => product.slug === decodeURIComponent(slug));

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductPageClient product={product} />;
};

export default ProductPage;
