import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="py-10 bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap -mx-6">
          {/* Logo Section */}
          <div className="w-full md:w-1/2 lg:w-5/12 px-6 mb-6 md:mb-0">
            <div className="flex flex-col h-full justify-between">
              <div className="mb-4">
                <Logo width="120px" />
              </div>
              <p className="text-sm font-light text-white">
                &copy; {new Date().getFullYear()} Shahil. All rights reserved.
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="w-full md:w-1/2 lg:w-2/12 px-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Support</h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="w-full md:w-1/2 lg:w-3/12 px-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Legals</h3>
            <ul>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-400 hover:text-white transition"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
