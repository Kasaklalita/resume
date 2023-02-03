import React from "react";
import { IEducation } from "../types";
import SectionTemplate from "./SectionTemplate";
import EducationItem from "./UI/EducationItem";

export default function Education() {
  const educations = [
    {
      graduatedYear: "2021",
      organizationName: "МОУ СОШ № 83",
      educationType: "Среднее (школа)",
      direction: "",
    },
    {
      graduatedYear: "2025",
      organizationName: "Московский Авиационный Институт",
      educationType: "Бакалавр",
      direction: "Информатика и вычислительная техника",
    },
  ];

  return (
    <SectionTemplate title="Образование">
      {educations.map((education: IEducation) => (
        <EducationItem {...education} />
      ))}
    </SectionTemplate>
  );
}
