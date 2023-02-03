import React from "react";
import SectionTemplate from "./SectionTemplate";
import SkillItem from "./UI/SkillItem";

export default function Skills() {
  const skills = [
    "Python",
    "PostgreSQL",
    "Django + DRF",
    "FastAPI",
    "Docker",
    "React",
    "Vue",
    "JavaScript",
    "HTML",
    "CSS + SCSS + SASS",
    "Tailwind, Bulma",
  ];

  return (
    <SectionTemplate title="Навыки">
      {skills.map((skill) => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </SectionTemplate>
  );
}
