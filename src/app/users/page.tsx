"use client"
import { DataTable } from '@/components/DataTable'
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import PageTitle from '@/components/PageTitle'

type Props = {}

export type Payment = {
  name: string
  email: string
  lastOrder: string
  method: string
}

export const data: Payment[] = [
  {
    name:"John Doe",
    email: "john@gmail.com",
    lastOrder:"2023-01-01",
    method: "Credit Card"
  },
  {    
    name:"Alice Smith",
    email: "alice@gmail.com",
    lastOrder:"2023-02-15",
    method: "PayPal"
  },
  {
    name:"Bob Johnson",
    email: "bob@gmail.com",
    lastOrder:"2023-02-02",
    method: "Stripe"
  },
  {
    name:"Emma Brown",
    email: "emma@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    name:"Zoe",
    email: "zoe@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },{
    name:"Cleo",
    email: "cleo@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    name:"Sammy",
    email: "sammy@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },{
    name:"Lucky",
    email: "lucky@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    name:"Misty",
    email: "misty@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },{
    name:"Simon",
    email: "simon@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },{
    name:"Cali",
    email: "cali@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    name:"Oliver",
    email: "oliver@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  {
    name:"Rocky",
    email: "rocky@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },{
    name:"Felix",
    email: "felix@gmail.com",
    lastOrder:"2023-04-10",
    method: "Cash"
  },
  {
    name:"Simba",
    email: "simba@gmail.com",
    lastOrder:"2023-04-10",
    method: "Venmo"
  },
  // ...
]

 
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({row}) => {
      return(
       <div>
        <img
          className='h-10 w-10' 
          src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${row.getValue("name")}`}
           alt="user-image"           
          />
        <p>{row.getValue("name")}</p>
      
      </div>)
    }
  },
  {
    accessorKey: "email",
    header: "Email",
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

export default function UsersPage({}: Props) {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='Users'/>
        <DataTable columns={columns} data={data}/>    
    </div>
  )
}
