"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import CardProdus from "@/components/pages/catalog/CardProdus";
import { productData } from "@/products";

const Catalog = () => {

  const uniqueCategories = [
    "Toate produsele",
    ...new Set(productData.map((item) => item.category)),
  ];
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("Toate produsele");
  const filteredProducts = productData.filter((product) => {
    // if category  is all products return all products, else filter
    return category === "Toate produsele"
      ? product
      : product.category === category;
  });

  return (
    <section className="min-h-screen pt-32 md:pt-40">
      <div className="container mx-auto">
        <h2 className="mb-8 xl:mb-32 text-center mx-auto">
          Gama de produse Monte Bianco
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full grid-cols-1 md:grid-cols-3 lg:max-w-[940px] mb-12 mx-auto gap-[1px]">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  value={category}
                  key={index}
                  className="uppercase w-[300px] max-md:mx-auto md:w-auto border-opacity-20 border"
                  onClick={() => setCategory(category)}
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index)=>{
              return <TabsContent value={category} key={index}>
                <CardProdus product={product}/>
              </TabsContent>
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Catalog;
