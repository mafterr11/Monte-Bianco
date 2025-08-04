"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CardProdus from "@/components/pages/catalog/CardProdus";
import { productData } from "@/products";
import { useSearchParams } from "next/navigation";

const AwayFromHomePage = () => {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("Toate produsele");

  useEffect(() => {
    const categoryFromUrl = searchParams.get("categoryAFH");
    if (categoryFromUrl) {
      const decodedCategory = decodeURIComponent(categoryFromUrl);
      setActiveCategory(decodedCategory);
    }
  }, [searchParams]);

  const handleCategoryChange = useCallback((cat) => {
    setActiveCategory(cat);
  }, []);

  const productsWithCategories = productData.filter(
    (product) => product.categoryAFH
  );

  const uniqueCategories = [
    "Toate produsele",
    ...new Set(productsWithCategories.map((p) => p.categoryAFH)),
  ];

  return (
    <section className="min-h-screen pt-24 md:mt-16">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-28 text-center">Away From Home</h2>

        <Tabs value={activeCategory} className="relative mb-24 xl:mb-48">
          <TabsList className="top-8 flex flex-col items-center justify-center gap-y-8 max-md:gap-y-48 xl:absolute xl:-left-12 2xl:-left-20">
            <div className="overflow mx-auto mb-12 grid h-full w-full grid-cols-1 gap-2 md:max-xl:w-1/2 lg:max-w-[940px]">
              {uniqueCategories.map((cat, index) => (
                <TabsTrigger
                  key={index}
                  value={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`w-[280px] border border-[#dadada] p-3 uppercase max-xl:mx-auto md:w-auto md:max-xl:w-[260px] ${
                    activeCategory === cat
                      ? "bg-accent font-semibold text-white-text shadow-button"
                      : ""
                  }`}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>

          {uniqueCategories.map((cat, index) => {
            const productsForThisTab =
              cat === "Toate produsele"
                ? productsWithCategories
                : productsWithCategories.filter((p) => p.categoryAFH === cat);

            return (
              <TabsContent key={index} value={cat}>
                <div className="mx-auto grid grid-cols-1 gap-10 text-lg max-xl:mt-[17rem] md:grid-cols-2 lg:max-w-[80%] xl:mt-24 xl:max-w-[90%] xl:grid-cols-3 xl:max-2xl:ml-40 2xl:w-full 2xl:max-w-[80%] 2xl:grid-cols-3">
                  {productsForThisTab.map((product, i) => (
                    <CardProdus
                      key={i}
                      product={product}
                      basePath="/away-from-home"
                    />
                  ))}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default AwayFromHomePage;
