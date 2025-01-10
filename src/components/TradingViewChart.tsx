import { useEffect, useRef } from "react";
declare global {
  interface Window {
    TradingView: any;
  }
}
interface TradingViewChartProps {
  symbol: string;
}
export function TradingViewChart({ symbol }: TradingViewChartProps) {
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Load TradingView widget script
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      if (container.current) {
        new window.TradingView.widget({
          width: "100%",
          height: 400,
          symbol: `CRYPTO:${symbol}USD`,
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          toolbar_bg: "#f1f3f6",
          enable_publishing: false,
          hide_side_toolbar: false,
          allow_symbol_change: false,
          container_id: container.current.id,
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      script.remove();
    };
  }, [symbol]);
  return (
    <div className="h-full w-full animate-fade-in rounded-xl border border-border/50 bg-secondary/50 p-6">
      <div id={`tradingview_${symbol}`} ref={container} className="h-full w-full" />
    </div>
  );
}