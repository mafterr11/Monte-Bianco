"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import CardProdus from "@/components/pages/catalog/CardProdus";
import { productData } from "@/products";
import Image from "next/image";

const Catalog = () => {
  // Filter products that have categories defined
  const productsWithCategories = productData.filter(
    (product) => product.category
  );

  // Categories setup
  const uniqueCategories = [
    "Toate produsele",
    ...new Set(productsWithCategories.map((product) => product.category)),
  ];
  const [category, setCategory] = useState("Toate produsele");

  // Filter products that have categories defined
  const productsWithBrands = productData.filter((product) => product.brand);
  // Brands setup
  const uniqueBrands = [
    ...new Set(productsWithBrands.map((product) => product.brand)),
  ];
  const [brand, setBrand] = useState("All Brands"); // Using 'All Brands' as a default to show all

  // Filter products by categories
  const filteredByCategory = productData.filter(
    (product) => category === "Toate produsele" || product.category === category
  );

  // Filter products by brands
  const filteredByBrand = productData.filter(
    (product) => brand === "All Brands" || product.brand === brand
  );

  return (
    <section className='min-h-screen pt-32 md:mt-16'>
      <div className='container mx-auto'>
        <h2 className='mb-56 text-center mx-auto'>
          Gama de produse Monte Bianco
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          {/* Category and brand Tabs */}
          <TabsList className='flex flex-col items-center justify-center gap-y-8 max-md:gap-y-48 max-md:mb-32'>
            <div className="w-full grid h-full grid-cols-1 md:grid-cols-3 lg:max-w-[940px] mb-12 mx-auto gap-2 overflow">
              {uniqueCategories.map((cat, index) => (
                <TabsTrigger
                  value={cat}
                  key={index}
                  className='uppercase w-[300px] max-md:mx-auto md:w-auto border-[#dadada] border data-[state=active]:bg-accent'
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </TabsTrigger>
              ))}
            </div>
            <div className="w-full grid h-full grid-cols-1 md:grid-cols-5 lg:max-w-[800px] mx-auto gap-2 overflow max-md:mt-6">
            {uniqueBrands.map((br, index) => (
              <TabsTrigger
              value={br}
              key={index}
              className='uppercase w-[300px] max-md:mx-auto md:w-auto border-[#dadada] border data-[state=active]:bg-gradient-to-t from-accent/40 via-accent/20 to-body-accent/20'
              onClick={() => setBrand(br)}
              >
                <Image src={br} width={120} height={60} alt={br}/>
              </TabsTrigger>
            ))}
            </div>
          </TabsList>
          {/* Category Cards Mapping */}
          <div className='text-lg max-md:pt-[22rem] xl:pt-24 xl:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredByCategory.map((product, index) => (
              <TabsContent value={category} key={index}>
                <CardProdus product={product} />
              </TabsContent>
            ))}
          </div>
          {/* Brands Cards Mapping */}
          <div className='text-lg xl:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredByBrand.map((product, index) => (
              <TabsContent value={brand} key={index}>
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
