
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-edu-purple to-edu-blue text-white font-bold">
                AB
              </div>
              <span className="ml-2 text-xl font-bold">Allow Box</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link to="/" className="text-gray-700 hover:text-edu-purple px-3 py-2 rounded-md font-medium">
                Home
              </Link>
              {/* <Link to="/features" className="text-gray-700 hover:text-edu-purple px-3 py-2 rounded-md font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-edu-purple px-3 py-2 rounded-md font-medium">
                Pricing
              </Link> */}
              <Link to="/contact" className="text-gray-700 hover:text-edu-purple px-3 py-2 rounded-md font-medium">
                Contact
              </Link>
            </div>
          </div>
          {/* <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-3">
              <Link to="/login">
                <Button variant="outline">Log in</Button>
              </Link>
              <Link to="/register">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div> */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/features"
              className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
          <div className="p-3 border-t border-gray-200 flex flex-col space-y-2">
            <Link to="/login" onClick={toggleMenu}>
              <Button variant="outline" className="w-full">
                Log in
              </Button>
            </Link>
            <Link to="/register" onClick={toggleMenu}>
              <Button className="w-full">Get Started</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
