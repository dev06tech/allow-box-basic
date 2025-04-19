
import { useState } from "react";
import { CalendarCheck, Users, UserCheck, BookOpen, Clock, AlertCircle, CheckCircle, CreditCard, Bell, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Bar, BarChart, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const attendanceData = [
  { day: "Mon", attendance: 95 },
  { day: "Tue", attendance: 92 },
  { day: "Wed", attendance: 96 },
  { day: "Thu", attendance: 94 },
  { day: "Fri", attendance: 90 },
  { day: "Sat", attendance: 0 },
  { day: "Sun", attendance: 0 },
];

const feeData = [
  { month: "Jan", collected: 85, outstanding: 15 },
  { month: "Feb", collected: 88, outstanding: 12 },
  { month: "Mar", collected: 90, outstanding: 10 },
  { month: "Apr", collected: 92, outstanding: 8 },
  { month: "May", collected: 85, outstanding: 15 },
  { month: "Jun", collected: 90, outstanding: 10 },
  { month: "Jul", collected: 88, outstanding: 12 },
];

const SchoolAdminDashboard = () => {
  const [selectedClass, setSelectedClass] = useState("all");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">School Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening at Lincoln High School today.</p>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Classes</SelectItem>
              <SelectItem value="8a">Class 8A</SelectItem>
              <SelectItem value="8b">Class 8B</SelectItem>
              <SelectItem value="9a">Class 9A</SelectItem>
              <SelectItem value="9b">Class 9B</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Student Attendance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center text-md font-medium">
              <span>Student Attendance</span>
              <CalendarCheck className="h-4 w-4 text-gray-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">93.6%</div>
            <div className="flex items-center mt-1 text-sm">
              <span className="text-gray-500">Today's attendance</span>
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
                +1.2%
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Teacher Attendance */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center text-md font-medium">
              <span>Teacher Attendance</span>
              <UserCheck className="h-4 w-4 text-gray-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">97.2%</div>
            <div className="flex items-center mt-1 text-sm">
              <span className="text-gray-500">Today's attendance</span>
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full">
                100% on time
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Total Students */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center text-md font-medium">
              <span>Total Students</span>
              <Users className="h-4 w-4 text-gray-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">845</div>
            <div className="flex items-center mt-1 text-sm">
              <span className="text-gray-500">42 classes</span>
              <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full">
                4 new today
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Fee Collection */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex justify-between items-center text-md font-medium">
              <span>Fee Collection</span>
              <CreditCard className="h-4 w-4 text-gray-500" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">87.5%</div>
            <div className="flex items-center mt-1 text-sm">
              <span className="text-gray-500">Monthly fees</span>
              <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded-full">
                $15,420 pending
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for different insights */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full sm:w-auto grid-cols-3 sm:grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Attendance Chart + Today's Events */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Attendance Chart */}
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Weekly Attendance</CardTitle>
                <CardDescription>Last 7 days attendance overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={attendanceData}>
                      <XAxis dataKey="day" tickLine={false} axisLine={false} />
                      <YAxis 
                        tickFormatter={(value) => `${value}%`}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 100]}
                      />
                      <Tooltip formatter={(value) => [`${value}%`, 'Attendance']} />
                      <Bar 
                        dataKey="attendance" 
                        fill="#9b87f5" 
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Today's Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-edu-purple" />
                  Today's Events
                </CardTitle>
                <CardDescription>April 17, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-edu-blue-light/30 p-3 rounded-md">
                    <h4 className="text-sm font-medium">Science Exhibition</h4>
                    <div className="flex items-center mt-1 text-xs text-gray-600">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>10:00 AM - 12:30 PM</span>
                    </div>
                    <div className="flex items-center mt-1 text-xs text-gray-600">
                      <Users className="h-3 w-3 mr-1" />
                      <span>Classes 7-9</span>
                    </div>
                  </div>
                  
                  <div className="bg-edu-purple-light/30 p-3 rounded-md">
                    <h4 className="text-sm font-medium">Staff Meeting</h4>
                    <div className="flex items-center mt-1 text-xs text-gray-600">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>3:30 PM - 4:30 PM</span>
                    </div>
                    <div className="flex items-center mt-1 text-xs text-gray-600">
                      <Users className="h-3 w-3 mr-1" />
                      <span>All Teachers</span>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-3 rounded-md">
                    <h4 className="text-sm font-medium">Fee Deadline</h4>
                    <div className="flex items-center mt-1 text-xs text-gray-600">
                      <AlertCircle className="h-3 w-3 mr-1" />
                      <span>Last day for April fees</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alerts & Recent Activity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Frequently used actions</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button className="h-auto py-6 flex flex-col">
                  <Users className="h-6 w-6 mb-2" />
                  <span>Add Student</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 flex flex-col">
                  <BookOpen className="h-6 w-6 mb-2" />
                  <span>Assign Homework</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 flex flex-col">
                  <CalendarCheck className="h-6 w-6 mb-2" />
                  <span>Take Attendance</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-6 flex flex-col">
                  <Bell className="h-6 w-6 mb-2" />
                  <span>Send Notice</span>
                </Button>
              </CardContent>
            </Card>
            
            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-edu-purple" />
                  Recent Alerts
                </CardTitle>
                <CardDescription>Requiring your attention</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-100 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-red-800">Low Attendance</h4>
                    <p className="text-sm text-red-600">Class 8B has 72% attendance today</p>
                    <p className="text-xs text-red-500 mt-1">1 hour ago</p>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-yellow-800">Fee Reminder</h4>
                    <p className="text-sm text-yellow-600">22 students haven't paid April fees</p>
                    <p className="text-xs text-yellow-500 mt-1">Today</p>
                  </div>
                  
                  <div className="bg-green-50 border border-green-100 p-3 rounded-md">
                    <h4 className="text-sm font-medium text-green-800">Assignment Complete</h4>
                    <p className="text-sm text-green-600">All students in Class 9A submitted Science project</p>
                    <p className="text-xs text-green-500 mt-1">Yesterday</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="attendance">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Analytics</CardTitle>
              <CardDescription>Detailed attendance reports and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">This tab will show detailed attendance analytics.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="academics">
          <Card>
            <CardHeader>
              <CardTitle>Academic Performance</CardTitle>
              <CardDescription>Class and subject-wise academic reports</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">This tab will show academic performance metrics.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="finance">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Fee Collection Status</CardTitle>
                <CardDescription>Monthly fee collection overview</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={feeData}>
                      <XAxis dataKey="month" tickLine={false} axisLine={false} />
                      <YAxis 
                        tickFormatter={(value) => `${value}%`}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 100]}
                      />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Bar 
                        stackId="a"
                        name="Collected"
                        dataKey="collected" 
                        fill="#9b87f5" 
                      />
                      <Bar 
                        stackId="a"
                        name="Outstanding"
                        dataKey="outstanding" 
                        fill="#fecaca" 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
                    Recent Payments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-sm">Emma Thompson</p>
                        <p className="text-xs text-gray-500">Class 7A</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">$350.00</p>
                        <p className="text-xs text-gray-500">Today, 9:45 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-sm">James Wilson</p>
                        <p className="text-xs text-gray-500">Class 8B</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">$350.00</p>
                        <p className="text-xs text-gray-500">Today, 8:32 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-sm">Sophia Davis</p>
                        <p className="text-xs text-gray-500">Class 9C</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">$350.00</p>
                        <p className="text-xs text-gray-500">Yesterday</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <div>
                        <p className="font-medium text-sm">Noah Martinez</p>
                        <p className="text-xs text-gray-500">Class 10A</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm">$350.00</p>
                        <p className="text-xs text-gray-500">Yesterday</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                    Outstanding Payments
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <div>
                        <p className="font-medium text-sm">Liam Johnson</p>
                        <p className="text-xs text-gray-500">Class 8C</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm text-red-600">$350.00</p>
                        <p className="text-xs text-red-500">3 days overdue</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <div>
                        <p className="font-medium text-sm">Olivia Brown</p>
                        <p className="text-xs text-gray-500">Class 7B</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm text-red-600">$350.00</p>
                        <p className="text-xs text-red-500">5 days overdue</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <div>
                        <p className="font-medium text-sm">William Taylor</p>
                        <p className="text-xs text-gray-500">Class 9A</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm text-red-600">$350.00</p>
                        <p className="text-xs text-red-500">7 days overdue</p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center p-2 bg-red-50 rounded">
                      <div>
                        <p className="font-medium text-sm">Ava Smith</p>
                        <p className="text-xs text-gray-500">Class 10B</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-sm text-red-600">$350.00</p>
                        <p className="text-xs text-red-500">7 days overdue</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SchoolAdminDashboard;
