import React from "react";
import bastaLogo from "../../assets/basta-play-logo.png";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import footerImg1 from "../../assets/footer-img-1.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1b2034] py-12 pb-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          {/* Left side - Logo, badge, and copyright */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <img src={bastaLogo} alt="BastaPLAY Logo" className="h-8" />
            </div>
            <div className=" flex gap-2 justify-center items-center text-gray-400 text-sm font-bold">
              <img
                src={footerImg1}
                alt="Critical Supplier Badge"
                className="h-8 w-auto"
              />
              <div>
                <p>All Rights Reserved. Copyright © 2025</p>
                <p>In Out IOGr B.V. Julianaplein 36</p>
              </div>
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="flex flex-wrap space-x-8">
            <Link
              to="/about"
              className="text-white hover:text-blue-400 transition-colors font-bold"
            >
              About Us
            </Link>
            <Link
              to="/games"
              className="text-white hover:text-blue-400 transition-colors font-bold"
            >
              Our Games
            </Link>
            <a
              href="/privacy"
              className="text-white hover:text-blue-400 transition-colors font-bold"
            >
              Privacy Policy
            </a>
            <Link
              to="/contact"
              className="text-white hover:text-blue-400 transition-colors font-bold"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right side - Social and Email */}
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <a
                href="https://t.me/bastaplay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaTelegram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/bastaplay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <a
              href="mailto:info@bastaplay.com"
              className="text-white hover:text-blue-400 transition-colors font-bold"
            >
              info@bastaplay.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
