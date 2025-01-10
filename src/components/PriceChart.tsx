import { useEffect, useRef } from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatCurrency } from "@/lib/utils";
import { Currency } from "@/types";

interface PriceChartProps {
  data: Array<{
    time: number;
    priceUsd: string;
  }>;
  currency: Currency;
}

export function PriceChart({ data, currency }: PriceChartProps) {
  const chartData = data.map((item) => ({
    time: new Date(item.time),
    price: parseFloat(item.priceUsd),
  }));

  return (
    <div className="h-[400px] w-full animate-fade-in rounded-xl border border-border/50 bg-secondary/50 p-6">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="price" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            tickFormatter={(time) => time.toLocaleDateString()}
            stroke="#888888"
          />
          <YAxis
            tickFormatter={(value) => formatCurrency(Number(value), currency)}
            stroke="#888888"
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const value = payload[0].value;
                return (
                  <div className="rounded-xl border border-border/50 bg-secondary/80 p-4 shadow-lg backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="text-sm text-muted-foreground">Price</div>
                      <div className="number text-xm font-medium text-primary">
                        {formatCurrency(Number(value), currency)}
                      </div>
                      <div className="text-sm text-muted-foreground">Date</div>
                      <div className="text-sm font-medium text-primary">
                        {payload[0].payload.time.toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#6366f1"
            fillOpacity={1}
            fill="url(#price)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}