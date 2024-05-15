"use client";
import { useParams, useRouter} from "next/navigation";
import { productData } from "@/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Underline } from "@/components/Underline";
import { Undo2 } from "lucide-react";

const ProductPage = () => {
  // const { slug } = useParams();

  // const product = productData.find(
  //   (product) => product.slug === decodeURIComponent(slug)
  // );
  const router = useRouter();
  const { slug } = useParams();
  // Find the current product based on the slug
  const productIndex = productData.findIndex(
    (product) => product.slug === decodeURIComponent(slug)
  );

  const product = productData[productIndex];

  const handleNextProduct = () => {
    const currentCategory = product.category;
    const categoryProducts = productData.filter(
      (p) => p.category === currentCategory
    );
    const currentProductIndex = categoryProducts.findIndex(
      (p) => p.slug === product.slug
    );
    const nextProductIndex =
      (currentProductIndex + 1) % categoryProducts.length;
    const nextProduct = categoryProducts[nextProductIndex];
    router.push(`/catalog/${encodeURIComponent(nextProduct.slug)}`);
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="min-h-screen pt-24 pb-72 md:mt-16">
      <h2 className="mb-40 max-md:mb-20 text-center mx-auto">
        <span className="relative">
          {product.name}{" "}
          <Underline.underline className="absolute inset-x-0 -bottom-6 md:-bottom-10" />
        </span>
      </h2>
      {/* Product CONTAINER */}
      <div className="flex max-xl:flex-col xl:items-end justify-center gap-x-8 max-xl:gap-y-12">
        {/* Left side */}
        <div className="relative flex max-xl:flex-col-reverse max-xl:gap-y-6 max-xl:items-center items-end justify-center gap-x-12">
          {/* Color */}
          <div className="xl:absolute xl:-left-24 xl:bottom-0 flex flex-col max-xl:flex-row max-xl:flex-wrap max-xl:container justify-center xl:-space-y-8 xl:hover:space-y-4 max-xl:-space-x-6 max-md:hover:space-x-2 md:max-xl:hover:space-x-4 group">
            {/* Map through colors and create a circle for each */}
            {product.color.map((color, index) => (
              <div
                key={index}
                className="transition-all duration-500 ease-in-out flex flex-col items-center justify-center max-xl:justify-end gap-y-1"
              >
                <div
                  className="w-9 h-9 md:w-12 md:h-12 rounded-full shadow-button border border-black-text/40"
                  style={{ backgroundColor: color.color }}
                />
                <div className="text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
                  {color.name}
                </div>
              </div>
            ))}
          </div>
          {/* Image with gradient background */}
          <div className="relative max-md:w-full max-md:mx-auto max-md:h-[400px] h-[500px] w-[500px]">
            {" "}
            {/* Adjust width and height to match Image's dimensions */}
            <Image
              src={product.image}
              fill
              priority
              className="z-10 object-cover"
              alt={product.alt}
            />
            <div className="absolute bottom-0 left-0 w-full h-full bg-product-gradient z-0"></div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col items-center gap-y-12">
          {/* Details CONTAINER */}
          <div
            className={`grid ${
              product.grid !== "grid-cols-4" ? product.grid : "grid-cols-4"
            } max-md:grid-cols-2 gap-y-16 items-start`}
          >
            {/* Details Grid */}
            {product.details.map((details, index) => {
              return (
                // Container
                <div key={index}>
                  {/* Flex Details */}
                  <div className="flex flex-col items-center justify-center gap-y-3 px-4">
                    {/* Image */}
                    <>
                      <Image
                        src={details.icon}
                        width={112}
                        height={75}
                        priority
                        alt={details.title}
                      />
                    </>
                    {/* Title */}
                    <div className="text-center max-w-[250px]">
                      {details.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Back button */}
          <div className="flex items-center flex-col-reverse md:flex-row justify-center gap-8">
            <Link href="/catalog">
              <Button
                variant="back"
                size="back"
                className="flex items-center justify-center gap-x-2 min-w-[240px]"
              >
                Catalog
              </Button>
            </Link>

            <Button
              onClick={handleNextProduct}
              variant="back"
              size="back"
              className="flex items-center justify-center gap-x-2 min-w-[240px] bg-accent text-white hover:bg-accent/85"
            >
              Înainte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
