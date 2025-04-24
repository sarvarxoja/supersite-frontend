import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const OurMissionSection = () => {
  const [block, setBlock] = useState(false);

  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <div className="bg-red-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row  gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/photo_2025-04-22_21-07-53.jpg"
              alt="Person holding a book"
              loading="lazy"
              className="w-full rounded-lg shadow-lg h-[300px] object-cover"
            />
          </div>

          {/* Right column - Mission content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">{t("our_mission")}</h2>

            <p className="text-gray-100">{t("mission_more")}</p>
            <div className="mt-6">
            <p
          className=" text-gray-100 mb-4 "
          style={{ display: block ? "block" : "none" }}
        >
          {t("mission_end")}
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
          </div>
        </div>
      </div>
    </div>
  );
};
