import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { TimeSelectionModal } from "./Modal";
import { useTranslation } from "react-i18next";

export const CourseCard = () => {
  const { id, lang } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  const openModalAndCloseModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchCourse();
  }, [id, lang]);

  async function fetchCourse() {
    try {
      let { data } = await axios.get(`/courses/by/${id}`);
      console.log(data.data);
      setCourseData(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);


  return (
    <div className="max-w-7xl mx-auto  px-4  mt-[30px] mb-[60px] bg-white">
      <div className="w-full">
        <img
          src={`https://www.isouzbekistan.uz/api${courseData.image}`}
          loading="lazy"
          alt="People collaborating at a table"
          className="w-full h-[400px] object-cover rounded"
        />
      </div>

      <div className="py-6">
        <div className="bg-blue-100 category_button text-xs text-white font-medium rounded px-2 py-1 inline-block mb-6">
          {lang === "en"
            ? courseData.catalog
            : lang === "ru"
            ? courseData.catalog_rus
            : courseData.catalog_uzb}
        </div>

        <h2 className="text-lg font-[500] text-gray-800 mb-2 text-[30px]">
          {lang === "en"
            ? courseData.course_title_eng
            : lang === "ru"
            ? courseData.course_title_ru
            : courseData.course_title_uz}
        </h2>
        <p>
          {lang === "en"
            ? courseData.course_objective_eng
            : lang === "ru"
            ? courseData.course_objective_ru
            : courseData.course_objective_uz}
        </p>

        <div className="mt-6 mb-6">
          <h2 className="text-lg font-[500] text-gray-800 mb-2 text-[30px]">
            {lang === "en"
              ? courseData.objective_title_eng
              : lang === "ru"
              ? courseData.objective_title_ru
              : courseData.objective_title_uz}
          </h2>
          <p>
            {lang === "en"
              ? courseData.benefits_eng
              : lang === "ru"
              ? courseData.benefits_ru
              : courseData.benefits_uz}
          </p>
        </div>

        <div className="mt-6 mb-6">
          <h2 className="text-lg font-[500] text-gray-800 mb-2 text-[30px]">
            {lang === "en"
              ? courseData.end_title_eng
              : lang === "ru"
              ? courseData.end_title_ru
              : courseData.end_title_uz}
          </h2>
          <p>
            {lang === "en"
              ? courseData.end_info_eng
              : lang === "ru"
              ? courseData.end_info_ru
              : courseData.end_info_uz}
          </p>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-gray-800 mb-2">
            {t("course_price")}{" "}
            <span className="text-blue-500">${courseData.course_price}</span>
          </h3>
        </div>

        {/* CTA Button */}
        <button
          className="w-full  category_button text-white font-medium py-3 px-4 rounded mt-4 transition duration-200"
          onClick={openModalAndCloseModal}
        >
          {t("submit_request")}
        </button>
      </div>
      <TimeSelectionModal
        isModalOpen={isOpen}
        openModalAndCloseModal={openModalAndCloseModal}
        courseType={lang === "en"
          ? courseData.catalog
          : lang === "ru"
          ? courseData.catalog_rus
          : courseData.catalog_uzb}
      />
    </div>
  );
};
