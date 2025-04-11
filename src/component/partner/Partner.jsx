import "./partner.css";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { TruncateText } from "../../utils/TextFormatter";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PartnersSection = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/Microsoft Logo.png",
      title: "Партнёр курса по кибербезопасности",
      description:
        "Доступ к передовым технологиям – использование облачных решений Microsoft Azure для кибербезопасности.",
    },
    {
      name: "OLA",
      logo: "/OLA Logo.png",
      title: "Партнёр курса по кибербезопасности",
      description:
        "Доступ к передовым технологиям – использование облачных решений Microsoft Azure для кибербезопасности.",
    },
    {
      name: "OYO",
      logo: "/OYO Logo.png",
      title: "Партнёр курса по кибербезопасности",
      description:
        "Доступ к передовым технологиям – использование облачных решений Microsoft Azure для кибербезопасности.",
    },
    {
      name: "OYO",
      logo: "/Microsoft Logo.png",
      title: "Партнёр курса по кибербезопасности",
      description:
        "Доступ к специализированным инструментам обнаружения и предотвращения кибератак от Microsoft",
    },
  ];

  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 md:mb-10 text-left">
          {t("partners")}
        </h2>
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
          direction="right"
        >
          <div className="inline-flex gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="partner-card border rounded-lg p-6 flex flex-col w-[300px]"
              >
                <div className="h-32 flex items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    loading="lazy"
                    className="h-52 object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium mb-2">{partner.title}</h3>
                <TruncateText text={partner.description} maxLength={50} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
