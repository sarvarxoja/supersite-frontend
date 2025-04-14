import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const TruncateText = ({ text, maxLength }) => {
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
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div className="max-w-lg">
      <p className="text-xs text-gray-600 mb-4">
        {isExpanded ? text : truncatedText}
      </p>
      <div className="mt-auto">
        <button
          className="text-blue-500 text-xs hover:underline"
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
  );
};