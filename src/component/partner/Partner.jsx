import "./partner.css";
import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { TruncateText } from "../../utils/TextFormatter";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const PartnersSection = () => {
  const partners = [
    {
      name: "Uzbekistan gerb",
      logo: "/photo_2025-04-24_22-26-42.jpg",
      title: "uz_partner_title",
      description:
        "uz_partner_bio",
    },
    {
      name: "PECB LOGO",
      logo: "/photo_2025-04-24_22-25-27.jpg",
      title: "pecb_partner_title",
      description:
        "pecb_partner_bio",
    },
    {
      name: "IAF LOGO",
      logo: "/image_2025-04-23_14-00-23.png",
      title: "iaf_partner_title",
      description:
        "IAF CertSearch был создан Международным форумом по аккредитации и его членами для проверки аккредитованных сертификатов со всего мира.IAF CertSearch — это глобальная база данных, в которой пользователи могут искать и проверять статус аккредитованных сертификатов, выданных органом по сертификации, аккредитованным органом по аккредитации, подписавшим IAF, в соответствии с основной областью применения ISO/ IEC 17021 - 1.",
    },
    {
      name: "OZAK LOGO",
      logo: "/photo_2021-03-13_13-16-14.jpg",
      title: "ozak_partner_title",
      description:
        "ozak_partner_bio",
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
                    className="partners_logo object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium mb-2">{t(partner.title)}</h3>
                <TruncateText text={t(partner.description)} maxLength={50} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};
