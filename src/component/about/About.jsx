import "./about.css";
import React, { useState } from "react";

export const AboutUsSection = () => {
  const [block, setBlock] = useState(false);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left column - Text content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-2xl font-bold text-red-600">О нас</h2>

            <p className="text-gray-700">
              Мы команда опытных специалистов, способных выполнять
              информационные проекты и внедрять инновационные решения в области
              программирования.
            </p>

            <p className="text-gray-700">
              Наша компания предлагает широкий спектр услуг по разработке и
              поддержке программного обеспечения, помогая вашему бизнесу выйти
              на новый уровень.
            </p>

            <p className="text-gray-700">
              Мы используем передовые технологии и методики, современные
              инструменты и практические тренинги.
            </p>
            <p
              className="text-gray-700 mt-2"
              style={{ display: block ? "block" : "none" }}
            >
              Наша миссия — предоставить профессиональные знания и навыки для
              каждого из широкого спектра в обеспечении потребностей бизнеса. С
              помощью наших современных программ обучения мы стремимся создать
              среду, в которой передовая техническая подготовка способствует
              повышает инновации и эффективности управления риском
            </p>
            <button
              style={{ display: block ? "none" : "block" }}
              onClick={() => setBlock(!block)}
              className="about_more_button w-full max-w-xs py-[10px] px-6 bg-white text-gray-600 font-medium text-lg rounded-full shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all duration-200"
            >
              Подробнее
            </button>
          </div>

          {/* Right column - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/Rectangle 6.png"
              alt="Team working together"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <p
          className="text-gray-700 mt-2"
          style={{ display: block ? "block" : "none" }}
        >
          Наша миссия — предоставить профессиональные знания и навыки для
          каждого из широкого спектра в обеспечении потребностей бизнеса. С
          помощью наших современных программ обучения мы стремимся создать
          среду, в которой передовая техническая подготовка способствует
          повышает инновации и эффективности управления риском
        </p>
      </div>
    </div>
  );
};
