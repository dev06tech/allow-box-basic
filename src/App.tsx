
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Contact from "./pages/Contact";

// Dashboard pages
import FoundersDashboard from "./pages/dashboard/founder/Dashboard";
import SchoolAdminDashboard from "./pages/dashboard/school-admin/Dashboard";
import TeacherDashboard from "./pages/dashboard/teacher/Dashboard";
import ParentDashboard from "./pages/dashboard/parent/Dashboard";

// Layout components
import DashboardLayout from "./components/layouts/DashboardLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            {/* Founders Desk Routes */}
            <Route path="founder" element={<FoundersDashboard />} />
            
            {/* School Desk Routes */}
            <Route path="school-admin" element={<SchoolAdminDashboard />} />
            
            {/* Teacher Desk Routes */}
            <Route path="teacher" element={<TeacherDashboard />} />
            
            {/* Parent Desk Routes */}
            <Route path="parent" element={<ParentDashboard />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
