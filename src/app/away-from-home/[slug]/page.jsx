// app/away-from-home/[slug]/page.js (or .jsx / .ts / .tsx)

import ProductPageAFHClient from './ProductPageAFHClient'; // Import the client component
import { productData } from '@/products';

export async function generateStaticParams() {
  const paths = productData.map(product => ({
    slug: product.slug,
  }));

  return paths;
}

const ProductPageAFH = ({ params }) => {
  const { slug } = params;
  const product = productData.find((product) => product.slug === decodeURIComponent(slug));

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductPageAFHClient product={product} />;
};

export default ProductPageAFH;
