
import { Link } from "react-router-dom";
import {
  BarChart3,
  Building,
  Users,
  TrendingUp,
  DollarSign,
  FileBarChart,
  MessageSquare,
  Settings,
  LifeBuoy,
  ShieldCheck,
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
  { title: "Dashboard", icon: BarChart3, url: "/dashboard/founder" },
  { title: "Schools", icon: Building, url: "/dashboard/founder/schools" },
  { title: "Users", icon: Users, url: "/dashboard/founder/users" },
  { title: "Performance", icon: TrendingUp, url: "/dashboard/founder/performance" },
  { title: "Finance", icon: DollarSign, url: "/dashboard/founder/finance" },
  { title: "Reports", icon: FileBarChart, url: "/dashboard/founder/reports" },
  { title: "Communication", icon: MessageSquare, url: "/dashboard/founder/communication" },
  { title: "System Settings", icon: Settings, url: "/dashboard/founder/settings" },
  { title: "Support", icon: LifeBuoy, url: "/dashboard/founder/support" },
  { title: "Security", icon: ShieldCheck, url: "/dashboard/founder/security" },
];

const FounderSidebar = () => {
  return (
    <Sidebar>
      <div className="p-4 flex items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-edu-purple to-edu-blue text-white font-bold">
            SD
          </div>
          <span className="font-bold text-lg">School Desk</span>
          <span className="text-sm font-semibold bg-edu-purple-light text-edu-purple px-2 py-0.5 rounded">
            Founder
          </span>
        </Link>
      </div>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Founder's Desk</SidebarGroupLabel>
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

export default FounderSidebar;
