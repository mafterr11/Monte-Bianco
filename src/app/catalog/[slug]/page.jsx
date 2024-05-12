"use client";
import { useParams } from "next/navigation";
import { productData } from "@/products";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ProductPage = () => {
  const { slug } = useParams();

  const product = productData.find(
    (product) => product.slug === decodeURIComponent(slug)
  );

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className='min-h-screen pt-24 pb-72 md:mt-16'>
      <h2 className='mb-40 max-md:mb-20 text-center mx-auto'>{product.name}</h2>
      {/* Product CONTAINER */}
      <div className='flex max-xl:flex-col xl:items-center justify-center gap-x-8 max-xl:gap-y-12'>
        {/* Left side */}
        <div className='flex max-xl:flex-col-reverse max-xl:gap-y-6 max-xl:items-center items-end justify-center gap-x-12'>
          {/* Color */}
          <div className='flex flex-col max-xl:flex-row max-xl:flex-wrap max-xl:container justify-center xl:-space-y-8 xl:hover:space-y-4 max-xl:-space-x-7 max-md:hover:space-x-2 md:max-xl:hover:space-x-4 group'>
            {/* Map through colors and create a circle for each */}
            {product.color.map((color, index) => (
              <div
                key={index}
                className='transition-all duration-500 ease-in-out flex flex-col items-center justify-center max-xl:justify-end max-xl:gap-y-1'
              >
                <div
                  className='w-9 h-9 md:w-12 md:h-12 rounded-full shadow-button border border-black-text/40'
                  style={{ backgroundColor: color.color }}
                />
                <div className='text-xs md:text-sm opacity-0 group-hover:opacity-100'>
                  {color.name}
                </div>
              </div>
            ))}
          </div>
          {/* Image with gradient background */}
          <div className='relative max-md:w-full max-md:mx-auto max-md:h-[400px] h-[500px] w-[500px]'>
            {" "}
            {/* Adjust width and height to match Image's dimensions */}
            <Image
              src={product.image}
              fill
              className='z-10 object-cover'
              alt={product.alt}
            />
            <div className='absolute bottom-0 left-0 w-full h-full bg-product-gradient z-0'></div>
          </div>
        </div>
        {/* Right side */}
        <div className='flex flex-col items-center gap-y-12'>
          {/* Details CONTAINER */}
          <div
            className={`grid ${
              product.grid ? "grid-cols-2" : "grid-cols-3"
            } max-md:grid-cols-2 gap-y-16 items-start `}
          >
            {/* Details Grid */}
            {product.details.map((details, index) => {
              return (
                // Container
                <div key={index}>
                  {/* Flex Details */}
                  <div className='flex flex-col items-center justify-center gap-y-3 px-4'>
                    {/* Image */}
                    <div>
                      <Image
                        src={details.icon}
                        width={112}
                        height={75}
                        alt={details.title}
                      />
                    </div>
                    {/* Title */}
                    <div className='text-center max-w-[250px]'>
                      {details.title}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Back button */}
          <div>
            <Link href='/catalog'>
              <Button variant='back' size='back'>
                Inapoi
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
