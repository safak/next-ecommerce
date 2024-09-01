import React from "react";
import ProductsTable from "./_components/data-table";
import { PrismaClient, Products } from "@prisma/client";

const db = new PrismaClient();

export default async function page() {

  const allProducts = await db.products.findMany() ;
  const formattedProducts = allProducts.map(product => ({
    ...product,
  })) 

  return (
    <main className="px-5">
      
      <ProductsTable 
      // @ts-ignore
      data={formattedProducts} />
    </main>
  );
}
