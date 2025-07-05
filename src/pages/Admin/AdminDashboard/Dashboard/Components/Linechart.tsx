// Linechart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Updated type and keys
type ChartDataItem = {
  name: string;
  "Loyal Customers": number;
  "New Customers": number;
  "Unique Customers"?: number;
};

const chartData: ChartDataItem[] = [
  { name: "Jan", "Loyal Customers": 30, "New Customers": 10, "Unique Customers": 5 },
  { name: "Feb", "Loyal Customers": 40, "New Customers": 15, "Unique Customers": 10 },
  { name: "Mar", "Loyal Customers": 25, "New Customers": 20, "Unique Customers": 7 },
  { name: "Apr", "Loyal Customers": 35, "New Customers": 12 },
  { name: "May", "Loyal Customers": 20, "New Customers": 28, "Unique Customers": 3 },
  { name: "June", "Loyal Customers": 20, "New Customers": 38, "Unique Customers": 3 },
  { name: "July", "Loyal Customers": 20, "New Customers": 8, "Unique Customers": 3 },
  { name: "Aug", "Loyal Customers": 20, "New Customers": 8, "Unique Customers": 3 },
  { name: "Sep", "Loyal Customers": 20, "New Customers": 8, "Unique Customers": 3 },
  { name: "Oct", "Loyal Customers": 20, "New Customers": 8, "Unique Customers": 3 },
  { name: "Nov", "Loyal Customers": 20, "New Customers": 8, "Unique Customers": 3 },
  { name: "Dec", "Loyal Customers": 20, "New Customers": 8, "Unique Customers": 3 },
];

const Linechart: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex justify-between mb-4">
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 50]} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Loyal Customers"
            stroke="#3CD856"
            strokeWidth={6}
          />
          <Line
            type="monotone"
            dataKey="New Customers"
            stroke="#EF4444"
            strokeWidth={6}
          />
          <Line
            type="monotone"
            dataKey="Unique Customers"
            stroke="#A700FF"
            strokeWidth={6}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linechart;
