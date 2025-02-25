"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { productData } from "@/products";

const ProductPageAFHClient = ({ product }) => {
  const router = useRouter();
  // Find the current product based on the slug

  const handleNextProduct = () => {
    const currentCategory = product.categoryAFH;
    const categoryProducts = productData.filter(
      (p) => p.categoryAFH === currentCategory,
    );
    const currentProductIndex = categoryProducts.findIndex(
      (p) => p.slug === product.slug,
    );
    const nextProductIndex =
      (currentProductIndex + 1) % categoryProducts.length;
    const nextProduct = categoryProducts[nextProductIndex];
    router.push(`/away-from-home/${encodeURIComponent(nextProduct.slug)}`);
  };

  return (
    <div className="min-h-screen pb-72 pt-24 max-md:pt-24 md:mt-16">
      <h2 className="mx-auto text-center underline decoration-accent decoration-wavy underline-offset-4 max-md:mb-20 xl:mb-24 2xl:mb-32">
        {product.name}{" "}
      </h2>
      {/* Product CONTAINER */}
      <div className="flex justify-center gap-x-8 max-xl:flex-col max-xl:gap-y-12 xl:items-end md:container">
        {/* Left side */}
        <div className="relative flex items-end justify-center gap-x-12 max-xl:flex-col-reverse max-xl:items-center max-xl:gap-y-6">
          {/* Color */}
          <div className="group flex flex-col justify-center max-xl:container max-xl:flex-row max-xl:flex-wrap max-xl:-space-x-6 max-md:hover:space-x-2 md:max-xl:hover:space-x-4 xl:absolute xl:-left-24 xl:bottom-0 xl:-space-y-8 xl:hover:space-y-4">
            {/* Map through colors and create a circle for each */}
            {product.color.map((color, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-y-1 transition-all duration-500 ease-in-out max-xl:justify-end"
              >
                <div
                  className="h-9 w-9 rounded-full border border-black-text/40 shadow-button md:h-12 md:w-12"
                  style={{ backgroundColor: color.color }}
                />
                <div className="text-xs opacity-0 group-hover:opacity-100 md:text-sm transition-all duration-500 ease-in-out">
                  {color.name}
                </div>
              </div>
            ))}
          </div>
          {/* Image with gradient background */}
          <div className="relative h-[500px] w-[500px] max-md:mx-auto max-md:h-[400px] max-md:w-full xl:h-[450px] xl:w-[450px]">
            {" "}
            {/* Adjust width and height to match Image's dimensions */}
            <Image
              src={product.image}
              fill
              className="z-10 object-cover"
              alt={product.alt}
              unoptimized
            />
            <div className="absolute bottom-0 z-0 h-[200px] w-full bg-linear-to-t from-accent/30 via-accent/10 to-body-accent/20" />
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col items-center gap-y-12">
          {/* Details CONTAINER */}
          <div
            className={`grid ${
              product.grid ? product.grid : "grid-cols-3"
            } items-start gap-y-16 max-md:grid-cols-2 `}
          >
            {/* Details Grid */}
            {product.details.map((details, index) => {
              if (details.title === "Plastic") {
                return (
                  <div key={index}>
                    <h2>{details.title}</h2>
                  </div>
                );
              }
              return (
                // Container
                <div key={index}>
                  {/* Flex Details */}
                  <div className="flex flex-col items-center justify-center gap-y-3 px-4">
                    {/* Image */}
                    <div className="relative h-[50px] w-[112px]">
                      <Image
                        src={details.icon}
                        fill
                        priority
                        alt={details.title}
                        unoptimized
                      />
                    </div>
                    {/* Title */}
                    <div className="max-w-[250px] text-center">
                      {details.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Back button */}
          <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row">
            <Link href="/away-from-home">
              <Button
                variant="back"
                size="back"
                className="flex min-w-[240px] items-center justify-center gap-x-2 xl:max-2xl:min-w-[220px]"
              >
                Catalog
              </Button>
            </Link>

            <Button
              onClick={handleNextProduct}
              variant="back"
              size="back"
              className="flex min-w-[240px] items-center justify-center gap-x-2 bg-accent text-white hover:bg-accent/85  xl:max-2xl:min-w-[220px]"
            >
              Înainte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageAFHClient;
