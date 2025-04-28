import { useState, useEffect } from "react";
import bastaLogo from "../../assets/basta-play-logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-[#0B0B13] fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-8" src={bastaLogo} alt="BastaPLAY Logo" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link
                to="/games"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Games
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-[#3B82F6] text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-blue-700 "
            >
              LOG IN
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0B0B13]">
          <Link
            to="/games"
            className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
          >
            Games
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
          >
            Contact Us
          </Link>
          <a
            href="/login"
            className="bg-[#3B82F6] text-white block px-3 py-2 rounded text-base font-medium hover:bg-blue-700"
          >
            LOG IN
          </a>
        </div>
      </div>
    </nav>
  );
}
