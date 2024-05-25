"use client";
import React, { useState, useCallback, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CardProdus from "@/components/pages/catalog/CardProdus";
import { productData } from "@/products";
import { useSearchParams } from "next/navigation";

const AwayFromHomePage = () => {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState({
    type: "categoryAFH",
    value: "Toate produsele",
  });

  useEffect(() => {
    const categoryFromUrl = searchParams.get("categoryAFH");
    if (categoryFromUrl) {
      const decodedCategory = decodeURIComponent(categoryFromUrl);
      console.log("Decoded Category:", decodedCategory); // Ensure this logs the expected value
      setActiveFilter({ type: "categoryAFH", value: decodedCategory });
    }
  }, [searchParams]);

  const handleCategoryChange = useCallback((cat) => {
    setActiveFilter({ type: "categoryAFH", value: cat });
  }, []);

  // Filter products that have categories defined
  const productsWithCategories = productData.filter(
    (product) => product.categoryAFH,
  );

  const filteredProducts = productsWithCategories.filter(
    (product) =>
      activeFilter.value === "Toate produsele" ||
      product.categoryAFH === activeFilter.value,
  );

  const uniqueCategories = [
    "Toate produsele",
    ...new Set(productsWithCategories.map((p) => p.categoryAFH)),
  ];

  return (
    <section className="min-h-screen pt-24 md:mt-16">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-28 text-center">Away From Home</h2>
        {/* tabs */}
        <Tabs className="relative mb-24 xl:mb-48">
          {/* Category and brand Tabs */}
          <TabsList className="top-8 flex flex-col items-center justify-center gap-y-8 max-md:gap-y-48 xl:absolute xl:-left-12 2xl:-left-20">
            <div className="overflow mx-auto mb-12 grid h-full w-full grid-cols-1 gap-2 md:max-xl:w-1/2 lg:max-w-[940px]">
              {uniqueCategories.map((cat, index) => (
                <TabsTrigger
                  key={index}
                  className={`w-[280px] border border-[#dadada] p-3 uppercase max-xl:mx-auto md:w-auto md:max-xl:w-[260px] ${activeFilter.type === "categoryAFH" && activeFilter.value === cat ? "bg-accent font-semibold text-white-text shadow-button" : ""}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {/* Category Cards Mapping */}
          <div className="mx-auto grid grid-cols-1 gap-10 text-lg max-xl:mt-[17rem] md:grid-cols-2 lg:max-w-[80%] xl:mt-24 xl:max-w-[90%] xl:grid-cols-3 xl:max-2xl:ml-40 2xl:w-full 2xl:max-w-[80%] 2xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <TabsContent key={index}>
                <CardProdus product={product} basePath="/away-from-home" />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default AwayFromHomePage;
