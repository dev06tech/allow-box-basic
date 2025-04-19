
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import FounderSidebar from "../sidebars/FounderSidebar";
import SchoolAdminSidebar from "../sidebars/SchoolAdminSidebar";
import TeacherSidebar from "../sidebars/TeacherSidebar";
import ParentSidebar from "../sidebars/ParentSidebar";
import DashboardHeader from "../headers/DashboardHeader";

const DashboardLayout = () => {
  // In a real app, this would come from auth context
  const [userRole, setUserRole] = useState("founder");

  // Function to render the appropriate sidebar based on user role
  const renderSidebar = () => {
    switch (userRole) {
      case "founder":
        return <FounderSidebar />;
      case "school-admin":
        return <SchoolAdminSidebar />;
      case "teacher":
        return <TeacherSidebar />;
      case "parent":
        return <ParentSidebar />;
      default:
        return null;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {renderSidebar()}
        <div className="flex flex-col flex-1">
          <DashboardHeader userRole={userRole} setUserRole={setUserRole} />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
