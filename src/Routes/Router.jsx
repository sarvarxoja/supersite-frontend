import { MainPage } from "../pages/Main";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { CourseCard } from "../component/course/Course";

export const Router = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CourseCard />} />
      </Route>
    </Routes>
  );
};
