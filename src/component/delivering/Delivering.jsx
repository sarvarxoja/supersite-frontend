import "./delivering.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Delivering = () => {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <div className="bg-red-800 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl mb-4">{t("achievement")}</h2>

        {/* 3 ta card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Card 1 */}
          <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a">
            <div className="text-gray-200 number_font text-right">01</div>
            <div className="relative z-10">
              <h3 className="text-red-800 font-medium mt-6 mb-3">
                {t("01_avm_title")}
              </h3>
              <p className="text-sm text-gray-700">{t("01_avm_des")}</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a">
            <div className="text-gray-200 number_font text-right">02</div>
            <div className="relative z-10">
              <h3 className="text-red-800 font-medium mt-6 mb-3">
                {t("02_avm_title")}
              </h3>
              <p className="text-sm text-gray-700">{t("02_avm_des")}</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a">
            <div className="text-gray-200 number_font text-right">03</div>
            <div className="relative z-10">
              <h3 className="text-red-800 font-medium mt-6 mb-3">
                {t("03_avm_title")}
              </h3>
              <p className="text-sm text-gray-700">{t("03_avm_des")}</p>
            </div>
          </div>

          {/* Card 4 va 5 markazda joylashgan */}
          <div className="md:col-span-3 flex justify-center gap-4 flex-wrap">
            {/* Card 4 */}
            <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a w-full md:w-[390px]">
              <div className="text-gray-200 number_font text-right">04</div>
              <div className="relative z-10">
                <h3 className="text-red-800 font-medium mt-6 mb-3">
                  {t("04_avm_title")}
                </h3>
                <p className="text-sm text-gray-700">{t("04_avm_des")}</p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a w-full md:w-[390px]">
              <div className="text-gray-200 number_font text-right">05</div>
              <div className="relative z-10">
                <h3 className="text-red-800 font-medium mt-6 mb-3">
                  {t("05_avm_title")}
                </h3>
                <p className="text-sm text-gray-700">{t("05_avm_des")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
