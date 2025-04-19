
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, HelpCircle } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("annually");
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small schools just getting started",
      monthlyPrice: 2,
      annualPrice: 1.5,
      features: [
        "Up to 300 students",
        "Basic attendance tracking",
        "Simple fee management",
        "Parent & teacher portals",
        "Email support",
      ],
      restrictions: [
        "No custom branding",
        "Limited reports",
        "No API access",
      ],
    },
    {
      name: "Professional",
      description: "Ideal for growing schools with more needs",
      monthlyPrice: 3,
      annualPrice: 2.5,
      popular: true,
      features: [
        "Up to 1,000 students",
        "Advanced attendance tracking",
        "Complete fee management",
        "Parent & teacher portals",
        "Online payment processing",
        "Performance analytics",
        "Custom branding",
        "Email & chat support",
      ],
      restrictions: [
        "Limited API access",
      ],
    },
    {
      name: "Enterprise",
      description: "For large institutions with complex requirements",
      monthlyPrice: 4,
      annualPrice: 3.5,
      features: [
        "Unlimited students",
        "All Professional features",
        "Full API access",
        "Advanced analytics & reporting",
        "Multi-school management",
        "Data export capabilities",
        "Custom integrations",
        "24/7 priority support",
        "Dedicated account manager",
      ],
      restrictions: [],
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-edu-purple/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 gradient-text">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Choose the plan that fits your school's needs. All plans include our core features with pricing based on student count.
            </p>
            
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm bg-gray-100 p-1">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    billingCycle === "monthly"
                      ? "bg-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setBillingCycle("monthly")}
                >
                  Monthly Billing
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md ${
                    billingCycle === "annually"
                      ? "bg-white shadow-sm"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setBillingCycle("annually")}
                >
                  Annual Billing
                  <span className="ml-1.5 text-xs font-medium bg-green-100 text-green-800 py-0.5 px-1.5 rounded-full">
                    Save 25%
                  </span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card 
                  key={plan.name} 
                  className={`flex flex-col ${
                    plan.popular ? 'border-edu-purple shadow-lg' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-edu-purple text-white py-1.5 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="mb-6">
                      <p className="text-4xl font-bold">
                        ${billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice}
                      </p>
                      <p className="text-gray-500">per student / month</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {billingCycle === "annually" ? "Billed annually" : "Billed monthly"}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wide">
                        Features
                      </h4>
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {plan.restrictions.length > 0 && (
                        <>
                          <h4 className="font-medium text-sm text-gray-500 uppercase tracking-wide mt-6">
                            Limitations
                          </h4>
                          <ul className="space-y-3">
                            {plan.restrictions.map((restriction) => (
                              <li key={restriction} className="flex items-start">
                                <span className="h-5 w-5 rounded-full border border-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-500">{restriction}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.popular ? '' : 'bg-gray-800 hover:bg-gray-700'}`}
                      asChild
                    >
                      <Link to="/register">
                        Get started
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our pricing and policies
              </p>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-2">How does per-student pricing work?</h3>
                <p className="text-gray-600">
                  We calculate your total price based on the number of students enrolled in your school. For example, if you have 500 students and choose the Professional plan with annual billing, your monthly cost would be $1,250 (500 students × $2.5 per student).
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new rate will be prorated for the remainder of your billing cycle. If you downgrade, the new rate will apply at the start of your next billing cycle.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer discounts for multiple schools?</h3>
                <p className="text-gray-600">
                  Yes, we offer volume discounts for educational groups or districts managing multiple schools. Please contact our sales team to discuss your specific requirements and receive a custom quote.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, wire transfers, and purchase orders for qualifying institutions. All payments are processed securely through our payment partners.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Is there a setup fee?</h3>
                <p className="text-gray-600">
                  No, there are no setup fees for any of our plans. However, if you require custom development or data migration assistance, there may be additional fees based on your requirements.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Do you offer a free trial?</h3>
                <p className="text-gray-600">
                  Yes, we offer a 14-day free trial with access to all features. No credit card is required to start your trial. You can upgrade to a paid plan at any time during or after your trial period.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center bg-edu-gray-light p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-6">
                Contact our sales team to get more information about our pricing, custom plans, or to request a personalized demo.
              </p>
              <div className="flex justify-center space-x-4">
                <Button>
                  <Link to="/contact">
                    Contact Sales
                  </Link>
                </Button>
                <Button variant="outline">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Plans Section */}
        <section className="py-16 bg-edu-gray-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compare Plans</h2>
              <p className="text-lg text-gray-600">
                Find the perfect plan for your school's needs
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-4 text-left text-gray-500 font-medium">Feature</th>
                    <th className="px-6 py-4 text-center">Starter</th>
                    <th className="px-6 py-4 text-center bg-edu-purple-light/20">Professional</th>
                    <th className="px-6 py-4 text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Student capacity</td>
                    <td className="px-6 py-4 text-center">Up to 300</td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">Up to 1,000</td>
                    <td className="px-6 py-4 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">
                      <div className="flex items-center">
                        Attendance tracking
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className="h-4 w-4 text-gray-400 ml-1" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="w-80 text-sm">Basic includes simple present/absent tracking. Advanced adds tardiness tracking, reason codes, and automated notifications.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">Advanced</td>
                    <td className="px-6 py-4 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Fee management</td>
                    <td className="px-6 py-4 text-center">Basic</td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">Complete</td>
                    <td className="px-6 py-4 text-center">Complete</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Online payment processing</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">No</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Yes</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Custom branding</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">No</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Yes</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">API access</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">No</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">Limited</td>
                    <td className="px-6 py-4 text-center">Full</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Multi-school management</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">No</span>
                    </td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">No</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Yes</span>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 font-medium">Support</td>
                    <td className="px-6 py-4 text-center">Email only</td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">Email & chat</td>
                    <td className="px-6 py-4 text-center">24/7 priority</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 text-center">
                      <Button asChild>
                        <Link to="/register">Choose Starter</Link>
                      </Button>
                    </td>
                    <td className="px-6 py-4 text-center bg-edu-purple-light/10">
                      <Button asChild>
                        <Link to="/register">Choose Professional</Link>
                      </Button>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <Button asChild>
                        <Link to="/register">Choose Enterprise</Link>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
