"use client";
import { useParams } from "next/navigation";
import { productData } from "@/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProductPageAFH = () => {
  const { slug } = useParams();

  const product = productData.find(
    (product) => product.slug === decodeURIComponent(slug)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="min-h-screen pt-24 pb-72 md:mt-16">
      <h2 className="mb-40 text-center mx-auto">{product.name}</h2>
      {/* Product CONTAINER */}
      <div className="flex items-end justify-center gap-x-8">
        {/* Color */}
        <div className="flex flex-col justify-center items-center space-y-6">
          {/* Map through colors and create a circle for each */}
          {product.color.map((color, index) => (
            <div
              key={index}
              className="w-12 h-12 rounded-full shadow-button border border-black-text/40"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        {/* Image with gradient background */}
        <div className="relative h-[500px] w-[500px]">
          {" "}
          {/* Adjust width and height to match Image's dimensions */}
          <Image
            src={product.image}
            fill
            objectFit="cover"
            className="z-10"
            alt={product.alt}
          />
          <div className="absolute bottom-0 left-0 w-full h-full bg-product-gradient z-0"></div>
        </div>
        {/* Details CONTAINER */}
        <div>
          {/* Back button */}
          <div>
            <Link href="/away-from-home">
              <Button variant="back" size="back">
                Inapoi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageAFH;
