
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Agenda from "./pages/Agenda";
import Habits from "./pages/Habits";
import Mentorship from "./pages/Mentorship";
import Profile from "./pages/Profile";
import Content from "./pages/Content";
import Menu from "./pages/Menu";
import Wishlist from "./pages/Wishlist";
import AppMenu from "./components/AppMenu";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppMenu />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/mentoria" element={<Mentorship />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/conteudo" element={<Content />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/desejos" element={<Wishlist />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
