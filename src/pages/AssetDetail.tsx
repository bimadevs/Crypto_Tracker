import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { Asset, AssetHistory, Currency } from "@/types";
import { PriceChart } from "@/components/PriceChart";
import { formatCurrency, formatLargeNumber } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TradingViewChart } from "@/components/TradingViewChart";

async function fetchAsset(id: string): Promise<Asset> {
  const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
  const data = await response.json();
  return data.data;
}

async function fetchAssetHistory(id: string): Promise<AssetHistory[]> {
  const response = await fetch(
    `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
  );
  const data = await response.json();
  return data.data;
}

export default function AssetDetail() {
  const { id } = useParams<{ id: string }>();
  const [currency, setCurrency] = useState<Currency>("USD");

  const { data: asset, isLoading: isLoadingAsset } = useQuery({
    queryKey: ["asset", id],
    queryFn: () => fetchAsset(id!),
    enabled: !!id,
    refetchInterval: 30000,
  });

  const { data: history, isLoading: isLoadingHistory } = useQuery({
    queryKey: ["assetHistory", id],
    queryFn: () => fetchAssetHistory(id!),
    enabled: !!id,
  });

  if (isLoadingAsset || isLoadingHistory) {
    return (
      <div className="container py-8">
        <div className="h-[600px] animate-pulse rounded-lg border bg-muted" />
      </div>
    );
  }

  if (!asset) {
    return (
      <div className="container flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold">Asset not found</h2>
          <p className="text-muted-foreground">
            The asset you're looking for doesn't exist
          </p>
        </div>
      </div>
    );
  }

  const priceChange = parseFloat(asset.changePercent24Hr);
  const isPositive = priceChange > 0;

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <Link
          to="/#crypto"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        <Select value={currency} onValueChange={(value: Currency) => setCurrency(value)}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Currency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="IDR">IDR</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mb-8">
        <div className="flex items-baseline gap-4">
          <h1 className="text-4xl font-bold">{asset.name}</h1>
          <span className="text-2xl text-muted-foreground">{asset.symbol}</span>
        </div>
        <div className="mt-4 flex items-baseline gap-4">
          <span className="number text-3xl font-bold">
            {formatCurrency(parseFloat(asset.priceUsd), currency)}
          </span>
          <span
            className={`number text-lg ${
              isPositive ? "text-green-400" : "text-red-400"
            }`}
          >
            {isPositive ? "+" : ""}
            {priceChange.toFixed(2)}%
          </span>
        </div>
      </div>
      <TradingViewChart symbol={asset.symbol} />
      {/* {history && <PriceChart data={history} currency={currency} />} */}
      <div className="mt-8 grid gap-6 rounded-lg border bg-card p-6 md:grid-cols-2">
        <div>
          <div className="text-sm text-muted-foreground">Market Cap</div>
          <div className="number mt-1 text-lg font-medium">
            {formatCurrency(parseFloat(asset.marketCapUsd), currency)}
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Volume (24h)</div>
          <div className="number mt-1 text-lg font-medium">
            {formatCurrency(parseFloat(asset.volumeUsd24Hr), currency)}
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Supply</div>
          <div className="number mt-1 text-lg font-medium">
            {formatLargeNumber(parseFloat(asset.supply))} {asset.symbol}
          </div>
        </div>
        {asset.maxSupply && (
          <div>
            <div className="text-sm text-muted-foreground">Max Supply</div>
            <div className="number mt-1 text-lg font-medium">
              {formatLargeNumber(parseFloat(asset.maxSupply))} {asset.symbol}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}