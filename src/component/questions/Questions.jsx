import axios from "axios";
import { FaqItem } from "./FaqItem";
import React, { useEffect, useState } from "react";

export const FAQAccordion = () => {
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    getQuestions();
  }, []);

  async function getQuestions() {
    try {
      let { data } = await axios.get("/questions/all?page=1&&limit=10");
      setFaqItems(data.questions)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-7xl mx-auto  mt-[30px] mb-[60px] py-6 bg-white rounded-lg px-4 md:px-8">
      <h2 className="text-xl font-bold mb-6">Часто задаваемые вопросы</h2>
      <div>
        {faqItems.map((item, index) => (

          <FaqItem key={index} question={`• ${item.question_ru}`} answer={item.answer_ru} />
        ))}
      </div>
    </div>
  );
};
