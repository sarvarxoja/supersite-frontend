import "./category.css";
import axios from "axios";
import { Pagination } from "./Paginaiton";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CourseCatalog = () => {
  const [page, setPage] = useState(1);
  const [paginationData, setPaginationData] = useState([]);
  const [activeTab, setActiveTab] = useState("Все");

  const [categories, setCategories] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getCourses();
  }, [page]);

  async function getCategories() {
    try {
      let { data } = await axios.get("/courses/get/catalog");
      setCategories(data.catalog);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCourses() {
    try {
      let { data } = await axios.get(`/courses/all?page=${page}&limit=6`);
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
    <div className="max-w-7xl mx-auto py-4 px-4 md:px-8">
      <h1 className="text-2xl font-medium mb-6">Каталог курсов</h1>

      {/* Category Tabs */}
      <div className="overflow-x-auto whitespace-nowrap mb-8">
        <div className="flex space-x-1 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded text-sm ${
                activeTab === category
                  ? "text-blue-500 bg-[#efebeb]"
                  : "bg-[#efebeb] text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="border rounded overflow-hidden shadow-sm"
          >
            <img
              src={`http://localhost:2222${course.image}`}
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
                {course.course_title_uz}
              </h3>
              <p className="text-gray-600 text-xs mb-3">
                {course.course_objective_ru}
              </p>
              <div className="flex justify-between items-center">
                <Link className="text-blue-500 text-xs" to={`/${course.id}`}>Подробнее →</Link>
              </div>
            </div>
          </div>
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
