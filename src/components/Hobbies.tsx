import React from "react";
import SectionTemplate from "./SectionTemplate";
import SkillItem from "./UI/SkillItem";
import heart from "./../assets/heart.svg";

export default function Hobbies() {
  const hobbies = [
    "Изучение японского языка (подтверждается документально)",
    "Изучение английского языка",
    "3D-моделирование",
    "Чтение книг",
  ];

  return (
    <SectionTemplate title="Хобби" icon={heart}>
      {hobbies.map((hobby) => (
        <SkillItem key={hobby} skill={hobby} />
      ))}
    </SectionTemplate>
  );
}
