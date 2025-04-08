import React, { useState } from "react";

export const OurMissionSection = () => {
  const [block, setBlock] = useState(false);
  
  return (
    <div className="bg-red-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left column - Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/Rectangle 9.png"
              alt="Person holding a book"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right column - Mission content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Наша миссия</h2>

            <p className="text-gray-100">
              Мы стремимся улучшить понимание каждого, предоставляя качественное
              обучение в области кибербезопасности ИТ и помогая строить карьеру
              в современном цифровом пространстве.
            </p>

            <p className="text-gray-100">
              Наша миссия — предоставить профессиональные знания и навыки для
              каждого из широкого спектра в обеспечении потребностей бизнеса. С
              помощью наших современных программ обучения мы стремимся создать
              среду, в которой передовая техническая подготовка способствует
              повышает инновации и эффективности управления риском.
            </p>
            <p
              className="mt-3 text-gray-100"
              style={{ display: block ? "block" : "none" }}
            >
              Наша миссия — предоставить профессиональные знания и навыки для
              каждого из широкого спектра в обеспечении потребностей бизнеса. С
              помощью наших современных программ обучения мы стремимся создать
              среду, в которой передовая техническая подготовка способствует
              повышает инновации и эффективности управления риском
            </p>
            <div className="mt-6">
              <button
                style={{ display: block ? "none" : "block" }}
                className="bg-white text-[#6c6b6b] font-bold font-sans hover:bg-[#e8656e] hover:text-red-800 py-2 px-8 rounded-full flex items-center transition duration-500"
                onClick={() => setBlock(!block)}
              >
                Подробнее               
              </button>
            </div>
          </div>
        </div>
        <p
          className=" text-gray-100"
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
