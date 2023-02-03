import React from "react";
import SectionTemplate from "./SectionTemplate";
import LanguageItem from "./UI/LanguageItem";
import { ILanguage } from "../types";
import earth from "./../assets/earth.svg";

export default function Languages() {
  const languages = [
    {
      title: "Английский",
      level: "B2 - Выше среднего",
    },
    {
      title: "Японский",
      level: "А2 - Базовый",
    },
  ];
  return (
    <div>
      <SectionTemplate title="Языки" icon={earth}>
        {languages.map((language: ILanguage) => (
          <LanguageItem key={language.title} {...language} />
        ))}
      </SectionTemplate>
    </div>
  );
}
