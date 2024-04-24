"use client"
import React, { useState, useCallback, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CardProdus from "@/components/pages/catalog/CardProdus";
import { productData } from "@/products";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const CatalogPage = () => {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState({ type: 'category', value: 'Toate produsele' });

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      const decodedCategory = decodeURIComponent(categoryFromUrl);
      setActiveFilter({ type: 'category', value: decodedCategory });
    }
  }, [searchParams]);
  
  const handleCategoryChange = useCallback((cat) => {
    setActiveFilter({ type: 'category', value: cat });
  }, []);

  const handleBrandChange = useCallback((br) => {
    setActiveFilter({ type: 'brand', value: br });
  }, []);


  // Filter products that have brands defined
  const productsWithBrands = productData.filter((product) => product.brand);
  // Filter products that have categories defined
  const productsWithCategories = productData.filter(
    (product) => product.category
  );

   const filteredProducts = activeFilter.type === 'category' ?
   productsWithCategories.filter(product => activeFilter.value === "Toate produsele" || product.category === activeFilter.value) :
   productsWithBrands.filter(product => activeFilter.value === "All Brands" || product.brand === activeFilter.value);

 const uniqueCategories = ["Toate produsele", ...new Set(productsWithCategories.map(p => p.category))];
 const uniqueBrands = [...new Set(productsWithBrands.map(p => p.brand))];

  return (
    <section className='min-h-screen pt-24 md:mt-16'>
      <div className='container mx-auto'>
        <h2 className='mb-56 text-center mx-auto'>
          Gama de produse Monte Bianco
        </h2>
        {/* tabs */}
        <Tabs className='mb-24 xl:mb-48'>
          {/* Category and brand Tabs */}
          <TabsList className='flex flex-col items-center justify-center gap-y-8 max-md:gap-y-48 max-md:mb-40 mb-24'>
            <div className='w-full grid h-full grid-cols-1 md:grid-cols-3 lg:max-w-[940px] max-md:mb-32 mb-20 mx-auto gap-2 overflow'>
              {uniqueCategories.map((cat, index) => (
                <TabsTrigger
                  key={index}
                  className={`uppercase w-[300px] max-md:mx-auto md:w-auto p-3 border-[#dadada] border ${activeFilter.type === 'category' && activeFilter.value === cat ? 'bg-accent text-white-text shadow-button font-semibold' : ''}`}
                  onClick={() => handleCategoryChange(cat)}>
                  {cat}
                </TabsTrigger>
              ))}
            </div>
            <div className='w-full grid h-full grid-cols-1 md:grid-cols-5 lg:max-w-[800px] mx-auto gap-2 overflow max-md:mt-6'>
              {uniqueBrands.map((br, index) => (
                <TabsTrigger
                  key={index}
                  className={`uppercase w-[300px] max-md:mx-auto md:w-auto border-[#dadada] border ${activeFilter.type === 'brand' && activeFilter.value === br ? 'bg-gradient-to-t from-accent/35 via-accent/10 to-body-accent/10 shadow-button' : ''}`}
                  onClick={() => handleBrandChange(br)}>
                  {br && <Image src={br} width={120} height={60} alt={br} />}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {/* Category Cards Mapping */}
          <div className='text-lg max-md:pt-[22rem] md:pt-24 xl:mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
          {filteredProducts.map((product, index) => (
              <TabsContent key={index}>
                <CardProdus product={product} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default CatalogPage;