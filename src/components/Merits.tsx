import React from "react";
import SectionTemplate from "./SectionTemplate";
import SkillItem from "./UI/SkillItem";
import merit from "./../assets/merit.svg";

export default function Merits() {
  const merits = [
    "Аналитический склад ума",
    "Исполнительность",
    "Ответственность",
    "Умение работать в команде",
    "Упорство",
    "Аккуратность и внимательность",
    "Склонность к саморазвитию и повышению квалификации",
  ];

  return (
    <SectionTemplate title="Качества" icon={merit}>
      {merits.map((merit) => (
        <SkillItem key={merit} skill={merit} />
      ))}
    </SectionTemplate>
  );
}
