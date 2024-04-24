"use client"
import React, { useState, useCallback, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CardProdus from "@/components/pages/catalog/CardProdus";
import { productData } from "@/products";
import { useSearchParams } from "next/navigation";

const AwayFromHomePage = () => {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState({ type: 'categoryAFH', value: 'Toate produsele' });

  useEffect(() => {
    const categoryFromUrl = searchParams.get("categoryAFH");
    if (categoryFromUrl) {
      const decodedCategory = decodeURIComponent(categoryFromUrl);
      console.log("Decoded Category:", decodedCategory); // Ensure this logs the expected value
      setActiveFilter({ type: 'categoryAFH', value: decodedCategory });
    }
  }, [searchParams]);
  

  const handleCategoryChange = useCallback((cat) => { 
    setActiveFilter({ type: 'categoryAFH', value: cat });
  }, []);

 


  // Filter products that have categories defined
  const productsWithCategories = productData.filter(
    (product) => product.categoryAFH
  );

  const filteredProducts = productsWithCategories.filter(product =>
    activeFilter.value === "Toate produsele" || product.categoryAFH === activeFilter.value
  ); 

 const uniqueCategories = ["Toate produsele", ...new Set(productsWithCategories.map(p => p.categoryAFH))];

  return (
    <section className='min-h-screen pt-24 md:mt-16'>
      <div className='container mx-auto'>
        <h2 className='mb-28 text-center mx-auto'>
          Away From Home
        </h2>
        {/* tabs */}
        <Tabs className='relative mb-24 xl:mb-48'>
          {/* Category and brand Tabs */}
          <TabsList className='xl:absolute top-8 -left-52 flex flex-col items-center justify-center gap-y-8 max-md:gap-y-48'>
            <div className='w-full grid h-full grid-cols-1 md:max-xl:w-1/2 lg:max-w-[940px] mb-12 mx-auto gap-2 overflow'>
              {uniqueCategories.map((cat, index) => (
                <TabsTrigger
                  key={index}
                  className={`uppercase w-[300px] p-4 max-md:mx-auto md:w-auto border-[#dadada] border ${activeFilter.type === 'categoryAFH' && activeFilter.value === cat ? 'bg-accent text-white-text shadow-button font-semibold' : ''}`}
                  onClick={() => handleCategoryChange(cat)}>
                  {cat}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {/* Category Cards Mapping */}
          <div className='text-lg max-xl:mt-[17rem] xl:mt-24 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filteredProducts.map((product, index) => (
              <TabsContent key={index}>
                <CardProdus product={product} basePath="/away-from-home"/>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default AwayFromHomePage;