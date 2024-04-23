"use client"
import React, { useState, useCallback } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CardProdus from "@/components/pages/catalog/CardProdus";
import { productData } from "@/products";
import Image from "next/image";

const Catalog = () => {
  const [activeTab, setActiveTab] = useState('category');
  const [category, setCategory] = useState("Toate produsele");
  const [brand, setBrand] = useState("All Brands");

  const handleCategoryChange = useCallback((cat) => {
    // console.log("Changing to category:", cat);
    setCategory(cat);
    setActiveTab('category');
  }, []);

  const handleBrandChange = useCallback((br) => {
    // console.log("Changing to brand:", br);
    setBrand(br);
    setActiveTab('brand');
  }, []);

  const filteredByCategory = productData.filter(
    (product) => category === "Toate produsele" || product.category === category
  );

  const filteredByBrand = productData.filter(
    (product) => brand === "All Brands" || product.brand === brand
  );

   // Filter products that have brands defined
   const productsWithBrands = productData.filter((product) => product.brand);
   // Filter products that have categories defined
   const productsWithCategories = productData.filter(
     (product) => product.category
   );

  const uniqueCategories = ["Toate produsele", ...new Set(productsWithCategories.map(p => p.category))];
  const uniqueBrands = [...new Set(productsWithBrands.map(p => p.brand))];

  return (
    <section className='min-h-screen pt-32 md:mt-16'>
      <div className='container mx-auto'>
        <h2 className='mb-56 text-center mx-auto'>
          Gama de produse Monte Bianco
        </h2>
        {/* tabs */}
        <Tabs className='mb-24 xl:mb-48'>
          {/* Category and brand Tabs */}
          <TabsList className='flex flex-col items-center justify-center gap-y-8 max-md:gap-y-48 max-md:mb-32'>
            <div className='w-full grid h-full grid-cols-1 md:grid-cols-3 lg:max-w-[940px] mb-12 mx-auto gap-2 overflow'>
              {uniqueCategories.map((cat, index) => (
                <TabsTrigger
                  key={index}
                  className='uppercase w-[300px] max-md:mx-auto md:w-auto border-[#dadada] border focus:bg-accent focus:text-white-text focus:font-semibold focus:shadow-button'
                  onClick={() => handleCategoryChange(cat)}>
                  {cat}
                </TabsTrigger>
              ))}
            </div>
            <div className='w-full grid h-full grid-cols-1 md:grid-cols-5 lg:max-w-[800px] mx-auto gap-2 overflow max-md:mt-6'>
              {uniqueBrands.map((br, index) => (
                <TabsTrigger
                  key={index}
                  className='uppercase w-[300px] max-md:mx-auto md:w-auto border-[#dadada] border focus:bg-gradient-to-t from-accent/40 via-accent/20 to-body-accent/20 focus:shadow-button'
                  onClick={() => handleBrandChange(br)}>
                  {br && <Image src={br} width={120} height={60} alt={br} />}
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
          {/* Category Cards Mapping */}
          <div className='text-lg max-md:pt-[22rem] xl:pt-24 xl:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
          {(activeTab === 'category' ? filteredByCategory : filteredByBrand).map((product, index) => (
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

export default Catalog;