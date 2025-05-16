import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import bastaLogo from "../../assets/logos&icons/basta-group-logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSolutions, setShowSolutions] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId); // Clear any existing timeout
    setShowSolutions(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setShowSolutions(false);
    }, 200); // 200ms delay
    setTimeoutId(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <nav
      className={`bg-white text-[#100404]  fixed w-full z-50 transition-transform duration-300 ease-in-out ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img className="h-10" src={bastaLogo} alt="Basta Group Logo" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 text-[#100404]">
            <Link to="/" className="hover:text-black">
              Home
            </Link>
            <Link to="/about" className="hover:text-black">
              About Us
            </Link>

            {/* Solutions Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 hover:text-black">
                Solutions <FiChevronDown />
              </button>
              {showSolutions && (
                <div className="absolute top-full w-48 bg-white text-black rounded shadow-md py-2 z-50">
                  <Link
                    to="/service"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Web Solutions
                  </Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                    Mobile Solutions
                  </Link>
                  <Link to="/" className="block px-4 py-2 hover:bg-gray-200">
                    Cloud Solutions
                  </Link>
                </div>
              )}
            </div>

            <Link to="/legal" className="hover:text-black">
              Security & Compliance
            </Link>
            <Link to="/" className="hover:text-black">
              Investor Relations
            </Link>
            <Link to="/" className="hover:text-black">
              News & Media
            </Link>
            <Link to="/" className="hover:text-black">
              Careers
            </Link>
            <Link to="/" className="hover:text-black">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden text-[#100404]">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none hover:text-black"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
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
              ) : (
                <svg
                  className="h-6 w-6"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white text-[#100404] transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          <Link to="/" onClick={closeMenu} className="block hover:text-black">
            Home
          </Link>
          <Link to="/" onClick={closeMenu} className="block hover:text-black">
            About Us
          </Link>

          {/* Mobile Solutions toggle */}
          <details className="text-[#100404]">
            <summary className="cursor-pointer flex items-center justify-between hover:text-black">
              <span>Solutions</span>
              <FiChevronDown />
            </summary>
            <div className="pl-4 mt-2 space-y-1 text-sm">
              <Link
                to="/"
                onClick={closeMenu}
                className="block hover:text-black"
              >
                Web Solutions
              </Link>
              <Link
                to="/"
                onClick={closeMenu}
                className="block hover:text-black"
              >
                Mobile Solutions
              </Link>
              <Link
                to="/"
                onClick={closeMenu}
                className="block hover:text-black"
              >
                Cloud Solutions
              </Link>
            </div>
          </details>

          <Link to="/" onClick={closeMenu} className="block hover:text-black">
            Security & Compliance
          </Link>
          <Link to="/" onClick={closeMenu} className="block hover:text-black">
            Investor Relations
          </Link>
          <Link to="/" onClick={closeMenu} className="block hover:text-black">
            News & Media
          </Link>
          <Link to="/" onClick={closeMenu} className="block hover:text-black">
            Careers
          </Link>
          <Link to="/" onClick={closeMenu} className="block hover:text-black">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
