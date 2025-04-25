import React from "react";
import { XAxis } from "recharts";
import { Tooltip } from "recharts";
import { Legend } from "recharts";
import { Line } from "recharts";
import { YAxis } from "recharts";
import { CartesianGrid } from "recharts";
import { LineChart } from "recharts";
import { ResponsiveContainer } from "recharts";

interface MyComponentProps {
  data: string[];
  legend: boolean;
  color1: string;
  color2: string;
  color3: string;
}

const Linechart: React.FC<MyComponentProps> = ({
  data,
  legend,
  color1,
  color2,
  color3,
}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          axisLine={false} // Removes bottom axis line
          tickLine={false} // Removes small tick lines/>
          tick={{ fontSize: 16, fill: "#252525" }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 16, fill: "#252525" }}
        />

        <Tooltip />

        {/* <Legend  /> */}

        {legend ? (
          <Legend
            iconSize={0} // Hide default icon
            wrapperStyle={{ paddingLeft: "20px" }}
            formatter={(value, entry) => (
              <span
                style={{
                  fontSize: "12px",
                  color: "#333",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    width: "14px",
                    height: "14px",
                    borderRadius: "10%",
                    backgroundColor: entry.color,
                  }}
                />
                {value}
              </span>
            )}
          />
        ) : (
          ""
        )}

        <Line
          type="monotone"
          dataKey="Loyal Customers"
          stroke={color1}
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="New Customers"
          stroke={color2}
          strokeWidth={3}
          dot={false}
        />
        <Line
          type="monotone"
          dataKey="Unique Customers"
          stroke={color3}
          strokeWidth={3}
          dot={false}
        />

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Linechart;
