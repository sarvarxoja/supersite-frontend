import axios from "axios";
import { NewsCard } from "./NewCard";
import React, { useEffect, useState } from "react";

export const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      let { data } = await axios.get("/news/all?page=1&limit=7");
      setNewsItems(data.news);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-6">Новости</h2>

      <div className="space-y-6">
        {newsItems.map((item, index) => (
          <NewsCard
            key={index}
            date={item.createdAt}
            image={item.image}
            title={item.news_title_eng}
            description={item.news_about_uz}
          />
        ))}
      </div>
    </div>
  );
};
