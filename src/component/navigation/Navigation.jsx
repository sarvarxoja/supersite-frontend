import "./navigation.css";
import React, { useState } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [language, setLanguage] = useState("Ru");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - red circle with "ISO" text */}
          <div className="flex items-center">
            <Link to={"/"}>
              <img
                src="/logo png 2.png"
                alt="our logo"
                className="navigation_logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {/* "Курсы" button with pink background */}
            <button className="px-4 py-1 rounded-full text-black text-sm hover:bg-pink-200 transition-colors navbar_link">
              Курсы
            </button>

            {/* "О нас" link */}
            <a
              href="#"
              className="px-4 py-1 rounded-full text-black text-sm hover:bg-pink-200 transition-colors navbar_link"
            >
              О нас
            </a>
            <a
              href="#"
              className="px-4 py-1 rounded-full text-black text-sm hover:bg-pink-200 transition-colors navbar_link"
            >
              Новости
            </a>
            <a
              href="#"
              className="px-4 py-1 rounded-full text-black text-sm hover:bg-pink-200 transition-colors navbar_link"
            >
              Демо урок
            </a>

            {/* Language dropdown */}
            <div className="text-black text-sm relative group">
              <button className="flex items-center gap-1 group-hover:text-gray-600 transition-colors">
                {language}
                <ChevronDown size={16} />
              </button>
              <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg rounded-md hidden group-hover:block z-10">
                <div className="py-1">
                  <button
                    onClick={() => setLanguage("Ru")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Ru
                  </button>
                  <button
                    onClick={() => setLanguage("En")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    En
                  </button>
                  <button
                    onClick={() => setLanguage("Uz")}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                  >
                    Uz
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-black bg-pink-100 hover:bg-pink-200 transition-colors">
              Курсы
            </button>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              Демо урок
            </a>
            <div className="px-3 py-2 rounded-md text-base font-medium text-gray-700">
              <div className="flex justify-between items-center">
                <span>Язык</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setLanguage("Ru")}
                    className={`px-2 py-1 rounded ${
                      language === "Ru" ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    Ru
                  </button>
                  <button
                    onClick={() => setLanguage("En")}
                    className={`px-2 py-1 rounded ${
                      language === "En" ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    En
                  </button>
                  <button
                    onClick={() => setLanguage("Uz")}
                    className={`px-2 py-1 rounded ${
                      language === "Uz" ? "bg-gray-200" : "hover:bg-gray-100"
                    }`}
                  >
                    Uz
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
