import "./partner.css";
import React from "react";
import Marquee from "react-fast-marquee";
import { TruncateText } from "../../utils/TextFormatter";

export const PartnersSection = () => {
  const partners = [
    { 
      name: "Microsoft", 
      logo: "microsoft-logo.svg",
      title: "Партнёр курса по кибербезопасности",
      description: "Доступ к специализированным инструментам обнаружения и предотвращения кибератак от Microsoft"
    },
    { 
      name: "OLA", 
      logo: "ola-logo.svg",
      title: "Партнёр курса по кибербезопасности",
      description: "Доступ к специализированным инструментам обнаружения и предотвращения кибератак от Microsoft"
    },
    { 
      name: "OYO", 
      logo: "oyo-logo.svg",
      title: "Партнёр курса по кибербезопасности",
      description: "Доступ к специализированным инструментам обнаружения и предотвращения кибератак от Microsoft"
    },
    { 
      name: "OYO", 
      logo: "oyo-logo.svg",
      title: "Партнёр курса по кибербезопасности",
      description: "Доступ к специализированным инструментам обнаружения и предотвращения кибератак от Microsoft"
    },
  ];

  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-800 text-xl sm:text-2xl md:text-3xl font-medium mb-6 sm:mb-8 md:mb-10 text-left">
          Наши партнеры
        </h2>
        <Marquee speed={40} gradient={false} pauseOnHover={true} direction="right">
  <div className="inline-flex gap-4">
    {partners.map((partner, index) => (
      <div key={index} className="partner-card border rounded-lg p-6 flex flex-col w-[300px]">
        <div className="h-16 flex items-center justify-center mb-4">
          <img src={partner.logo} alt={partner.name} className="h-10 object-contain" />
        </div>
        <h3 className="text-sm font-medium mb-2">{partner.title}</h3>
        <TruncateText text={partner.description} maxLength={50} />
        {/* <div className="mt-auto">
          <button className="text-blue-500 text-xs hover:underline">Подробнее</button>
        </div> */}
      </div>
    ))}
  </div>
</Marquee>
      </div>
    </div>
  );
};
