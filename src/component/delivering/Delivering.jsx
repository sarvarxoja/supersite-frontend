import React from "react";
import "./delivering.css";
import { ArrowUpRight } from "lucide-react";

export const Delivering = () => {
  return (
    <div className="bg-red-800 px-4 py-8">
      <div className="max-w-7xl mx-auto ">
      <h2 className="text-white text-2xl mb-4">Достижение</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a">
          <div className="text-gray-200 number_font">01</div>
          <div className="absolute top-4 right-4">
            <ArrowUpRight className="w-6 h-6 text-gray-200 top_icon_css" />
          </div>
          <div className="relative z-10">
            <h3 className="text-red-800 font-medium mt-6 mb-3">
              Статистика успеха
            </h3>
            <p className="text-sm text-gray-700">
              Более 1000 клиентов используют наш сервис. Процент продаж вырос на
              200% только за последний квартал благодаря нашим решениям.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a">
          <div className="text-gray-200  number_font">02</div>
          <div className="absolute top-4 right-4">
            <ArrowUpRight className="w-6 h-6 text-gray-200 top_icon_css" />
          </div>
          <div className="relative z-10">
            <h3 className="text-red-800 font-medium mt-6 mb-3">
              Регуляция и доверие
            </h3>
            <p className="text-sm text-gray-700">
              Лицензия на все услуги от контролирующих органов. Обслуживаем
              клиентов с 2008 года. Соответствие всем международным стандартам
              ISO.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a">
          <div className=" text-gray-200  number_font">03</div>
          <div className="absolute top-4 right-4">
            <ArrowUpRight className="w-6 h-6 text-gray-200 top_icon_css" />
          </div>
          <div className="relative z-10">
            <h3 className="text-red-800 font-medium mt-6 mb-3">
              Мировой успех
            </h3>
            <p className="text-sm text-gray-700">
              Наши услуги доступны клиентам из 150 стран мира. Международные
              партнеры на всех континентах обеспечивают стабильный сервис.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Card 4 */}
        <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a">
          <div className=" text-gray-200 number_font">04</div>
          <div className="absolute top-4 right-4">
            <ArrowUpRight className="w-6 h-6 text-gray-200 top_icon_css" />
          </div>
          <div className="relative z-10">
            <h3 className="text-red-800 font-medium mt-6 mb-3">
              Возможности роста
            </h3>
            <p className="text-sm text-gray-700">
              Более 500 видов продукции и уникальных решений. Обновление
              каталога каждые 3 месяца. Индивидуальный подход к заказам любой
              сложности для каждого клиента.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-lg relative overflow-hidden shadow-md card_a">
          <div className=" text-gray-200 number_font">05</div>
          <div className="absolute top-4 right-4">
            <ArrowUpRight className="w-6 h-6 text-gray-200 top_icon_css" />
          </div>
          <div className="relative z-10">
            <h3 className="text-red-800 font-medium mt-6 mb-3">
              Сертификаты и стандарты
            </h3>
            <p className="text-sm text-gray-700">
              Соответствие всем международным стандартам качества ISO 9001.
              Сертификаты безопасности и экологичности продукции.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
