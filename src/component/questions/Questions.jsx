import axios from "axios";
import { FaqItem } from "./FaqItem";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";

export const FAQAccordion = () => {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    try {
      let { data } = await axios.get("/questions/all?page=1&&limit=10");
      setFaqItems(data.questions);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-7xl mx-auto  mt-[30px] mb-[60px] py-6 bg-white rounded-lg px-4 md:px-8">
      <h2 className="text-xl font-bold mb-6">{t("faq")}</h2>
      <div>
        {faqItems.map((item, index) => (
          <FaqItem
            key={index}
            question={`• ${lang === "en"
              ? item.question_eng
              : lang === "ru"
              ? item.question_ru
              : item.question_uz}`}
            answer={lang === "en"
              ? item.answer_eng
              : lang === "ru"
              ? item.answer_ru
              : item.answer_uz}
          />
        ))}
      </div>
    </div>
  );
};
