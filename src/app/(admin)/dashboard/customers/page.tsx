import React from 'react'
import ProductsTable from './_components/data-table'
import { Customers, PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export default async function page() {
  const allCusoemrs = await db.customers.findMany() as Customers[]; 
  return (
    <main className="px-5">
      <ProductsTable data={allCusoemrs}/>
    </main>
  )
}
