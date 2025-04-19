
import { useState } from "react";
import { Calendar, Book, Clock, AlertTriangle, CheckCircle, Flame, UserPlus, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const ParentDashboard = () => {
  const [selectedChild, setSelectedChild] = useState("child1");
  const todayDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  
  // Sample data for today's classes
  const todayClasses = [
    { id: 1, time: "08:00 AM - 08:45 AM", subject: "Mathematics", teacher: "Teacher 1", room: "103" },
    { id: 2, time: "09:00 AM - 09:45 AM", subject: "English Language", teacher: "Teacher 2", room: "205" },
    { id: 3, time: "10:00 AM - 10:45 AM", subject: "Break", teacher: "-", room: "-" },
    { id: 4, time: "11:00 AM - 11:45 AM", subject: "Science", teacher: "Teacher 3", room: "301" },
    { id: 5, time: "12:00 PM - 12:45 PM", subject: "Physical Education", teacher: "Coach 1", room: "Gym" },
  ];
  
  // Sample data for homework
  const homework = [
    { id: 1, subject: "Mathematics", title: "Algebra Assignment", dueDate: "Tomorrow", completed: false },
    { id: 2, subject: "English", title: "Book Report", dueDate: "Apr 20", completed: true },
    { id: 3, subject: "Science", title: "Physics Lab Report", dueDate: "Apr 22", completed: false },
  ];
  
  // Sample data for upcoming exams
  const upcomingExams = [
    { id: 1, subject: "Mathematics", date: "Apr 20", topics: "Algebra, Equations" },
    { id: 2, subject: "Science", date: "Apr 25", topics: "Electricity, Magnetism" },
  ];
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-1">Parent Dashboard</h1>
          <p className="text-gray-500">{todayDate} • Welcome back, Parent 1!</p>
        </div>
        <div className="flex space-x-2">
          <Select value={selectedChild} onValueChange={setSelectedChild}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select child" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="child1">Child 1 (Grade 8)</SelectItem>
              <SelectItem value="child2">Child 2 (Grade 5)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {/* Child Overview Card */}
      <Card className="border-edu-purple-light">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Avatar and Basic Info */}
            <div className="flex flex-col items-center text-center md:text-left md:items-start">
              <Avatar className="h-24 w-24 mb-2">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl bg-edu-purple-light text-edu-purple">C1</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold">Child 1</h2>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <span>Grade 8A</span>
                <span className="mx-2">•</span>
                <span>Roll No: 15</span>
              </div>
              <Badge variant="outline" className="mt-2 bg-green-100 text-green-800 hover:bg-green-100">
                <CheckCircle className="h-3 w-3 mr-1" /> Present Today
              </Badge>
            </div>
            
            {/* Stats */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
              {/* Attendance */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Attendance</p>
                    <p className="text-2xl font-bold">95%</p>
                  </div>
                  <Calendar className="h-5 w-5 text-edu-purple" />
                </div>
                <div className="mt-2">
                  <Progress value={95} className="h-1" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Present: 57 days out of 60</p>
              </div>
              
              {/* Academic */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Academics</p>
                    <p className="text-2xl font-bold">A-</p>
                  </div>
                  <Book className="h-5 w-5 text-edu-purple" />
                </div>
                <div className="mt-2">
                  <Progress value={85} className="h-1" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Average: 85% across all subjects</p>
              </div>
              
              {/* Fee Status */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Fee Status</p>
                    <p className="text-2xl font-bold">Paid</p>
                  </div>
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
                <div className="mt-2">
                  <Progress value={100} className="h-1" />
                </div>
                <p className="text-xs text-gray-500 mt-1">Next payment due: May 1, 2025</p>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="mt-6 flex flex-wrap gap-2">
            <Button>View Report Card</Button>
            <Button variant="outline">Pay Fees</Button>
            <Button variant="outline">Message Teachers</Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Today's Overview */}
      <h2 className="text-xl font-bold mt-8">Today's Overview</h2>
      
      {/* Today's Classes & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Classes */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-edu-purple" />
              Today's Classes
            </CardTitle>
            <CardDescription>Emma's schedule for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todayClasses.map((period) => (
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
                      {period.teacher !== "-" && (
                        <p className="text-sm text-gray-500">
                          {period.teacher} • Room {period.room}
                        </p>
                      )}
                      {period.teacher === "-" && (
                        <p className="text-sm text-gray-500">Rest Time</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{period.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Alerts and Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-edu-purple" />
              Alerts
            </CardTitle>
            <CardDescription>Important notifications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-100 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800">Homework Due Tomorrow</h4>
                <p className="text-sm text-yellow-700">Mathematics: Algebra Assignment</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-yellow-600">Status: Not Submitted</span>
                  <Button variant="ghost" size="sm" className="h-7 text-xs">
                    <CheckCircle className="h-3.5 w-3.5 mr-1" />
                    Mark as Done
                  </Button>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800">Upcoming Test</h4>
                <p className="text-sm text-blue-700">Mathematics test on April 20th</p>
                <p className="text-xs text-blue-600 mt-1">Topics: Algebra, Equations</p>
              </div>
              
              <div className="bg-edu-blue-light/30 border border-edu-blue-light p-4 rounded-lg">
                <h4 className="font-medium text-edu-blue">Science Exhibition</h4>
                <p className="text-sm">School event on April 17th, 10:00 AM</p>
                <p className="text-xs mt-1">Venue: School Auditorium</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Homework & Upcoming Exams */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Homework */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Book className="h-5 w-5 mr-2 text-edu-purple" />
              Homework
            </CardTitle>
            <CardDescription>Emma's assigned homework</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {homework.map((item) => (
                <div key={item.id} className="flex justify-between items-start p-4 rounded-lg border border-gray-200">
                  <div>
                    <div className="flex items-center">
                      <Badge variant="outline" className="mr-2 bg-edu-purple-light/30 text-edu-purple hover:bg-edu-purple-light/30">
                        {item.subject}
                      </Badge>
                      {item.completed && (
                        <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                          Completed
                        </Badge>
                      )}
                      {!item.completed && (
                        <Badge variant="outline" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                          Pending
                        </Badge>
                      )}
                    </div>
                    <h4 className="font-medium mt-1">{item.title}</h4>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      Due: {item.dueDate}
                    </div>
                  </div>
                  <Button size="sm" variant={item.completed ? "outline" : "default"}>
                    {item.completed ? "View" : "Remind"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Homework
            </Button>
          </CardFooter>
        </Card>
        
        {/* Upcoming Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Flame className="h-5 w-5 mr-2 text-edu-purple" />
              Upcoming Exams
            </CardTitle>
            <CardDescription>Emma's upcoming tests and exams</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingExams.map((exam) => (
                <div key={exam.id} className="p-4 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <Badge variant="outline" className="bg-edu-blue-light/30 text-edu-blue hover:bg-edu-blue-light/30">
                        {exam.subject}
                      </Badge>
                      <h4 className="font-medium mt-1">{exam.subject} Test</h4>
                      <div className="flex items-center mt-1 text-sm text-gray-500">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        Date: {exam.date}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Topics: {exam.topics}</p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      Set Reminder
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="p-4 rounded-lg border border-dashed border-gray-300 bg-gray-50">
                <div className="flex items-center justify-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>No more exams scheduled in the next 30 days</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View Full Calendar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ParentDashboard;
