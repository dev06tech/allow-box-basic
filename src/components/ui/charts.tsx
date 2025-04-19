
import React from 'react';
import {
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { ChartContainer, ChartTooltipContent } from './chart';

interface ChartProps {
  className?: string;
  data: any[];
}

export const BarChart = ({ className, data }: ChartProps) => {
  return (
    <ChartContainer className={className} config={{}} data-testid="bar-chart">
      <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend />
        <Bar dataKey="total" fill="#8884d8" />
      </RechartsBarChart>
    </ChartContainer>
  );
};

export const LineChart = ({ className, data }: ChartProps) => {
  return (
    <ChartContainer className={className} config={{}} data-testid="line-chart">
      <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<ChartTooltipContent />} />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </RechartsLineChart>
    </ChartContainer>
  );
};

export const PieChart = ({ className, data }: ChartProps) => {
  return (
    <ChartContainer className={className} config={{}} data-testid="pie-chart">
      <RechartsPieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color || `#${Math.floor(Math.random()*16777215).toString(16)}`} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltipContent />} />
        <Legend />
      </RechartsPieChart>
    </ChartContainer>
  );
};
