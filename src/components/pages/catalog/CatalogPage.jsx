"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CardProdus from "@/components/pages/catalog/CardProdus";
import { productData } from "@/products";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import DropdownMenu from "./DropdownMenu";

const CatalogPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeFilter, setActiveFilter] = useState({
    type: "category",
    value: "Toate produsele",
  });

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    const brandFromUrl = searchParams.get("brand");
    if (categoryFromUrl) {
      const decodedCategory = decodeURIComponent(categoryFromUrl);
      setActiveFilter({ type: "category", value: decodedCategory });
    } else if (brandFromUrl) {
      const decodedBrand = decodeURIComponent(brandFromUrl);
      setActiveFilter({ type: "brand", value: decodedBrand });
    }
  }, [searchParams]);

  const handleCategoryChange = useCallback((cat) => {
    setActiveFilter({ type: "category", value: cat });
    const encoded = encodeURIComponent(cat);
    router.push(`/catalog?category=${encoded}`);
  }, [router]);

  const handleBrandChange = useCallback((br) => {
    setActiveFilter({ type: "brand", value: br });
    const encoded = encodeURIComponent(br);
    router.push(`/catalog?brand=${encoded}`);
  }, [router]);

  const productsWithBrands = productData.filter((product) => product.brand);
  const productsWithCategories = productData.filter((product) => product.category);

  const uniqueCategories = [
    "Toate produsele",
    ...new Set(productsWithCategories.map((p) => p.category)),
  ];
  const uniqueBrands = [...new Set(productsWithBrands.map((p) => p.brand))];

  return (
    <section className="min-h-screen pt-24 md:mt-16">
      <div className="container mx-auto">
        <h2 className="mx-auto text-center max-md:mb-24 md:mb-36 xl:mb-56">
          Gama de produse <span className="text-accent">Monte Bianco</span>
        </h2>

        <Tabs
          value={activeFilter.type === "category" ? activeFilter.value : ""}
          className="mb-24 xl:mb-48"
        >
          <TabsList className="mb-24 flex flex-col items-center justify-center gap-y-8 max-md:mb-40 max-md:hidden max-md:gap-y-48 ">
            <div className="mx-auto mb-20 grid h-full w-full grid-cols-1 gap-2 max-md:mb-32 md:grid-cols-3 lg:max-w-[940px]">
              {uniqueCategories.map((cat, index) => (
                <TabsTrigger
                  key={index}
                  value={cat}
                  className={`w-[300px] border border-[#dadada] p-3 uppercase max-md:mx-auto md:w-auto ${
                    activeFilter.type === "category" && activeFilter.value === cat
                      ? "bg-accent font-semibold text-white-text shadow-button"
                      : "hover:bg-accent/10"
                  }`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </div>
            <div className="mx-auto grid h-full w-full grid-cols-1 gap-2 max-md:mt-6 md:grid-cols-5 lg:max-w-[800px]">
              {uniqueBrands.map((br, index) => (
                <TabsTrigger
                  key={index}
                  value={br}
                  className={`relative z-20 w-[300px] border border-[#dadada] uppercase max-md:mx-auto md:w-auto ${
                    activeFilter.type === "brand" && activeFilter.value === br
                      ? "bg-linear-to-t from-accent/35 via-accent/10 to-body-accent/10 shadow-button"
                      : "hover:bg-accent/10"
                  }`}
                  onClick={() => handleBrandChange(br)}
                >
                  <div className="absolute inset-0 z-30" />
                  {br && (
                    <Image
                      src={br}
                      width={120}
                      height={60}
                      alt={br}
                      unoptimized
                    />
                  )}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>

          {uniqueCategories.map((cat, index) => (
            <TabsContent key={index} value={cat}>
              <div className="mx-auto mt-20 grid grid-cols-1 gap-10 text-lg md:mt-36 md:grid-cols-2 lg:max-w-[80%] xl:max-w-[90%] xl:mt-44 xl:grid-cols-3 2xl:max-w-[80%]">
                {productData
                  .filter(
                    (product) =>
                      cat === "Toate produsele" || product.category === cat
                  )
                  .map((product, i) => (
                    <CardProdus key={i} product={product} basePath="/catalog" />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <DropdownMenu containerStyles="-top-[14rem] right-1 md:hidden" />
    </section>
  );
};

export default CatalogPage;
