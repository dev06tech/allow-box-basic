import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Logo & About */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-edu-purple to-edu-blue text-white font-bold">
                S
              </div>
              <span className="ml-2 text-xl font-bold">SchoolDesk Cloud</span>
            </Link>
            <p className="mt-3 text-sm text-gray-600">
              Transforming school management with our intuitive, comprehensive platform that empowers administrators, teachers, and parents.
            </p>
            <div className="mt-4 flex space-x-3">
              <a href="#" className="text-gray-500 hover:text-edu-purple">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-edu-purple">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-edu-purple">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-edu-purple">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-edu-purple">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-edu-purple">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  Security
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  Support Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-500 hover:text-edu-purple">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-edu-purple">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} SchoolDesk Cloud. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
