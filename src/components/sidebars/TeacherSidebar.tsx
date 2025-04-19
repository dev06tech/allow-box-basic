
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  GraduationCap,
  CalendarCheck,
  LineChart,
  BookOpen,
  FileSpreadsheet,
  BookMarked,
  MessageSquare,
  CalendarClock,
  Clock,
  FileBarChart,
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
  { title: "Dashboard", icon: LayoutDashboard, url: "/dashboard/teacher" },
  { title: "My Classes", icon: GraduationCap, url: "/dashboard/teacher/classes" },
  { title: "Attendance", icon: CalendarCheck, url: "/dashboard/teacher/attendance" },
  { title: "Student Performance", icon: LineChart, url: "/dashboard/teacher/performance" },
  { title: "Homework", icon: BookOpen, url: "/dashboard/teacher/homework" },
  { title: "Exams & Marks", icon: FileSpreadsheet, url: "/dashboard/teacher/exams" },
  { title: "Learning Materials", icon: BookMarked, url: "/dashboard/teacher/materials" },
  { title: "Communication", icon: MessageSquare, url: "/dashboard/teacher/communication" },
  { title: "Timetable", icon: CalendarClock, url: "/dashboard/teacher/timetable" },
  { title: "Leave Requests", icon: Clock, url: "/dashboard/teacher/leave" },
  { title: "Reports", icon: FileBarChart, url: "/dashboard/teacher/reports" },
  { title: "Settings", icon: Settings, url: "/dashboard/teacher/settings" },
];

const TeacherSidebar = () => {
  return (
    <Sidebar>
      <div className="p-4 flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-edu-purple to-edu-blue text-white font-bold">
            SD
          </div>
          <span className="font-bold text-lg">School Desk</span>
          <span className="text-sm font-semibold bg-edu-purple-light text-edu-purple px-2 py-0.5 rounded">
            Teacher
          </span>
        </Link>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Teacher's Desk</SidebarGroupLabel>
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

export default TeacherSidebar;
