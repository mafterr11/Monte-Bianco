import ProductPageAFHClient from './ProductPageAFHClient'; // Import the client component
import { productData } from '@/products';

export async function generateStaticParams() {
  const paths = productData.map((product) => ({
    slug: encodeURIComponent(product.slug),
  }));

  return paths;
}

const ProductPageAFH = ({ params }) => {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const product = productData.find((product) => product.slug === decodedSlug);

  if (!product) {
    return <p>Product not found</p>;
  }

  return <ProductPageAFHClient product={product} />;
};

export default ProductPageAFH;
