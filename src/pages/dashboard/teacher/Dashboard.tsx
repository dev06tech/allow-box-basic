
import { useState } from "react";
import { Calendar, Users, BookOpen, CheckCircle, XCircle, LineChart, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const TeacherDashboard = () => {
  const [selectedClass, setSelectedClass] = useState("8a");
  const todayDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  // Sample data for today's schedule
  const todaySchedule = [
    { id: 1, time: "08:00 AM - 08:45 AM", subject: "Mathematics", class: "8A" },
    { id: 2, time: "09:00 AM - 09:45 AM", subject: "Mathematics", class: "9B" },
    { id: 3, time: "10:00 AM - 10:45 AM", subject: "Break", class: "-" },
    { id: 4, time: "11:00 AM - 11:45 AM", subject: "Science", class: "8A" },
    { id: 5, time: "12:00 PM - 12:45 PM", subject: "Science", class: "7C" },
  ];

  // Sample data for upcoming homework
  const upcomingHomework = [
    { id: 1, title: "Algebra Assignment", class: "8A", dueDate: "Tomorrow", submissions: 22, total: 30 },
    { id: 2, title: "Physics Lab Report", class: "9B", dueDate: "Apr 20", submissions: 18, total: 28 },
    { id: 3, title: "Chemistry Problems", class: "7C", dueDate: "Apr 22", submissions: 0, total: 32 },
  ];

  // Sample data for performance alerts
  const performanceAlerts = [
    { id: 1, student: "John Smith", class: "8A", subject: "Mathematics", score: 58, alert: "Below passing threshold" },
    { id: 2, student: "Emma Johnson", class: "8A", subject: "Mathematics", score: 62, alert: "Declining performance" },
    { id: 3, student: "Michael Brown", class: "9B", subject: "Science", score: 60, alert: "Below passing threshold" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">Teacher Dashboard</h1>
          <p className="text-gray-500">{todayDate} • Welcome back, Ms. Andrews!</p>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedClass} onValueChange={setSelectedClass}>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Select class" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="8a">Class 8A</SelectItem>
              <SelectItem value="9b">Class 9B</SelectItem>
              <SelectItem value="7c">Class 7C</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Button>
          <Users className="h-4 w-4 mr-2" />
          Take Attendance
        </Button>
        <Button variant="outline">
          <BookOpen className="h-4 w-4 mr-2" />
          Assign Homework
        </Button>
        <Button variant="outline">
          <LineChart className="h-4 w-4 mr-2" />
          View Reports
        </Button>
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-edu-purple" />
              Today's Schedule
            </CardTitle>
            <CardDescription>Your teaching schedule for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaySchedule.map((period) => (
                <div 
                  key={period.id} 
                  className={`p-4 rounded-lg border ${
                    period.subject === "Break" 
                      ? "bg-gray-50 border-gray-200" 
                      : "bg-white border-edu-purple-light"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{period.subject}</h4>
                      <p className="text-sm text-gray-500">
                        {period.class !== "-" ? `Class ${period.class}` : "Rest Time"}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{period.time}</p>
                      {period.subject !== "Break" && (
                        <Button variant="ghost" size="sm" className="text-xs mt-1 h-7 px-2">
                          View Class
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Class Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Class 8A Stats</CardTitle>
            <CardDescription>Today's overview for 8A</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Attendance */}
              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="text-sm font-medium">Attendance</h4>
                  <span className="text-sm font-medium">93%</span>
                </div>
                <div className="flex items-center">
                  <Progress value={93} className="h-2" />
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>28/30 students present</span>
                  <span>2 absent</span>
                </div>
              </div>

              {/* Homework Completion */}
              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="text-sm font-medium">Homework Completion</h4>
                  <span className="text-sm font-medium">73%</span>
                </div>
                <div className="flex items-center">
                  <Progress value={73} className="h-2" />
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>22/30 submitted</span>
                  <span>8 pending</span>
                </div>
              </div>

              {/* Class Average */}
              <div>
                <div className="flex justify-between mb-2">
                  <h4 className="text-sm font-medium">Class Average</h4>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="flex items-center">
                  <Progress value={78} className="h-2" />
                </div>
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>Last quiz score</span>
                  <span>B grade</span>
                </div>
              </div>

              <div className="pt-2">
                <Button variant="outline" className="w-full">View Detailed Reports</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Homework & Performance Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Homework Deadlines */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-edu-purple" />
              Upcoming Homework Deadlines
            </CardTitle>
            <CardDescription>
              Track assignment submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingHomework.map((homework) => (
                <div key={homework.id} className="p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{homework.title}</h4>
                      <p className="text-sm text-gray-500">Class {homework.class}</p>
                      <div className="flex items-center mt-1">
                        <Clock className="h-3.5 w-3.5 text-edu-purple mr-1" />
                        <span className="text-xs font-medium text-edu-purple">Due: {homework.dueDate}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-medium">{homework.submissions}/{homework.total}</span>
                        <span className="text-xs text-gray-500">submitted</span>
                      </div>
                      <div className="mt-1">
                        <Progress value={(homework.submissions / homework.total) * 100} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">Assign New Homework</Button>
            </div>
          </CardContent>
        </Card>

        {/* Performance Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <LineChart className="h-5 w-5 mr-2 text-edu-purple" />
              Performance Alerts
            </CardTitle>
            <CardDescription>Students requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {performanceAlerts.map((alert) => (
                <div key={alert.id} className="p-4 rounded-lg border border-red-100 bg-red-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{alert.student}</h4>
                      <p className="text-sm text-gray-600">Class {alert.class} • {alert.subject}</p>
                      <p className="text-xs text-red-600 mt-1">{alert.alert}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex flex-col items-end">
                        <span className="text-xl font-bold text-red-600">{alert.score}%</span>
                        <div className="flex space-x-1 mt-2">
                          <Button size="sm" className="h-7 text-xs">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Schedule Help
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">View All Students</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDashboard;
