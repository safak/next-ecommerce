import React from 'react'
import ProductsTable from './_components/data-table'
import { Orders, PrismaClient } from '@prisma/client'

const db = new PrismaClient();

export default async function page() {
  const allOrders = await db.orders.findMany() as Orders[];
  const formattedProducts = allOrders.map(product => ({
    ...product,
    date: product.date.toISOString() // Convert Date to string
  })) 
  return (
    <main className="px-5">
      
      <ProductsTable 
      // @ts-expect-error
      data={formattedProducts}/>
    </main>
  )
}
