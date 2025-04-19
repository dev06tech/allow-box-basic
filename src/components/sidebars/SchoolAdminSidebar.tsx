
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  Users,
  Layers,
  CalendarCheck,
  FileSpreadsheet,
  BookOpen,
  CreditCard,
  MessageSquare,
  BarChart3,
  BookMarked,
  Bus,
  Calendar,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard/school-admin" },
  { title: "Students", icon: GraduationCap, url: "/dashboard/school-admin/students" },
  { title: "Staff", icon: Users, url: "/dashboard/school-admin/staff" },
  { title: "Classes & Subjects", icon: Layers, url: "/dashboard/school-admin/classes" },
  { title: "Attendance", icon: CalendarCheck, url: "/dashboard/school-admin/attendance" },
  { title: "Exams & Results", icon: FileSpreadsheet, url: "/dashboard/school-admin/exams" },
  { title: "Homework", icon: BookOpen, url: "/dashboard/school-admin/homework" },
  { title: "Fees", icon: CreditCard, url: "/dashboard/school-admin/fees" },
  { title: "Communication", icon: MessageSquare, url: "/dashboard/school-admin/communication" },
  { title: "Reports", icon: BarChart3, url: "/dashboard/school-admin/reports" },
  { title: "Library", icon: BookMarked, url: "/dashboard/school-admin/library" },
  { title: "Transport", icon: Bus, url: "/dashboard/school-admin/transport" },
  { title: "Calendar", icon: Calendar, url: "/dashboard/school-admin/calendar" },
  { title: "Settings", icon: Settings, url: "/dashboard/school-admin/settings" },
];

const SchoolAdminSidebar = () => {
  return (
    <Sidebar>
      <div className="p-4 flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-edu-purple to-edu-blue text-white font-bold">
            SD
          </div>
          <span className="font-bold text-lg">School Desk</span>
          <span className="text-sm font-semibold bg-edu-purple-light text-edu-purple px-2 py-0.5 rounded">
            School
          </span>
        </Link>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>School Desk</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center space-x-2">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SchoolAdminSidebar;
