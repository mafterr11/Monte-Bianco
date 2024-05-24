"use client";
import { useRouter } from "next/navigation";
import { productData } from "@/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";

const ProductPageClient = ({ product }) => {
  const router = useRouter();
  // Auto animate colors (add conditions to the colors / text)
  // const [hoverAnimationTriggered, setHoverAnimationTriggered] = useState(false);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setHoverAnimationTriggered(true);
  //   }, 1000);
  // });

  const handleNextProduct = () => {
    const currentCategory = product.category;
    const categoryProducts = productData.filter(
      (p) => p.category === currentCategory,
    );
    const currentProductIndex = categoryProducts.findIndex(
      (p) => p.slug === product.slug,
    );
    const nextProductIndex =
      (currentProductIndex + 1) % categoryProducts.length;
    const nextProduct = categoryProducts[nextProductIndex];
    router.push(`/catalog/${encodeURIComponent(nextProduct.slug)}`);
  };

  return (
    <div className="min-h-screen pb-72 pt-24 md:mt-16">
      <h2 className="mx-auto mb-40 text-center underline decoration-accent decoration-wavy underline-offset-4 max-md:mb-20">
        {product.name}{" "}
      </h2>
      {/* Product CONTAINER */}
      <div className="flex justify-center gap-x-8 max-xl:flex-col max-xl:gap-y-12 xl:items-end">
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
                <div className="text-xs opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 md:text-sm">
                  {color.name}
                </div>
              </div>
            ))}
          </div>
          {/* Image with gradient background */}
          <div className="relative h-[500px] w-[500px] max-md:mx-auto max-md:h-[400px] max-md:w-full">
            {" "}
            {/* Adjust width and height to match Image's dimensions */}
            <Image
              src={product.image}
              fill
              priority
              className="z-10 object-cover"
              alt={product.alt}
              unoptimized
            />
            <div className="absolute bottom-0 z-0 h-[200px] w-full bg-gradient-to-t from-accent/30 via-accent/10 to-body-accent/20" />
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col items-center gap-y-12">
          {/* Details CONTAINER */}
          <div
            className={`grid ${
              product.grid ? product.grid : "grid-cols-4"
            } items-start gap-y-16 max-md:grid-cols-2`}
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
            <Link href="/catalog">
              <Button
                variant="back"
                size="back"
                className="flex min-w-[240px] items-center justify-center gap-x-2"
              >
                Catalog
              </Button>
            </Link>

            <Button
              onClick={handleNextProduct}
              variant="back"
              size="back"
              className="flex min-w-[240px] items-center justify-center gap-x-2 bg-accent text-white hover:bg-accent/85"
            >
              Înainte
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageClient;
