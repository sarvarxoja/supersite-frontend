import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

// import PhotoA from "../../../public/Rectangle 39925.png";
// import PhotoB from "../../../public/Rectangle 39926.png";
// import PhotoC from "../../../public/Rectangle 4.png";

// Mock carousel data - replace with your actual images
const carouselImages = [
  {
    id: 1,
    url: "/hbannter1.jpg", // Public papkadagi to‘g‘ri yo‘l
    alt: "Person studying with a notebook and coffee",
  },
  {
    id: 2,
    url: "/hbanner2.jpg",
    alt: "Student working on laptop",
  },
  {
    id: 3,
    url: "/Rectangle 39925.png",
    alt: "Person studying with a notebook and coffee",
  },
];

export const HeaderBanner = () => {
  const swiperRef = useRef(null);

  const { t } = useTranslation();

  return (
    <div className="relative mx-auto overflow-hidden">
      {/* Navigation arrows */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-1 rounded-full bg-white/70 hover:bg-white text-gray-800"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-1 rounded-full bg-white/70 hover:bg-white text-gray-800"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: function (index, className) {
            return `<span class="${className} w-2 h-2 bg-white/50 rounded-full hover:bg-white"></span>`;
          },
        }}
        className="my_carousel header_responsive_img"
      >
        {carouselImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt={image.alt}
                loading="lazy"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <a href="#form" className="block responsive_cee_button cursor-pointer bg-pink-50 text-gray-800 py-[8px] px-6 rounded-full w-[200px] font-medium text-center shadow-sm border border-pink-100 main_enter_button">
                  {t("enroll_in_a_course")}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination container */}

      <div className="swiper-pagination absolute bottom-4 swipper_pages"></div>
    </div>
  );
};
