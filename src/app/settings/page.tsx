"use client"
import { DataTable } from '@/components/DataTable'
import React from 'react'
import { ColumnDef } from "@tanstack/react-table"
import PageTitle from '@/components/PageTitle'
import { cn } from '@/lib/utils'

type Props = {}

export type Setting = {
  category: string;
  value: string | number | boolean;
}

export const data: Setting[] = [
  {
    category:"Account",
    value: "true",    
  },
  {
    category:"Notification",
    value: "false",    
  },
  {
    category:"Language",
    value: "English",    
  },
  {
    category:"Theme",
    value: "Dark",    
  },
  // ...
]

 
export const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category",
    
  },
  
  {
    accessorKey: "value",
    header: "Value",
  },
];

export default function SettingsPage({}: Setting) {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='Settings'/>
        <DataTable columns={columns} data={data}/>    
    </div>
  )
}
