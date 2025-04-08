import { NewsSection } from "../component/news/News";
import { ContactForm } from "../component/forms/Form";
import { AboutUsSection } from "../component/about/About";
import { CourseCatalog } from "../component/courses/Courses";
import { PartnersSection } from "../component/partner/Partner";
import { Delivering } from "../component/delivering/Delivering";
import { FAQAccordion } from "../component/questions/Questions";
import { OurMissionSection } from "../component/mission/Mission";
import { VideoDeliverySection } from "../component/my_video/MyVide";
import { HeaderBanner } from "../component/header_banner/HeaderBanner";

export const MainPage = () => {
  return (
    <div>
      <HeaderBanner />
      <AboutUsSection />
      <OurMissionSection />
      <NewsSection />
      <VideoDeliverySection />
      <Delivering />
      <PartnersSection />
      <CourseCatalog />
      <ContactForm />
      <FAQAccordion />
    </div>
  );
};
