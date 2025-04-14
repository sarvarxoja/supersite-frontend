import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FormatDate } from "../../utils/Date.formatter";
// import { TruncateTextNews } from "../../utils/TextFormatter";

export const NewsCard = ({ date, image, title, description }) => {
  const maxLength = 200;
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);
  // textni qisqartirish
  const truncatedText =
    description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;

  return (
    <div className="flex flex-col md:flex-row hover:bg-white cursor-pointer bg-[#f7f3f3] rounded-lg shadow-sm mb-6 overflow-hidden hover:shadow-md transition-shadow py-3">
      <div className="flex-shrink-0 p-4 md:w-24 flex flex-col items-center justify-center border-r border-gray-100 ">
        <div className="text-red-600 font-bold text-2xl">
          <FormatDate dateString={date} />
        </div>
      </div>

      <div className="flex flex-col md:flex-row flex-grow">
        <div
          className="md:w-80 flex-shrink-0"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img
            src={`https://www.isouzbekistan.uz/api${image}`}
            alt={title}
            className="h-40 w-full object-cover rounded"
            loading="lazy"
          />
        </div>
        <div className="p-4 flex flex-col space-y-2">
          <h3 className="text-blue-600 font-medium text-lg">{title}</h3>
          <p className="text-gray-600 text-sm">
            {isExpanded ? description : truncatedText}
          </p>
          <div className="flex items-center justify-between mt-auto pt-2">
            <button
              className="text-blue-600 text-sm hover:underline"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <span>{t("secret")}</span>
              ) : (
                <span>{t("more_details")}</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
