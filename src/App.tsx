
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import GoogleAdsManager from "./pages/services/GoogleAdsManager";
import SEOContentWriting from "./pages/services/SEOContentWriting";
import SocialMediaMarketing from "./pages/services/SocialMediaMarketing";
import OrganicGrowthStrategies from "./pages/services/OrganicGrowthStrategies";
import EcommerceBrandManagement from "./pages/services/EcommerceBrandManagement";
import WebsiteDevelopment from "./pages/services/WebsiteDevelopment";
import KPITrackingAnalytics from "./pages/services/KPITrackingAnalytics";

const queryClient = new QueryClient();

// Component to handle hash-based scrolling
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/google-ads-manager" element={<GoogleAdsManager />} />
          <Route path="/services/seo-content-writing" element={<SEOContentWriting />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
          <Route path="/services/organic-growth-strategies" element={<OrganicGrowthStrategies />} />
          <Route path="/services/ecommerce-brand-management" element={<EcommerceBrandManagement />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment />} />
          <Route path="/services/kpi-tracking-analytics" element={<KPITrackingAnalytics />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
