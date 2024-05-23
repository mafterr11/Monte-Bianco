import ProductPageClient from "./ProductPageClient"; // Import the client component
import { productData } from "@/products";

export async function generateStaticParams() {
  const paths = productData.map((product) => ({
    slug: encodeURIComponent(product.slug),
  }));

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
