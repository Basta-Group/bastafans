import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute left-0 flex-shrink-0">
            <div className="flex items-center">
              <div className="h-10 w-10 relative">
                <div className="absolute inset-0 border-4 border-white rounded-full"></div>
                <div className="absolute inset-2 flex items-center justify-center">
                  <span className="font-bold text-lg">NGL</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <div className="flex items-center space-x-8">
              <a href="#" className="font-medium hover:text-gray-200">HOME</a>
              <a href="#" className="font-medium hover:text-gray-200">ABOUT US</a>
              <a href="#" className="font-medium hover:text-gray-200">CONTACT</a>
              <a href="#" className="font-medium hover:text-gray-200">PORTAL</a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="absolute right-0 md:hidden">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-blue-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700">
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-blue-800 text-center">HOME</a>
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-blue-800 text-center">ABOUT US</a>
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-blue-800 text-center">CONTACT</a>
          <a href="#" className="block px-3 py-2 rounded-md text-white font-medium hover:bg-blue-800 text-center">PORTAL</a>
        </div>
      </div>
    </nav>
  );
}