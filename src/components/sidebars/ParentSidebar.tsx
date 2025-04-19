
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  LineChart,
  BookOpen,
  CalendarClock,
  CreditCard,
  FileBarChart,
  BookMarked,
  MessageSquare,
  Calendar,
  LifeBuoy,
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
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard/parent" },
  { title: "Attendance", icon: CalendarCheck, url: "/dashboard/parent/attendance" },
  { title: "Performance", icon: LineChart, url: "/dashboard/parent/performance" },
  { title: "Homework", icon: BookOpen, url: "/dashboard/parent/homework" },
  { title: "Timetable", icon: CalendarClock, url: "/dashboard/parent/timetable" },
  { title: "Fees", icon: CreditCard, url: "/dashboard/parent/fees" },
  { title: "Exams & Events", icon: FileBarChart, url: "/dashboard/parent/exams" },
  { title: "Study Materials", icon: BookMarked, url: "/dashboard/parent/materials" },
  { title: "Messages", icon: MessageSquare, url: "/dashboard/parent/messages" },
  { title: "Calendar", icon: Calendar, url: "/dashboard/parent/calendar" },
  { title: "Support", icon: LifeBuoy, url: "/dashboard/parent/support" },
  { title: "Settings", icon: Settings, url: "/dashboard/parent/settings" },
];

const ParentSidebar = () => {
  return (
    <Sidebar>
      <div className="p-4 flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-edu-purple to-edu-blue text-white font-bold">
            SD
          </div>
          <span className="font-bold text-lg">School Desk</span>
          <span className="text-sm font-semibold bg-edu-purple-light text-edu-purple px-2 py-0.5 rounded">
            Parent
          </span>
        </Link>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Parent's Desk</SidebarGroupLabel>
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

export default ParentSidebar;
