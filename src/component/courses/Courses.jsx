import "./category.css";
import axios from "axios";
import { Pagination } from "./Paginaiton";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const CourseCatalog = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState(null);
  const [paginationData, setPaginationData] = useState([]);

  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  useEffect(() => {
    getCategories();
  }, [lang]);

  useEffect(() => {
    getCourses();
  }, [page, content, lang]);

  async function getCategories() {
    try {
      let { data } = await axios.get("/courses/get/catalog");
      let selectedCatalog = [];

      if (lang === "ru") {
        selectedCatalog = data.catalog_rus?.filter(
          (item) => item && item !== "catalog_rus"
        );

        // Agar catalog_rus mavjud bo'lmasa yoki bo'sh bo'lsa, catalog dan olish
        if (!selectedCatalog || selectedCatalog.length === 0) {
          selectedCatalog =
            data.catalog?.filter((item) => item && item !== "catalog") || [];
        }
      } else if (lang === "en") {
        selectedCatalog =
          data.catalog?.filter((item) => item && item !== "catalog") || [];
      } else {
        selectedCatalog =
          data.catalog_uzb?.filter((item) => item && item !== "catalog_uzb") ||
          [];
      }

      setCategories([
        lang === "ru" ? "Все" : lang === "en" ? "All" : "Barchasi",
        ...selectedCatalog,
      ]);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCourses() {
    try {
      let data;
      if (content) {
        const res = await axios.get(
          `/courses/get/by/catalog?limit=6&page=${page}&catalog=${content}`
        );
        data = res.data;
      } else {
        const res = await axios.get(`/courses/all?page=${page}&limit=6`);
        data = res.data;
      }

      setPaginationData(data);
      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChangePage(currentPage) {
    setPage(currentPage);
  }

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto" id="courses">
        <h1 className="text-2xl font-medium mb-6">{t("course_catalog")}</h1>

        {/* Category Tabs */}
        <div className="overflow-x-auto whitespace-nowrap mb-8">
          <div className="flex space-x-1 pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  const isAll =
                    category === "Все" ||
                    category === "All" ||
                    category === "Barchasi";
                  setContent(isAll ? null : category);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded text-sm ${
                  content === category ||
                  (category === "Все" && content === null)
                    ? "text-blue-500 bg-[#efebeb]"
                    : "bg-[#efebeb] text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
            key={course.id}
            to={`/${lang}/${course.id}`}
            className="border rounded overflow-hidden shadow-sm"
          >
            <img
              src={`https://www.isouzbekistan.uz/api${course.image}`}
              loading="lazy"
              className="w-full h-48 object-cover"
            />
            <div className="px-4 py-7">
              <div className="mb-3">
                <span className="category_button text-white py-2 px-4 rounded text-xs font-medium">
                  {course.catalog}
                </span>
              </div>
              <h3 className="font-medium text-sm mb-2">
                {lang === "en"
                  ? course.course_title_eng
                  : lang === "ru"
                  ? course.course_title_ru
                  : course.course_title_uz}
              </h3>
              <p className="text-gray-600 text-xs mb-3">
                {lang === "en"
                  ? course.course_objective_eng
                  : lang === "ru"
                  ? course.course_objective_ru
                  : course.course_objective_uz}
              </p>
              <div className="flex justify-between items-center">
                <Link
                  className="text-blue-500 text-xs"
                  to={`/${lang}/${course.id}`}
                >
                  {t("more_details")} →
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination
          currentPage={paginationData.currentPage}
          totalPages={paginationData.totalPages}
          onPageChange={handleChangePage}
        />
      </div>
    </div>
  );
};
