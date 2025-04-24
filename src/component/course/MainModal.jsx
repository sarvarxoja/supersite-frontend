import axios from "axios";
import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const TimeSelectionMainModal = ({
  isModalOpen,
  openModalAndCloseModal,
  courseType,
}) => {
  const modalRef = useRef(null);
  const [load, setLoad] = useState(false);
  const [toTime, setToTime] = useState("");
  const [userFio, setUserFio] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isDirectionDropdownOpen, setIsDirectionDropdownOpen] = useState(false);
  const [selectedCourseType, setSelectedCourseType] = useState("");

  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  const directions = [courseType];

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

    setLoad(true)

    if (load === true) {
      return
    }

    if (!isValidUzbekPhoneNumber(phoneNumber)) {
      return;
    }
    try {
      let { data } = await axios.post("/lids/create", {
        full_name: userFio,
        phone_number: phoneNumber,
        course_name: selectedCourseType,
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
    } finally {
      setLoad(false)
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
          <div
            ref={modalRef}
            className="bg-[#A11E29] text-white p-6 rounded-lg w-full max-w-md relative md:p-8 animate-fadeIn"
          >
            {/* Close button */}
            <button
              onClick={openModalAndCloseModal}
              className="absolute top-3 right-3 text-white hover:text-white/80"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-5">
              <h2 className="text-lg font-semibold">{t("request")}</h2>
            </div>

            <div className="bg-[#9e2b34]  py-2 px-2 rounded">
              <div className="text-center mb-6">
                <h2 className="text-xl font-medium">
                  {t("convenient_time")}
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mb-6 pl-6">
                <div className="flex items-center">
                  <span className="mr-2 w-8">{t("from")}</span>
                  <input
                    type="time"
                    className="bg-transparent border border-white/30 rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none"
                    value={fromTime}
                    onChange={(e) => setFromTime(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-center">
                  <span className="mr-2 w-8">{t("to")}</span>
                  <input
                    type="time"
                    className="bg-transparent border border-white/30 rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none"
                    value={toTime}
                    onChange={(e) => setToTime(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <span className="mr-2 w-8">{t("full_name")}</span>

                <input
                  type="text"
                  className="bg-transparent border border-white/30 rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none"
                  value={userFio}
                  onChange={(e) => setUserFio(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4">
                <span className="mr-2 w-8">{t("email")}</span>
                <input
                  type="text"
                  className={`bg-transparent border ${phoneError ? "border-red-500" : "border-white/30"
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

              <div className="mb-4">
  <select
    value={selectedCourseType}
    onChange={(e) => setSelectedCourseType(e.target.value)}
    className="w-full  border border-white/30 rounded px-3 py-2 text-black outline-none"
    required
  >
    {courseType.map((type, idx) => (
      <option key={idx} value={type}>
        {type}
      </option>
    ))}
  </select>
</div>
              <div className="mb-4">
                <button className="w-full  category_button text-white font-medium py-2 px-4 rounded mt-4 transition duration-200">
                  {load === false ? (
                    <span>{t("send_request")}</span>
                  ) : (
                    "Loading..."
                  )}
                </button>
              </div>
            </div>
            {/* Time Selection */}
          </div>
        </form>
      )}
    </div>
  );
};
