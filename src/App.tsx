import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import Jobs from "./pages/Jobs";
import Mentorship from "./pages/Mentorship";
import Events from "./pages/Events";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import { generateGeminiResponse } from './api/gemini';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="chat" element={<Chat />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="mentorship" element={<Mentorship />} />
            <Route path="events" element={<Events />} />
            <Route path="support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
