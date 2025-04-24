import { NewsSection } from "../component/news/News";
import { ContactForm } from "../component/forms/Form";
import { AboutUsSection } from "../component/about/About";
import { CourseCatalog } from "../component/courses/Courses";
import { PartnersSection } from "../component/partner/Partner";
import { TimeSelectionModal } from "../component/course/Modal";
import { Delivering } from "../component/delivering/Delivering";
import { FAQAccordion } from "../component/questions/Questions";
import { OurMissionSection } from "../component/mission/Mission";
import { HeaderBanner } from "../component/header_banner/HeaderBanner";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { useEffect } from "react";
import { TimeSelectionMainModal } from "../component/course/MainModal";

export const MainPage = () => {
  const { lang } = useParams();
  const { i18n} = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true); // 4 soniyadan keyin true bo'ladi
    }, 4000); // 4000 millisekund = 4 soniya

    return () => clearTimeout(timer); // komponent unmount bo'lsa, timer tozalanadi
  }, []); 

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  const openModalAndCloseModal = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchCatalogs()
  }, [lang])

  async function fetchCatalogs() {
    try {
      const { data } = await axios.get("/courses/get/catalog");
      let selectedCatalog = [];
  
      // Universal filter: null, undefined, "null", va "catalog" kabi nomlarni chiqarib tashlash
      const isValidCategory = (item) => {
        return (
          item &&                            // null, undefined, bo‘sh string emas
          item !== "null" &&                 // "null" string emas
          !item.toLowerCase().includes("catalog") // "catalog" so‘zini o‘z ichiga olmaydi
        );
      };
  
      if (lang === "ru") {
        selectedCatalog = (data.catalog_rus || []).filter(isValidCategory);
  
        if (!selectedCatalog.length) {
          selectedCatalog = (data.catalog || []).filter(isValidCategory);
        }
      } else if (lang === "en") {
        selectedCatalog = (data.catalog || []).filter(isValidCategory);
      } else {
        selectedCatalog = (data.catalog_uzb || []).filter(isValidCategory);
      }
  
      setCategories(selectedCatalog);
    } catch (error) {
      console.log(error);
    }
  }
  
  
  return (
    <div>
      <TimeSelectionMainModal isModalOpen={isOpen} openModalAndCloseModal={openModalAndCloseModal} courseType={categories} />
      <HeaderBanner />
      <AboutUsSection />
      <OurMissionSection />
      <NewsSection />
      {/* <VideoDeliverySection /> */}
      <Delivering />
      <CourseCatalog />
      <ContactForm />
      <PartnersSection />
      <FAQAccordion />
    </div>
  );
};
