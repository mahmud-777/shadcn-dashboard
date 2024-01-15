"use client"
import { Radius } from 'lucide-react';
import React from 'react'
import { Bar, BarChart, ResponsiveContainer,XAxis, YAxis } from 'recharts'

type Props = {};

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random()* 5000) + 1000,
  },{
    name: "Nov",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random()* 5000) + 1000,
  },
];
export default function BarChartPage() {
  return (
    <div>
      {/* <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
  <XAxis dataKey="name" />
  <Tooltip />
  <CartesianGrid stroke="#f5f5f5" />
  <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
  <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
</LineChart> */}
<ResponsiveContainer width={'100%'} height={350}>
  <BarChart data={data}>
     <XAxis
       dataKey={"name"}
       tickLine={false}
       axisLine={false}
       stroke='#88888'
       fontSize={12}
     />
     <YAxis       
       tickLine={false}
       axisLine={false}
       stroke='#88888'
       fontSize={12}
       tickFormatter={(value)=> `$${value}`}
     />
     <Bar
       dataKey={"total"} radius={[4,4,0,0]}
     />
  </BarChart>

</ResponsiveContainer>

    </div>
  )
}
