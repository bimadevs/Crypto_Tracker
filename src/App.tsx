import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AssetDetail from "./pages/AssetDetail";
import Footer from "./components/ui/footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/#crypto" element={<Index />} />
      <Route path="/asset/:id" element={<AssetDetail />} />
    </Routes>
    <Footer /> 
  </QueryClientProvider>
);

export default App;