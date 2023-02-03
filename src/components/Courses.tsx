import React from "react";
import { ICourse } from "../types";
import SectionTemplate from "./SectionTemplate";
import CourseItem from "./UI/CourseItem";
import chart from "./../assets/chart.svg";

export default function Courses() {
  const courses = [
    {
      graduatedYear: "2021",
      courseName: "Python Django - The Practical Guide",
      organization: "Udemy",
    },
    {
      graduatedYear: "2022",
      courseName: "React - The Complete Guide",
      organization: "Udemy",
    },
    {
      graduatedYear: "2022",
      courseName: "Летний интенсив",
      organization: "«Школа 21» — уникальный образовательный проект Сбера",
    },
  ];
  return (
    <SectionTemplate title="Курсы" icon={chart}>
      {courses.map((course: ICourse) => (
        <CourseItem key={course.courseName} {...course} />
      ))}
    </SectionTemplate>
  );
}
