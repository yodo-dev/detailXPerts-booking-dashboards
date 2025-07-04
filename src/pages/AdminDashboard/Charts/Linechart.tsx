import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
} from "recharts";

interface MyComponentProps {
  data: {
    name: string;
    [key: string]: string | number;
  }[];
  legend: boolean;
  color1: string; // Purple (Returning Customers)
  color2: string; // Red (New Customers)
}

const Linechart: React.FC<MyComponentProps> = ({
  data,
  legend,
  color1,
  color2,
}) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart
        data={data}
        margin={{ top: 10, right: 20, left: 10, bottom: 0 }}
      >
        {/* Horizontal grid lines only */}
        <CartesianGrid stroke="#f0f0f0" vertical={false} />

        {/* X Axis */}
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 14, fill: "#252525" }}
        />

        {/* Y Axis */}
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 14, fill: "#252525" }}
        />

        {/* Tooltips */}
        <Tooltip
          contentStyle={{ borderRadius: "10px", fontSize: "13px" }}
          cursor={{ strokeDasharray: "3 3" }}
        />

        {/* Custom Legend */}
        {legend && (
          <Legend
            iconSize={0}
            wrapperStyle={{ paddingLeft: 10 }}
            formatter={(value, entry) => (
              <span style={{ fontSize: "13px", color: "#252525" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: 14,
                    height: 14,
                    borderRadius: 4,
                    backgroundColor: entry.color,
                    marginRight: 8,
                    marginTop: 10,
                  }}
                />
                {value}
              </span>
            )}
          />
        )}

        {/* Purple Line - Returning Customers */}
        <Line
          type="monotone"
          dataKey="Returning Customers"
          stroke={color1}
          strokeWidth={5}
          dot={false}
        />

        {/* Red Line - New Customers */}
        <Line
          type="monotone"
          dataKey="New Customers"
          stroke={color2}
          strokeWidth={5}
          dot={false}
        />

        {/* Vertical Dashed Line on July */}
        <ReferenceLine
          x="Jul"
          stroke="#EF4444"
          strokeDasharray="3 3"
          strokeWidth={1.5}
        />

        {/* Highlighted Dot on July for New Customers */}
        <ReferenceDot
          x="Jul"
          y={data[6]["New Customers"] as number}
          r={8}
          fill="#EF4444"
          stroke="white"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Linechart;
