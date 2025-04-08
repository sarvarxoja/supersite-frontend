import "./form.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

export const ContactForm = () => {
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
    if (!isValidUzbekPhoneNumber(formData.phoneNumber)) {
      setPhoneError("Номер должен быть в формате: +998XXXXXXXXX");
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
        alert("Заявка успешно отправлена!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form_container">
      <div className="max-w-7xl mx-auto  mt-[30px] mb-[60px]  rounded-lg px-4 md:px-8">
        <div className="flex items-center justify-center py-3">
          <div className="w-full max-w-4xl py- text-white">
            <h2 className="text-2xl font-semibold mb-1 text-[#f1cbcf]">Заявка</h2>
            <p className="mb-6 text-[#f1cbcf]">
              Оставьте заявку и мы свяжемся с вами в ближайшее время!
            </p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 text-[#f1cbcf]">
                    ФИО
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent p-2 contact_form"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2 text-[#f1cbcf]">
                    Ваш номер телефона
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      handleChange(e);
                      const val = e.target.value;
                      if (!isValidUzbekPhoneNumber(val)) {
                        setPhoneError("Номер должен быть в формате: +998XXXXXXXXX");
                      } else {
                        setPhoneError("");
                      }
                    }}
                    className={`bg-transparent border ${
                      phoneError ? "border-red-500" : "border-white/30"
                    } rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none`}
                    placeholder="+998901234567"
                    required
                  />
                  {phoneError && (
                    <p className="text-red-400 text-sm mt-1 absolute">{phoneError}</p>
                  )}
                </div>

                <div className="col-span-2">
                  <label htmlFor="time" className="block mb-2 text-[#f1cbcf]">
                    Удобное время для звонка
                  </label>
                  <div className="flex flex-col sm:flex-row gap-3 border px-2 py-2 rounded">
                    <div className="flex items-center flex-1">
                      <span className="mr-2 w-8">От</span>
                      <input
                        type="text"
                        name="fromDate"
                        value={formData.fromDate}
                        onChange={handleChange}
                        className="bg-transparent border border-white/30 rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none"
                        // placeholder="10:00"
                        required
                      />
                    </div>

                    <div className="flex items-center flex-1">
                      <span className="mr-2 w-8">До</span>
                      <input
                        type="text"
                        name="toDate"
                        value={formData.toDate}
                        onChange={handleChange}
                        className="bg-transparent border border-white/30 rounded px-3 py-2 w-full text-white placeholder-white/70 outline-none"
                        // placeholder="18:00"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="course" className="block mb-2 text-[#f1cbcf]">
                    Выбор направление курса
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full bg-transparent p-2 contact_form"
                    required
                  >
                    <option value="" disabled hidden>
                      Выберите курс
                    </option>
                    {categories.map((e, i) => (
                      <option key={i} value={e} className="bg-black text-white">
                        {e}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="comments" className="block mb-2 text-[#f1cbcf]">
                    Комментарии
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    className="w-full bg-transparent rounded p-4 text-white contact_form contact_form_comment"
                    placeholder="Ваш комментарий..."
                  ></textarea>
                </div>
              </div>

              <div className="mt-[-55px]">
                <button
                  type="submit"
                  className="border border-white px-6 py-2 rounded hover:bg-white hover:text-red-800 transition-colors"
                >
                  Отправить заявку
                </button>
              </div>
            </form>
          </div>

          <div className="hidden md:block md:w-2/5 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-2 border-white/20 animate-pulse absolute"></div>
              <div className="w-80 h-80 rounded-full border-2 border-white/10 absolute"></div>
            </div>
            <img
              src="/Rectangle 39929 1.png"
              alt="Customer Support"
              loading="lazy"
              className="absolute bottom-[-310px] right-0 object-contain z-10 h-[600px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
