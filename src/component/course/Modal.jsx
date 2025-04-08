import axios from "axios";
import { X } from "lucide-react";
import React, { useRef, useState } from "react";

export const TimeSelectionModal = ({
  isModalOpen,
  openModalAndCloseModal,
  courseType,
}) => {
  const modalRef = useRef(null);
  const [toTime, setToTime] = useState("");
  const [userFio, setUserFio] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDirectionDropdownOpen, setIsDirectionDropdownOpen] = useState(false);

  const directions = [`${courseType}`];

  const handleDirectionClick = (direction) => {
    setIsDirectionDropdownOpen(false);
  };

  const handleOutsideClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      openModalAndCloseModal();
    }
  };

  async function handleSubmin(e) {
    e.preventDefault();

    if (!isValidUzbekPhoneNumber(phoneNumber)) {
      return;
    }
    try {
      let { data } = await axios.post("/lids/create", {
        full_name: userFio,
        phone_number: phoneNumber,
        course_name: courseType,
        from_time: fromTime,
        to_time: toTime,
      });

      if (data.status === 201) {
        setUserFio("");
        setPhoneNumber("");
        setFromTime("");
        setToTime("");
        return openModalAndCloseModal();
      }
    } catch (error) {
      console.log(error);
    }
  }

  const isValidUzbekPhoneNumber = (number) => {
    const uzbekRegex = /^\+998\d{9}$/;
    return uzbekRegex.test(number);
  };

  return (
    <div>
      {isModalOpen && (
        <form
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleOutsideClick}
          onSubmit={handleSubmin}
        >
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="bg-red-700 text-white p-6 rounded-lg w-full max-w-md relative md:p-8 animate-fadeIn"
          >
            {/* Close button */}
            <button
              onClick={openModalAndCloseModal}
              className="absolute top-3 right-3 text-white hover:text-white/80"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-6">
              <h2 className="text-xl font-medium">
                Выберите удобное время для звонка
              </h2>
            </div>

            {/* Time Selection */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="flex items-center">
                <span className="mr-2 w-8">От</span>
                <input
                  type="text"
                  className="bg-transparent border border-white/30 rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center">
                <span className="mr-2 w-8">до</span>
                <input
                  type="text"
                  className="bg-transparent border border-white/30 rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none"
                  value={toTime}
                  onChange={(e) => setToTime(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <span className="mr-2 w-8">ФИО</span>

              <input
                type="text"
                className="bg-transparent border border-white/30 rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none"
                value={userFio}
                onChange={(e) => setUserFio(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <span className="mr-2 w-8">Ваш номер телефона</span>
              <input
                type="text"
                className={`bg-transparent border ${
                  phoneError ? "border-red-500" : "border-white/30"
                } rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none`}
                value={phoneNumber}
                onChange={(e) => {
                  const value = e.target.value;
                  setPhoneNumber(value);
                  if (!isValidUzbekPhoneNumber(value)) {
                    setPhoneError("Номер должен быть в формате: +998XXXXXXXXX");
                  } else {
                    setPhoneError("");
                  }
                }}
                placeholder="+998901234567"
                required
              />
              {phoneError && (
                <p className="text-red-400 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            <div className="relative mb-1">
              <button
                className="w-full bg-transparent text-left border border-white/30 rounded px-4 py-3 flex justify-between items-center"
                onClick={() =>
                  setIsDirectionDropdownOpen(!isDirectionDropdownOpen)
                }
                type="button"
              >
                <span>{courseType}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    isDirectionDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isDirectionDropdownOpen && (
                <div className="absolute left-0 mt-1 w-full bg-red-700 border border-white/30 rounded shadow-lg z-10">
                  <div className="p-2">
                    <div className="p-2 border-b border-white/20 font-medium">
                      Направление
                    </div>
                    {directions.map((direction, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-red-600 cursor-pointer"
                        onClick={() => handleDirectionClick(direction)}
                      >
                        {direction}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="mb-4">
              <button className="w-full  category_button text-white font-medium py-2 px-4 rounded mt-4 transition duration-200">
                Оставить заявку
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
