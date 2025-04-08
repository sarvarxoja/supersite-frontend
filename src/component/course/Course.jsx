import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { TimeSelectionModal } from "./Modal";

export const CourseCard = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [courseData, setCourseData] = useState([]);


  const openModalAndCloseModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchCourse();
  }, [id]);

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
          src={`http://localhost:2222${courseData.image}`}
          alt="People collaborating at a table"
          className="w-full h-[400px] object-cover rounded"
        />
      </div>

      <div className="py-6">
        <div className="bg-blue-100 category_button text-xs text-white font-medium rounded px-2 py-1 inline-block mb-2">
          {courseData.catalog}
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-3">
          {courseData.course_title_ru}
        </h2>
        {/* Course Advantages */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-800 mb-2">Преимущества курса</h3>
          <ul className="space-y-2">
            <li className="flex items-start">{courseData.benefits_ru}</li>
          </ul>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-800 mb-2">
            Цель на который основан курс
          </h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">
                {courseData.course_objective_ru}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-medium text-gray-800 mb-2">
            Стоимость курса{" "}
            <span className="text-blue-500">${courseData.course_price}</span>
          </h3>
        </div>

        {/* CTA Button */}
        <button className="w-full  category_button text-white font-medium py-3 px-4 rounded mt-4 transition duration-200" onClick={openModalAndCloseModal}>
          Оставить заявку
        </button>
      </div>
      <TimeSelectionModal isModalOpen={isOpen} openModalAndCloseModal={openModalAndCloseModal} courseType={courseData.catalog}/>
    </div>
  );
};
