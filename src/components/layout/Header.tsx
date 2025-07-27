import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { NAV_DATA } from "../../db/data";

const GroceryHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ease-in-out transform px-2 ${isScrolled
          ? "fixed shadow-lg translate-y-0 py-3"
          : "relative py-3 bg-transparent"
          }`}
      >
        <div className="flex items-center justify-between max-w-6xl sm:mx-auto mx-2">
          <img src={logo} alt="logo" className="w-20 sm:w-30 h-auto" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {NAV_DATA.map(({ name }) => (
              <a
                key={name}
                href={`#${name.toLowerCase()}`}
                className="nav_menu"
              >
                {name}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-2">
            <button className="nav_icon_bg">
              <Search size={20} className="nav_icon" />
            </button>
            <button className="nav_icon_bg">
              <ShoppingCart className="nav_icon" />
            </button>
            <button className="nav_icon_bg">
              <User className="nav_icon" />
            </button>
            <button
              className="md:hidden h-8 w-8 sm:w-12 sm:h-12"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="nav_icon" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Right Slide Menu */}
      <div
        className={`fixed top-0 right-0 z-50 min-h-screen w-80 bg-gradient-to-br from-orange-50 via-white to-orange-100 shadow-2xl transform transition-all duration-300 ease-in-out border-l border-orange-400 rounded-l-3xl backdrop-blur-sm
    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header Section with Profile */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-500/80 px-6 py-6 rounded-l-3xl">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-3">
              {/* Profile Avatar */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <span className="text-orange-600 font-bold text-lg">JG</span>
              </div>
              {/* User Name */}
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Jugendra Gangwar
                </h3>
                <p className="text-white/90 text-sm">Welcome back!</p>
              </div>
            </div>
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full bg-white hover:bg-white/30 transition-colors"
            >
              <X className="text-orange-400 w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex flex-col p-6 space-y-2 mt-4">
          {NAV_DATA.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="group flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-lg font-medium text-gray-800">
                {item.name}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-4 left-6 right-6">
          <div className="bg-gradient-to-r from-orange-400 to-orange-500/80 p-4 rounded-xl text-center shadow-lg">
            <p className="text-white font-medium mb-2">Need Help?</p>
            <button className="bg-white text-orange-500 px-4 py-2 rounded-lg font-semibold hover:bg-orange-50 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroceryHeader;
