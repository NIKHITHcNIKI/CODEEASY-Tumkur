import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SchoolPrograms from "./pages/SchoolPrograms";
import CollegePrograms from "./pages/CollegePrograms";
import LanguageCourses from "./pages/LanguageCourses";
import StemPrograms from "./pages/StemPrograms";
import FinancePrograms from "./pages/FinancePrograms";
import ExamCounseling from "./pages/ExamCounseling";
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
          <Route path="/courses/school" element={<SchoolPrograms />} />
          <Route path="/courses/college" element={<CollegePrograms />} />
          <Route path="/courses/stem" element={<StemPrograms />} />
          <Route path="/courses/languages" element={<LanguageCourses />} />
          <Route path="/courses/finance" element={<FinancePrograms />} />
          <Route path="/courses/exam-counseling" element={<ExamCounseling />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
