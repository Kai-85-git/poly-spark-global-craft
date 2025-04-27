
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CopyGenerator from "./pages/CopyGenerator";
import Dashboard from "./pages/Dashboard";
import ImageLocalization from "./pages/ImageLocalization";
import SNSScheduler from "./pages/SNSScheduler";
import Workspaces from "./pages/Workspaces";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/copy-generator" element={<CopyGenerator />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/image-localization" element={<ImageLocalization />} />
          <Route path="/sns-scheduler" element={<SNSScheduler />} />
          <Route path="/workspaces" element={<Workspaces />} />
          <Route path="/settings" element={<Settings />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
