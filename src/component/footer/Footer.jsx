import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <footer className="w-full bg-[#a11e29] text-white pt-[60px] pb-[30px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo section */}
          <div className="flex items-start">
            <div className="w-16 h-16 relative">
              <img
                src="/ec09d7c8-3ba8-4ab4-955a-dddf3f7bd1e3_removalai_preview.png"
                loading="lazy"
                alt="our logo"
              />
            </div>
          </div>

          {/* First column */}
          <div>
            <h3 className="font-medium mb-4">{t("catalog")}</h3>
            <ul className="space-y-2">
            <li>
                <Link
                  to={`/${lang}/#courses`}
                  className="text-sm hover:underline"
                >
                  {t("courses")}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${lang}/#about`}
                  className="text-sm hover:underline"
                >
                  {t("about_us")}
                </Link>
              </li>
              <li>
                <Link to={`/${lang}/#news`} className="text-sm hover:underline">
                  {t("news")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Second column */}
          <div>
            <h3 className="font-medium mb-4">{t("courses")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm hover:underline">
                  {t("cyberSecurity")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  ISO/IEC 27001
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:underline">
                  ISO/IEC 27002
                </a>
              </li>
            </ul>
          </div>

          {/* Third column */}
          <div>
            <h3 className="font-medium mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+9989999900" className="text-sm hover:underline">
                  +998 (99) 999-00-00
                </a>
              </li>
              <li>
                <a href="tel:+9989999999" className="text-sm hover:underline">
                  +998 (99) 999-99-99
                </a>
              </li>
            </ul>

            {/* Social media and subscription */}
          </div>
          <div>
            <h3 className="font-medium mb-4">Подписывайтесь</h3>
            <div className="flex space-x-3">
              <a href="#" className="hover:text-gray-200">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-gray-200">
                <Youtube size={18} />
              </a>
            </div>
            <div className="flex space-x-3">
              <div className="mt-20 pt-4 text-xs flex justify-end">
                <p>© 2025 - {t("reserved")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
