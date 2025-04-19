
import { useState } from "react";
import { Bell, MessageSquare, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  userRole: string;
  setUserRole: (role: string) => void;
}

const DashboardHeader = ({ userRole, setUserRole }: DashboardHeaderProps) => {
  const [notifications, setNotifications] = useState(3);
  const [messages, setMessages] = useState(2);

  // This is for demo purposes, in a real app this would be handled by authentication
  const switchRole = (role: string) => {
    setUserRole(role);
  };

  // Get the appropriate title based on user role
  const getDeskTitle = () => {
    switch (userRole) {
      case "founder":
        return "Founder's Desk";
      case "school-admin":
        return "School Desk";
      case "teacher":
        return "Teacher's Desk";
      case "parent":
        return "Parent's Desk";
      default:
        return "School Desk";
    }
  };

  return (
    <header className="border-b px-6 py-3 flex items-center justify-between bg-white">
      <div className="flex items-center space-x-4">
        <SidebarTrigger />
        <h2 className="text-lg font-semibold hidden md:block">{getDeskTitle()}</h2>
      </div>

      <div className="flex items-center space-x-4">
        {/* Role Switcher (Demo Only) */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Switch Role (Demo)
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => switchRole("founder")}>
              Founder
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => switchRole("school-admin")}>
              School Admin
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => switchRole("teacher")}>
              Teacher
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => switchRole("parent")}>
              Parent
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-4">
              <h3 className="font-medium mb-2">Notifications</h3>
              <div className="space-y-2">
                <div className="p-3 bg-edu-purple-light rounded-md">
                  <p className="text-sm">New school registered - Victory Academy</p>
                  <p className="text-xs text-gray-500">5 minutes ago</p>
                </div>
                <div className="p-3 bg-edu-blue-light rounded-md">
                  <p className="text-sm">System update scheduled for tonight</p>
                  <p className="text-xs text-gray-500">1 hour ago</p>
                </div>
                <div className="p-3 bg-edu-gray-light rounded-md">
                  <p className="text-sm">Subscription payment received from Lincoln High</p>
                  <p className="text-xs text-gray-500">Yesterday</p>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Messages */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <MessageSquare className="h-5 w-5" />
              {messages > 0 && (
                <span className="absolute -top-1 -right-1 bg-edu-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {messages}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <div className="p-4">
              <h3 className="font-medium mb-2">Messages</h3>
              <div className="space-y-2">
                <div className="p-3 bg-edu-purple-light rounded-md">
                  <p className="text-sm font-medium">Support: Lincoln High School</p>
                  <p className="text-xs">We need help with adding new classes...</p>
                  <p className="text-xs text-gray-500">10 minutes ago</p>
                </div>
                <div className="p-3 bg-edu-blue-light rounded-md">
                  <p className="text-sm font-medium">Billing: St. Mary's School</p>
                  <p className="text-xs">Question about our latest invoice...</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* User Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
