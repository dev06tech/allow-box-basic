
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  School,
  Users,
  BarChart4,
  Bell,
  BookOpen,
  CreditCard,
  MessageSquare,
  Calendar,
  Layout,
  Shield,
  LineChart,
} from "lucide-react";

const Index = () => {
  // Animation effect for fading in sections
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      
      elements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add("opacity-100", "translate-y-0");
          el.classList.remove("opacity-0", "translate-y-8");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Run once on load
    
    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 md:py-28 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-10 mb-10 md:mb-0 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              School Management Simplified
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Empower your school with our comprehensive, cloud-based management system. Connect administrators, teachers, and parents on one intuitive platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Schedule Demo
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative animate-float">
            <div className="bg-white rounded-xl shadow-xl p-4 transform rotate-3 animate-float">
              <div className="bg-edu-purple/5 rounded-lg p-3">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-edu-purple">Today's Attendance</h3>
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">98%</span>
                </div>
                <div className="h-40 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-full px-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Class 8A</span>
                      <span className="text-sm font-medium">45/46</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mt-4 mb-2">
                      <span className="text-sm text-gray-600">Class 7B</span>
                      <span className="text-sm font-medium">42/44</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                    
                    <div className="flex justify-between mt-4 mb-2">
                      <span className="text-sm text-gray-600">Class 9C</span>
                      <span className="text-sm font-medium">39/40</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-xl p-4 transform -rotate-2">
              <div className="bg-edu-blue/5 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-edu-blue">Fee Summary</h3>
                  <span className="text-sm text-edu-blue">April 2025</span>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-gray-600">
                    <p className="text-sm">Collected</p>
                    <p className="font-semibold text-black">$124,500</p>
                  </div>
                  <div className="text-gray-600">
                    <p className="text-sm">Outstanding</p>
                    <p className="font-semibold text-red-500">$12,850</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute top-10 -right-8 bg-white rounded-xl shadow-xl p-3 transform rotate-6">
              <div className="bg-green-50 rounded-lg p-2">
                <div className="flex space-x-2 items-center">
                  <Bell className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">New assignment submitted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Curved separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Everything You Need in One Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive solution offers powerful tools for all stakeholders in the educational ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-purple-light flex items-center justify-center mb-4">
                <School className="h-6 w-6 text-edu-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-School Management</h3>
              <p className="text-gray-600">
                Centralized administration for multiple schools with customizable permissions and branding options.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-blue-light flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-edu-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Role Management</h3>
              <p className="text-gray-600">
                Define custom roles and permissions for administrators, teachers, parents, and other staff members.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-purple-light flex items-center justify-center mb-4">
                <BarChart4 className="h-6 w-6 text-edu-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Analytics</h3>
              <p className="text-gray-600">
                Comprehensive analytics and reports to track student progress, attendance, and school performance.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-blue-light flex items-center justify-center mb-4">
                <Bell className="h-6 w-6 text-edu-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Notifications</h3>
              <p className="text-gray-600">
                Automated alerts for attendance, assignments, exams, and fee payments to keep everyone informed.
              </p>
            </div>
            
            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-purple-light flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-edu-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Homework & Assignments</h3>
              <p className="text-gray-600">
                Create, assign, and track assignments with file attachments and submission tracking.
              </p>
            </div>
            
            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-blue-light flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-edu-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fee Management</h3>
              <p className="text-gray-600">
                Streamlined fee collection with online payment options, automated reminders, and detailed reporting.
              </p>
            </div>
            
            {/* Feature 7 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-purple-light flex items-center justify-center mb-4">
                <MessageSquare className="h-6 w-6 text-edu-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Communication Tools</h3>
              <p className="text-gray-600">
                Integrated messaging system for seamless communication between administrators, teachers, and parents.
              </p>
            </div>
            
            {/* Feature 8 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-blue-light flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-edu-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Event Calendar</h3>
              <p className="text-gray-600">
                Centralized calendar for managing school events, exams, holidays, and parent-teacher meetings.
              </p>
            </div>
            
            {/* Feature 9 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="h-12 w-12 rounded-full bg-edu-purple-light flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-edu-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
              <p className="text-gray-600">
                Enterprise-grade security with role-based access control, data encryption, and compliance features.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Roles Section */}
      <section className="py-16 bg-edu-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Tailored for Every Role
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed to meet the unique needs of all stakeholders in the educational ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Super Admin */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Super Administrators</h3>
                <p className="text-gray-600 mb-6">
                  Manage multiple schools, monitor performance metrics, and oversee the entire platform from one central dashboard.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Multi-school management and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Subscription and billing management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>System configuration and branding controls</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Cross-school performance comparison</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pt-0 pb-6">
                <div className="h-64 bg-edu-purple/5 rounded-lg flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-sm p-4 w-full transform rotate-1">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-gray-800">Schools Overview</h4>
                      <span className="text-xs bg-edu-purple/10 text-edu-purple px-2 py-1 rounded">
                        Last 30 days
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-500">Schools</p>
                        <p className="font-bold text-xl">24</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-500">Students</p>
                        <p className="font-bold text-xl">12,450</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-500">Revenue</p>
                        <p className="font-bold text-xl">$248k</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs">Lincoln High School</span>
                        <span className="text-xs">$32,450</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full">
                        <div className="h-1.5 rounded-full bg-edu-purple" style={{ width: "78%" }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs">St. Mary's Academy</span>
                        <span className="text-xs">$28,700</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full">
                        <div className="h-1.5 rounded-full bg-edu-purple" style={{ width: "64%" }}></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs">Washington Elementary</span>
                        <span className="text-xs">$21,300</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-200 rounded-full">
                        <div className="h-1.5 rounded-full bg-edu-purple" style={{ width: "52%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* School Admin */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">School Administrators</h3>
                <p className="text-gray-600 mb-6">
                  Streamline daily operations, manage staff and students, and gain insights into school performance metrics.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Student and staff management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Class scheduling and timetables</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Attendance and fee management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Exam creation and results analysis</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pt-0 pb-6">
                <div className="h-64 bg-edu-blue/5 rounded-lg flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-sm p-4 w-full transform -rotate-1">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-gray-800">School Dashboard</h4>
                      <span className="text-xs bg-edu-blue/10 text-edu-blue px-2 py-1 rounded">
                        Today
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-500">Attendance</p>
                        <p className="font-bold text-xl">94.2%</p>
                        <div className="w-full h-1 bg-gray-200 mt-1">
                          <div className="h-1 bg-green-500" style={{ width: "94.2%" }}></div>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-2 rounded text-center">
                        <p className="text-xs text-gray-500">Fee Collection</p>
                        <p className="font-bold text-xl">89.7%</p>
                        <div className="w-full h-1 bg-gray-200 mt-1">
                          <div className="h-1 bg-edu-blue" style={{ width: "89.7%" }}></div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium">Today's Events</span>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <div className="text-xs bg-edu-blue-light/20 p-1.5 rounded flex items-center">
                        <Calendar className="h-3 w-3 mr-1.5" /> Science Fair - Grade 6
                      </div>
                      <div className="text-xs bg-edu-blue-light/20 p-1.5 rounded flex items-center">
                        <Calendar className="h-3 w-3 mr-1.5" /> Math Quiz - Grade 9
                      </div>
                      <div className="text-xs bg-edu-blue-light/20 p-1.5 rounded flex items-center">
                        <Calendar className="h-3 w-3 mr-1.5" /> Staff Meeting - 4:30 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Teacher */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Teachers</h3>
                <p className="text-gray-600 mb-6">
                  Focus on teaching while easily managing classes, assignments, grades, and communication with students and parents.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Class attendance and management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Assignment creation and grading</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Student performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Direct messaging with parents</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pt-0 pb-6">
                <div className="h-64 bg-edu-purple/5 rounded-lg flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-sm p-4 w-full transform rotate-1">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-medium text-gray-800">Class 8A - Mathematics</h4>
                      <span className="text-xs bg-edu-purple/10 text-edu-purple px-2 py-1 rounded">
                        Performance
                      </span>
                    </div>
                    <div className="flex justify-between mb-1">
                      <span className="text-xs">Average Score</span>
                      <span className="text-xs font-medium">78.3%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full mb-3">
                      <div className="h-1.5 rounded-full bg-edu-purple" style={{ width: "78%" }}></div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-xs font-medium mb-2">Students Requiring Attention</div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-1.5 bg-red-50 rounded text-xs">
                          <span>John Smith</span>
                          <span className="font-medium text-red-600">58%</span>
                        </div>
                        <div className="flex justify-between items-center p-1.5 bg-yellow-50 rounded text-xs">
                          <span>Sarah Johnson</span>
                          <span className="font-medium text-yellow-600">65%</span>
                        </div>
                        <div className="flex justify-between items-center p-1.5 bg-green-50 rounded text-xs">
                          <span>Class Average</span>
                          <span className="font-medium text-green-600">78.3%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Parents */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Parents</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with your child's education, track their progress, and communicate with teachers and administration.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Real-time attendance and performance tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Homework and assignment monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Fee payment and receipt management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Direct messaging with teachers</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pt-0 pb-6">
                <div className="h-64 bg-edu-blue/5 rounded-lg flex items-center justify-center p-4">
                  <div className="bg-white rounded-lg shadow-sm p-4 w-full transform -rotate-1">
                    <div className="flex items-center mb-3">
                      <div className="h-8 w-8 bg-edu-purple/10 rounded-full flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-edu-purple">EL</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Emma Lewis</h4>
                        <p className="text-xs text-gray-500">Grade 8A | Roll No: 15</p>
                      </div>
                      <div className="ml-auto bg-green-100 rounded-full px-2 py-0.5">
                        <span className="text-xs font-medium text-green-800">Present</span>
                      </div>
                    </div>
                    
                    <div className="mb-3 mt-4">
                      <div className="text-xs font-medium mb-1.5">Today's Classes</div>
                      <div className="space-y-1.5">
                        <div className="text-xs bg-gray-50 p-1.5 rounded flex justify-between">
                          <span>Mathematics</span>
                          <span className="text-gray-500">9:00 - 9:45 AM</span>
                        </div>
                        <div className="text-xs bg-gray-50 p-1.5 rounded flex justify-between">
                          <span>Science</span>
                          <span className="text-gray-500">10:00 - 10:45 AM</span>
                        </div>
                        <div className="text-xs bg-gray-50 p-1.5 rounded flex justify-between">
                          <span>English</span>
                          <span className="text-gray-500">11:00 - 11:45 AM</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="text-xs font-medium mb-1.5">Upcoming Homework</div>
                      <div className="text-xs bg-yellow-50 p-1.5 rounded flex justify-between">
                        <span>Math Assignment</span>
                        <span className="text-yellow-600 font-medium">Due Tomorrow</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Loved by Schools Everywhere
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear what our customers say about EduBloom Cloud
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-edu-purple/10 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-edu-purple">LH</span>
                </div>
                <div>
                  <h3 className="font-semibold">Lincoln High School</h3>
                  <p className="text-sm text-gray-600">Boston, MA</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "EduBloom Cloud has transformed our administrative processes. We've reduced paperwork by 85% and improved parent-teacher communication significantly."
              </p>
              <div className="mt-4 flex">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-edu-blue/10 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-edu-blue">SM</span>
                </div>
                <div>
                  <h3 className="font-semibold">St. Mary's Academy</h3>
                  <p className="text-sm text-gray-600">Chicago, IL</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The fee management system is flawless! We've seen on-time payments increase by 40% since implementing EduBloom. The dashboard is intuitive and parents love it."
              </p>
              <div className="mt-4 flex">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-edu-purple/10 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold text-edu-purple">WE</span>
                </div>
                <div>
                  <h3 className="font-semibold">Washington Elementary</h3>
                  <p className="text-sm text-gray-600">Seattle, WA</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a parent, I finally feel connected to my child's education. I can track attendance, view assignments, and communicate with teachers all in one place. Absolutely game-changing!"
              </p>
              <div className="mt-4 flex">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing CTA */}
      <section className="py-16 bg-edu-purple/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Ready to Transform Your School Management?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join thousands of schools already using EduBloom Cloud to simplify administration, enhance learning, and improve communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" className="w-full sm:w-auto">
                  View Pricing
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
