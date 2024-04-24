"use client"
import { useParams } from "next/navigation";
import { productData } from "@/products";

const ProductPage = () => {
  const { slug } = useParams();

  const product = productData.find((product) => product.slug === decodeURIComponent(slug));

  return (
    <div className="min-h-screen pt-24 md:mt-16">
      <h2 className="mb-56 text-center mx-auto">
        {product.name}
      </h2>
    </div>
  );
};

export default ProductPage;
