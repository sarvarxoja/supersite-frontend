import axios from "axios";
import { NewsCard } from "./NewCard";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const NewsSection = () => {
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      let { data } = await axios.get("/news/all?page=1&limit=5");
      setNewsItems(data.news);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4 mt-8" id="news">
      <h2 className="text-[30px] font-[600] mb-4 mt-10">{t("news")}</h2>

      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            date={item.createdAt}
            image={item.image}
            title={
              lang === "en"
                ? item.news_title_eng
                : lang === "ru"
                ? item.news_title_ru
                : item.news_title_uz
            }
            description={
              lang === "en"
                ? item.news_about_eng
                : lang === "ru"
                ? item.news_about_ru
                : item.news_title_uz
            }
          />
        ))}
      </div>
    </div>
  );
};
