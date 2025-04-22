import "./about.css";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { VideoPlayer } from "../my_video/Video";

export const AboutUsSection = () => {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const [block, setBlock] = useState(false);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <div className="bg-white py-16" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main layout - responsive reverse direction */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8">
          
          {/* Text block */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-red-600">{t("about_us")}</h2>

            <p className="text-gray-700">{t("about_more")}</p>
            <p
              className="text-gray-700 mt-2"
              style={{ display: block ? "block" : "none" }}
            >
              {t("about_more_end")}
            </p>
            <button
              onClick={() => setBlock(!block)}
              className="about_more_button w-full flex items-center justify-center max-w-xs py-[10px] px-6 bg-white text-gray-600 font-medium text-lg rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
            >
              {t("more_details")}{" "}
              {block ? (
                <ChevronUp size={22} className="mt-1 ml-2" />
              ) : (
                <ChevronDown size={22} className="mt-1 ml-2" />
              )}
            </button>
          </div>

          {/* Video block */}
          <div className="">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </div>
  );
};
