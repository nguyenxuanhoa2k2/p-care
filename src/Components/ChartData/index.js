import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

function ChartData({ data }) {
  return (
    <LineChart
      width={700}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 40,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='value' stroke='#82ca9d' />
    </LineChart>
  );
}

export default ChartData;
