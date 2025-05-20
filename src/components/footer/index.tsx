import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import bastaLogo from "../../assets/logos&icons/rade-basta-logo.jpg";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-black text-white">
      <div className="bg-[#161616]">
        {/* Top nav section */}
        <div className="mx-auto max-w-7xl">
          <div className=" px-6 py-4">
            <h2 className="text-xl font-semibold my-3">Explore more</h2>
            <nav className="flex flex-wrap gap-6 text-sm text-gray-300">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/service">Solutions</Link>
              <Link to="/legal">Security & Compliance</Link>
              <Link to="/investorRelations">Investor Relations</Link>
              <Link to="/newsMedia">News & Media</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/contactUs">Contact Us</Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row justify-between px-6 py-10 gap-10">
          {/* Logo + tagline */}
          <div className="flex-1">
            <Link to="/">
              <img className="h-10" src={bastaLogo} alt="Basta Group Logo" />
            </Link>
            <p className="text-sm text-white">
              Social. Finance. AI. All under one sovereign digital roof.
            </p>
          </div>

          {/* Legal & compliance */}
          <div className="flex-1 md:border-l md:border-[rgba(255,255,255,0.3)] md:pl-8">
            {" "}
            <h4 className="font-semibold mb-2">Legal & Compliance</h4>
            <ul className="text-sm text-gray-400 space-y-1">
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms of Use</Link>
              </li>
              <li>
                <Link to="/">Licensing & Compliance</Link>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
              <FaXTwitter />
            </div>
            <div className="w-10 h-10 flex items-center justify-center bg-[#1A1A1A] rounded-full">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-white-800"></div>
      <div className="mx-auto max-w-7xl">
        <div className="text-[12px] py-4">
          <div className="flex flex-wrap justify-center relative">
            <div className="text-center w-full">© 2025 Basta Group.</div>
            <div className=" md:absolute md:right-0">All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
