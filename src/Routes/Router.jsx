import { MainPage } from "../pages/Main";
import { DefaultPage } from "../pages/Default";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { CourseCard } from "../component/course/Course";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultPage />} />
      <Route element={<MainLayout />}>
        <Route path="/:lang" element={<MainPage />} />
        <Route path="/:lang/:id" element={<CourseCard />} />
      </Route>
    </Routes>
  );
};
