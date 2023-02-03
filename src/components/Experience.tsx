import React from "react";
import { IWorkExperience } from "../types";
import SectionTemplate from "./SectionTemplate";
import ExperienceItem from "./UI/ExperienceItem";

export default function Experience() {
  const experiences = [
    {
      companyName: "ОСМ Консалтинг",
      position: "Fullstack-разработчик",
      dateStarted: "Август 2022",
      dateEnded: "н. в.",
      responsibilities: [
        "Разработка и поддержка клиентских приложений",
        "Создание архитектуры приложения",
        "Рефакторинг, исправление багов",
        "Систематизация UI-элементов в существующих продуктах компании",
        "Документирование разработки",
      ],
    },
  ];
  return (
    <SectionTemplate title="Опыт работы">
      {experiences.map((experience: IWorkExperience) => (
        <ExperienceItem {...experience} />
      ))}
    </SectionTemplate>
  );
}
