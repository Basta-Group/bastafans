import { useState, useEffect } from "react";
import bastaLogo from "../../assets/logos&icons/rade-basta-logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 0) {
        // Scrolling down
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

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
    <nav
      className={`bg-black overflow-hidden fixed w-full z-50 transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="BastaPlay Home">
              <img
                className="h-10"
                src={bastaLogo}
                title="Home"
                alt="BastaPlay Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div
            className="hidden md:flex items-center justify-center flex-1 md:hidden"
            role="navigation"
            aria-label="Main menu"
          >
            <div className="flex space-x-8">
              <Link
                to="/games"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium"
                aria-label="Games page"
              >
                Games
              </Link>
              <Link
                to="/detail"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium"
                aria-label="Detail page"
              >
                Detail
              </Link>
              <Link
                to="/about"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium"
                aria-label="About page"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-blue-400 px-3 py-2 text-sm font-medium"
                aria-label="Contact page"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-blue-400 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="sr-only">
                {isMenuOpen ? "Close main menu" : "Open main menu"}
              </span>
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
      <div
        className={`hidden absolute top-16 left-0 right-0 bg-black z-50 transition-all duration-300 ease-in-out transform ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        id="mobile-menu"
        style={{
          boxShadow: isMenuOpen
            ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
            : "none",
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/games"
            className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
            onClick={closeMenu}
          >
            Games
          </Link>
          <Link
            to="/detail"
            className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
            onClick={closeMenu}
          >
            Detail
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-400 block px-3 py-2 text-base font-medium"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <a
            href="/login"
            className="bg-[#3B82F6] text-white block px-3 py-2 rounded text-base font-medium hover:bg-blue-700"
            onClick={closeMenu}
          >
            LOG IN
          </a>
        </div>
      </div>
    </nav>
  );
}
