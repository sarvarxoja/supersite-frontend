import React, { useState } from "react";

export const TruncateText = ({ text, maxLength }) => {
  // holatni saqlash
  const [isExpanded, setIsExpanded] = useState(false);

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
          {isExpanded ? "Секрет" : "Подробнее"}
        </button>
      </div>
    </div>
  );
};

export const TruncateTextNews = ({ text, maxLength }) => {
  // holatni saqlash
  const [isExpanded, setIsExpanded] = useState(false);

  // textni qisqartirish
  const truncatedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div>
      <p className="text-gray-600 text-sm">
        {isExpanded ? text : truncatedText}
      </p>
      <div className="flex items-center justify-between mt-auto pt-2">
        <button
          className="text-blue-600 text-sm hover:underline"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Секрет" : "Подробнее"}
        </button>
      </div>
    </div>
  );
};
