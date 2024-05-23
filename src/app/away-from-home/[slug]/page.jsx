import ProductPageClient from './ProductPageAFHClient';
import { productData } from '@/products';

export async function generateStaticParams() {
  const paths = productData.map((product) => ({
    slug: encodeURIComponent(product.slug),
  }));

  console.log('Generated paths:', paths); // Debugging
  return paths;
}

const ProductPage = ({ params }) => {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const product = productData.find((product) => product.slug === decodedSlug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductPageClient product={product} />;
};

export default ProductPage;
