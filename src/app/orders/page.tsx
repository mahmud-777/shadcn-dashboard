"use client"
import { DataTable } from '@/components/DataTable'
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'

type Props = {}

export type Order = {
  order: string
  status: string
  lastOrder: string
  method: string
}

export const data: Order[] = [
  {
    order:"ORD001",
    status: "Pending",
    lastOrder:"2023-01-15",
    method: "Credit Card"
  },
  {    
    order:"ORD002",
    status: "Processing",
    lastOrder:"2023-02-20",
    method: "PayPal"
  },
  {
    order:"ORD003",
    status: "Completed",
    lastOrder:"2023-03-10",
    method: "Credit Card"
  },
  {
    order:"ORD004",
    status: "Pending",
    lastOrder:"2023-04-10",
    method: "Cash"
  },
  {
    order:"ORD005",
    status: "Completed",
    lastOrder:"2023-04-10",
    method: "Paypal"
  },{
    order:"ORD006",
    status: "Processing",
    lastOrder:"2023-04-10",
    method: "Visa"
  },
  {
    order:"ORD007",
    status: "Completed",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    order:"ORD008",
    status: "Pending",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    order:"ORD009",
    status: "Processing",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    order:"ORD010",
    status: "Completed",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },{
    order:"ORD011",
    status: "Pending",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    order:"ORD012",
    status: "Processing",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  // ...
]

 
export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "order",
    header: "Order",
    
  },
  {
    accessorKey: "status",
    header: "Status",
    cell:({row}) => {
      return (
        <div className={cn("font-medium w-fit px-4 py-2 rounded-lg",{
          "bg-red-200": row.getValue("status") === "Pending",
          "bg-orange-200": row.getValue("status") === "Processing",
          "bg-green-200": row.getValue("status") === "Completed",
        })}>
          {row.getValue("status")}
        </div>
      )
    }
  },
  {
    accessorKey: "lastOrder",
    header: "Last Order",
  },
  {
    accessorKey: "method",
    header: "Method",
  },
];

export default function OrderPage({}: Order) {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='Orders'/>
        <DataTable columns={columns} data={data}/>    
    </div>
  )
}
