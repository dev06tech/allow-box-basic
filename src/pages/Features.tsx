
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  CalendarCheck,
  BookOpen,
  CreditCard,
  MessageSquare,
  BarChart3,
  LineChart,
  School,
  Bell,
  Shield,
  Layout,
  Clock,
} from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Features = () => {
  const featureCategories = [
    {
      title: "School Management",
      description: "Core features for efficient school administration",
      icon: School,
      features: [
        {
          title: "Student Management",
          description: "Easily manage student information, enrollment, and academic records. Assign students to classes and track their progress throughout their academic journey.",
          icon: Users,
        },
        {
          title: "Attendance Tracking",
          description: "Track attendance for students and staff. Generate reports, identify patterns, and send automatic notifications for absences.",
          icon: CalendarCheck,
        },
        {
          title: "Course & Class Management",
          description: "Create and manage classes, subjects, and timetables. Assign teachers to classes and monitor class performance.",
          icon: BookOpen,
        },
        {
          title: "Fee Management",
          description: "Set up fee structures, generate invoices, and track payments. Provide parents with online payment options and automated receipts.",
          icon: CreditCard,
        },
      ],
    },
    {
      title: "Communication",
      description: "Features that connect parents, teachers, and administrators",
      icon: MessageSquare,
      features: [
        {
          title: "Messaging System",
          description: "Enable direct communication between teachers and parents. Share updates, answer questions, and address concerns in real-time.",
          icon: MessageSquare,
        },
        {
          title: "Announcements & Notices",
          description: "Broadcast announcements, circulars, and important notices to specific groups or the entire school community.",
          icon: Bell,
        },
        {
          title: "Parent-Teacher Meetings",
          description: "Schedule and manage parent-teacher meetings. Allow parents to book slots and receive reminders.",
          icon: Clock,
        },
      ],
    },
    {
      title: "Analytics & Reporting",
      description: "Data-driven insights for informed decision making",
      icon: BarChart3,
      features: [
        {
          title: "Academic Performance",
          description: "Visualize student performance trends, identify weak areas, and implement targeted interventions to improve learning outcomes.",
          icon: LineChart,
        },
        {
          title: "Attendance Analytics",
          description: "Track attendance patterns, identify chronic absenteeism, and measure the impact of attendance on academic performance.",
          icon: CalendarCheck,
        },
        {
          title: "Financial Reporting",
          description: "Generate comprehensive financial reports, track revenue streams, and analyze expenses to optimize budget allocation.",
          icon: CreditCard,
        },
      ],
    },
    {
      title: "Platform & Security",
      description: "Enterprise-grade infrastructure and security",
      icon: Shield,
      features: [
        {
          title: "Custom Branding",
          description: "Personalize the platform with your school's logo, colors, and domain to create a seamless brand experience.",
          icon: Layout,
        },
        {
          title: "Role-Based Access Control",
          description: "Define granular permissions for different user roles to ensure data privacy and security across the platform.",
          icon: Shield,
        },
        {
          title: "Data Encryption & Compliance",
          description: "Enterprise-grade security with end-to-end encryption and compliance with educational data protection regulations.",
          icon: Shield,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-edu-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
                Powerful Features for Modern Schools
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                EduBloom Cloud provides a comprehensive set of tools designed to streamline school administration, enhance teaching, and improve communication.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link to="/register">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            
            {/* Feature Preview Image */}
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://placehold.co/1200x600/e5deff/9b87f5?text=EduBloom+Dashboard+Preview" 
                alt="EduBloom Platform Preview" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Feature Categories */}
        {featureCategories.map((category, index) => (
          <section 
            key={category.title} 
            className={`py-16 ${index % 2 === 1 ? 'bg-edu-gray-light' : 'bg-white'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-edu-purple-light mb-6">
                  <category.icon className="h-8 w-8 text-edu-purple" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.features.map((feature) => (
                  <div 
                    key={feature.title}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="h-12 w-12 rounded-full bg-edu-purple-light flex items-center justify-center mb-4">
                      <feature.icon className="h-6 w-6 text-edu-purple" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
        
        {/* Role-Based Features */}
        <section className="py-16 bg-edu-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Tailored for Every Role</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how EduBloom Cloud helps different stakeholders in the educational ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">School Administrators</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Centralized school management dashboard</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Student and staff management tools</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Financial oversight and reporting</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>School-wide analytics and insights</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-edu-gray-light p-6">
                  <Button className="w-full" asChild>
                    <Link to="/register">Register as Administrator</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Teachers</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Class and student management tools</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Attendance tracking and reporting</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Assignment creation and grading</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Direct communication with parents</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-edu-gray-light p-6">
                  <Button className="w-full" asChild>
                    <Link to="/register">Register as Teacher</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Parents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Real-time access to child's progress</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Attendance and homework tracking</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Fee payment and receipt management</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Direct communication with teachers</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-edu-gray-light p-6">
                  <Button className="w-full" asChild>
                    <Link to="/register">Register as Parent</Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Super Administrators</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Multi-school management console</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Cross-school performance analytics</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>Centralized billing and subscription management</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-green-100 p-1 rounded mr-3">
                        <CheckIcon className="h-4 w-4 text-green-600" />
                      </div>
                      <span>System-wide configuration and branding</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-edu-gray-light p-6">
                  <Button className="w-full" asChild>
                    <Link to="/contact">Contact Sales</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-edu-purple/90 to-edu-blue/90 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your school management?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of schools already using EduBloom Cloud to streamline administration, enhance learning, and improve communication.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/register">Start Free Trial</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10" asChild>
                <Link to="/contact">Schedule Demo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// CheckIcon component
const CheckIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
  </svg>
);

export default Features;
