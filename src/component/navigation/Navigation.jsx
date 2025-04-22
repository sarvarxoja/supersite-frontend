import "./navigation.css";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const Navbar = () => {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  const changeLanguage = (newLang) => {
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(uz|en|ru)/, "");
    const newPath = `/${newLang}${pathWithoutLang}`;

    i18n.changeLanguage(newLang);
    navigate(newPath);
  };

  return (
    <nav className="bg-white w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to={`/${lang || "ru"}`}>
              <img
                src="/logo png 2.png"
                alt="our logo"
                className="navigation_logo"
              />
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
          <Link
              to={`/${lang}/#courses`}
              className="px-4 py-1 rounded-full text-black text-sm hover:bg-pink-200 transition-colors navbar_link"
            >
              {t("courses")}
            </Link>
            <Link
              to={`/${lang}/#about`}
              className="px-4 py-1 rounded-full text-black text-sm hover:bg-pink-200 transition-colors navbar_link"
            >
              {t("about_us")}
            </Link>
            <Link
              to={`/${lang}/#news`}
              className="px-4 py-1 rounded-full text-black text-sm hover:bg-pink-200 transition-colors navbar_link"
            >
              {t("news")}
            </Link>
            <div className="text-black text-sm relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 hover:text-gray-600 transition-colors"
              >
                {lang?.toUpperCase() || "RU"}
                <ChevronDown size={16} />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-20 bg-white shadow-lg rounded-md z-10">
                  <div className="py-1">
                    {["ru", "en", "uz"].map((lng) => (
                      <button
                        key={lng}
                        onClick={() => {
                          changeLanguage(lng);
                          setIsLangOpen(false);
                        }}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left lang_list ${
                          lang === lng ? "bg-gray-100 font-semibold" : ""
                        }`}
                      >
                        {lng.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              )}
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
            <Link
              to={`/${lang}/#courses`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
                {t("courses")}
            </Link>
            <Link
              to={`/${lang}/#about`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              {t("about_us")}
            </Link>
            <Link
              to={`/${lang}/#news`}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
            >
              {t("news")}
            </Link>
            <div className="px-3 py-2 rounded-md text-base font-medium text-gray-700">
              <div className="flex justify-between items-center">
                <span>{t("language")}</span>
                <div className="flex gap-2">
                  {["ru", "en", "uz"].map((lng) => (
                    <button
                      key={lng}
                      onClick={() => {
                        changeLanguage(lng);
                        setIsMenuOpen(false);
                      }}
                      className={`px-2 py-1 rounded ${
                        lang === lng ? "bg-gray-200" : "hover:bg-gray-100"
                      }`}
                    >
                      {lng.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
