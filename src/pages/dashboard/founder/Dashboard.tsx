import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, PieChart } from "@/components/ui/charts";
import { Button } from "@/components/ui/button";
import { BarChart3, Building, CreditCard, DollarSign, LineChart as LineChartIcon, PieChart as PieChartIcon, TrendingUp, Users } from "lucide-react";

const FoundersDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Founder's Desk</h2>
        <p className="text-muted-foreground">
          Welcome to your centralized school management overview
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Schools</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">
              +12 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42,758</div>
            <p className="text-xs text-muted-foreground">
              +2,345 from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$428,560</div>
            <p className="text-xs text-muted-foreground">
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24,781</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <BarChart
              className="h-[300px]"
              data={[
                {
                  name: "Jan",
                  total: 234000,
                },
                {
                  name: "Feb",
                  total: 267000,
                },
                {
                  name: "Mar",
                  total: 305000,
                },
                {
                  name: "Apr",
                  total: 289000,
                },
                {
                  name: "May",
                  total: 356000,
                },
                {
                  name: "Jun",
                  total: 392000,
                },
                {
                  name: "Jul",
                  total: 428560,
                },
              ]}
            />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>User Distribution</CardTitle>
            <CardDescription>
              Breakdown of active users by role
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PieChart
              className="h-[300px]"
              data={[
                { name: "School Admins", value: 1245, color: "#9b87f5" },
                { name: "Teachers", value: 5678, color: "#7E69AB" },
                { name: "Parents", value: 17858, color: "#0FA0CE" },
              ]}
            />
          </CardContent>
        </Card>
      </div>
      
      {/* Recent Activity */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Recent Activity</h3>
          <Button variant="outline">View All</Button>
        </div>
        <div className="space-y-2">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  <div>
                    <p className="font-medium">New School Registration</p>
                    <p className="text-sm text-muted-foreground">School 1 successfully onboarded</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">5 minutes ago</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Payment Received</p>
                    <p className="text-sm text-muted-foreground">School 2 paid $12,500 for 500 students</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <div>
                    <p className="font-medium">User Migration Complete</p>
                    <p className="text-sm text-muted-foreground">School 3 imported 1,245 user accounts</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Yesterday</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FoundersDashboard;
