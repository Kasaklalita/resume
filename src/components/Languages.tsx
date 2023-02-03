import React from "react";
import SectionTemplate from "./SectionTemplate";
import reactIcon from "../assets/react.svg";
import LanguageItem from "./UI/LanguageItem";
import { ILanguage } from "../types";

export default function Languages() {
  const languages = [
    {
      title: "Английский",
      level: "B2 = Выше среднего",
    },
    {
      title: "Японский",
      level: "А2 = Базовый",
    },
  ];
  return (
    <div>
      <SectionTemplate title="Языки" icon={reactIcon}>
        {languages.map((language: ILanguage) => (
          <LanguageItem {...language} />
        ))}
      </SectionTemplate>
    </div>
  );
}
