import { Link } from "react-router-dom";
import { formatCurrency } from "@/lib/utils";
import { Asset } from "@/types";
import { TrendingUp, TrendingDown } from "lucide-react";

interface AssetCardProps {
  asset: Asset;
  showRank?: boolean;
}

export function AssetCard({ asset, showRank = false }: AssetCardProps) {
  const priceChange = parseFloat(asset.changePercent24Hr);
  const isPositive = priceChange > 0;

  return (
    <Link
      to={`/asset/${asset.id}`}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-secondary/50 p-6 transition-all hover:bg-secondary/80 animate-fade-up backdrop-blur-sm"
    >
      {showRank && (
        <div className="absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
          {asset.rank}
        </div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <span className="text-lg font-semibold text-primary">
              {asset.symbol.slice(0, 2)}
            </span>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-lg font-semibold text-primary">{asset.name}</h3>
            <span className="text-sm text-muted-foreground">{asset.symbol}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="number text-lg font-semibold text-primary">
            {formatCurrency(parseFloat(asset.priceUsd))}
          </div>
          <div
            className={`number flex items-center justify-end gap-1 text-sm ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="h-4 w-4" />
            ) : (
              <TrendingDown className="h-4 w-4" />
            )}
            {Math.abs(priceChange).toFixed(2)}%
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <div className="text-muted-foreground">Market Cap</div>
          <div className="number font-medium text-primary">
            {formatCurrency(parseFloat(asset.marketCapUsd))}
          </div>
        </div>
        <div>
          <div className="text-muted-foreground">Volume (24h)</div>
          <div className="number font-medium text-primary">
            {formatCurrency(parseFloat(asset.volumeUsd24Hr))}
          </div>
        </div>
      </div>
    </Link>
  );
}