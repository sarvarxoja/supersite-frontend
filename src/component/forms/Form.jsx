import "./form.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

export const ContactForm = () => {
  const [load, setLoad] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    course: "",
    comments: "",
    fromDate: "",
    toDate: "",
  });

  const { lang } = useParams();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get("/courses/get/catalog");
      setCategories(data.catalog || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidUzbekPhoneNumber = (number) => {
    const uzbekRegex = /^\+998\d{9}$/;
    return uzbekRegex.test(number);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoad(true);

    if (!isValidUzbekPhoneNumber(formData.phoneNumber)) {
      setPhoneError("Номер должен быть в формате: +998XXXXXXXXX");
      return;
    }

    if (setLoad === true) {
      return;
    }

    try {
      const { data } = await axios.post("/lids/create", {
        full_name: formData.name,
        phone_number: formData.phoneNumber,
        course_name: formData.course,
        from_time: formData.fromDate,
        to_time: formData.toDate,
        comment: formData.comments,
      });

      if (data.status === 201) {
        setFormData({
          name: "",
          phoneNumber: "",
          course: "",
          comments: "",
          fromDate: "",
          toDate: "",
        });
        setPhoneError("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="form_container">
      <div className="max-w-7xl mx-auto md:py-16 px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="w-full md:w-3/5 lg:w-2/3 text-white">
            <h2 className="text-3xl font-bold mb-2 text-white">{t("request")}</h2>
            <p className="mb-8 text-gray-100 text-lg">
              {t("leave_a_request")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-white font-medium"
                  >
                    {t("full_name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div className="form-group">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-white font-medium"
                  >
                    {t("email")}
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      handleChange(e);
                      const val = e.target.value;
                      if (val && !isValidUzbekPhoneNumber(val)) {
                        setPhoneError(
                          "Номер должен быть в формате: +998XXXXXXXXX"
                        );
                      } else {
                        setPhoneError("");
                      }
                    }}
                    className={`input-field ${phoneError ? "error" : ""}`}
                    placeholder="+998901234567"
                    required
                  />
                  {phoneError && (
                    <p className="text-red-300 text-sm mt-1 absolute">
                      {phoneError}
                    </p>
                  )}
                </div>
                <div className="form-group">
                  <label
                    htmlFor="course"
                    className="block mb-2 text-white font-medium"
                  >
                    {t("choose_course_direction")}
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="select-field"
                    required
                  >
                    <option value="" disabled hidden>
                      {t("choose_course_direction")}
                    </option>
                    {categories.map((e, i) => (
                      <option key={i} value={e} className="text-gray-800">
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label
                    htmlFor="comments"
                    className="block mb-2 text-white font-medium"
                  >
                    {t("comments")}
                  </label>
                  <input
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    className="textarea-field"
                    placeholder="Ваш комментарий..."
                  ></input>
                </div>
              </div>
              <div className="col-span-1 md:col-span-2">
                <label
                  htmlFor="time"
                  className="block mb-2 text-white font-medium"
                >
                  {t("convenient_time")}
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center flex-1">
                    <span className="mr-2 text-white">{t("from")}</span>
                    <input
                      type="time"
                      name="fromDate"
                      value={formData.fromDate}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="10:00"
                      required
                    />
                  </div>

                  <div className="flex items-center flex-1">
                    <span className="mr-2 text-white">{t("to")}</span>
                    <input
                      type="time"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleChange}
                      className="input-field"
                      placeholder="18:00"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <button type="submit" className="submit-button">
                  {load === false ? <span>{t("send_request")}</span> : "Loading..."}
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:block md:w-2/5 lg:w-1/3 relative mt-8 md:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-2 border-white/20 animate-pulse absolute"></div>
              <div className="w-80 h-80 rounded-full border-2 border-white/10 absolute"></div>
            </div>
            <img
              src="/Rectangle 39929 1.png"
              alt="Customer Support"
              loading="lazy"
              className="relative z-10  operator_image object-contain mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
