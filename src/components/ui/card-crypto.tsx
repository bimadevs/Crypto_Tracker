import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Asset } from "@/types";
import { AssetCard } from "@/components/AssetCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

async function fetchAssets(): Promise<Asset[]> {
  const response = await fetch("https://api.coincap.io/v2/assets");
  const data = await response.json();
  return data.data;
}

type SortKey = "rank" | "name" | "priceUsd" | "changePercent24Hr";

export default function CardCrypto() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("rank");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data: assets, isLoading, error } = useQuery({
    queryKey: ["assets"],
    queryFn: fetchAssets,
    refetchInterval: 30000,
  });

  const filteredAndSortedAssets = assets
    ?.filter(
      (asset) =>
        asset.name.toLowerCase().includes(search.toLowerCase()) ||
        asset.symbol.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "rank":
          return parseInt(a.rank) - parseInt(b.rank);
        case "name":
          return a.name.localeCompare(b.name);
        case "priceUsd":
          return parseFloat(b.priceUsd) - parseFloat(a.priceUsd);
        case "changePercent24Hr":
          return (
            parseFloat(b.changePercent24Hr) - parseFloat(a.changePercent24Hr)
          );
        default:
          return 0;
      }
    });

  const totalPages = filteredAndSortedAssets
    ? Math.ceil(filteredAndSortedAssets.length / itemsPerPage)
    : 0;

  const paginatedAssets = filteredAndSortedAssets?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="grid gap-6 md:grid-cols-2 ">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[200px] animate-pulse rounded-xl border border-border/50 bg-secondary/50"
            />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-primary">
            Error loading assets
          </h2>
          <p className="text-muted-foreground">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-primary">Crypto Assets</h1>
        <p className="mt-2 text-muted-foreground">
          Track real-time cryptocurrency prices and market data
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Input
          placeholder="Search assets..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <Select
          value={sortBy}
          onValueChange={(value) => setSortBy(value as SortKey)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rank">Rank</SelectItem>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="priceUsd">Price</SelectItem>
            <SelectItem value="changePercent24Hr">24h Change</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 ">
        {paginatedAssets?.map((asset) => (
          <AssetCard key={asset.id} asset={asset} showRank />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => handlePageChange(currentPage - 1)}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i + 1}>
                <PaginationLink
                  onClick={() => handlePageChange(i + 1)}
                  isActive={currentPage === i + 1}
                  className="cursor-pointer"
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                onClick={() => handlePageChange(currentPage + 1)}
                className={
                  currentPage === totalPages
                    ? "pointer-events-none opacity-50"
                    : "cursor-pointer"
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}