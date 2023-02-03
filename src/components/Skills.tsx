import React from "react";
import SectionTemplate from "./SectionTemplate";
import SkillItem from "./UI/SkillItem";

export default function Skills() {
  const skills = ["Python", "PostgreSQL", "Django + DRF"];

  return (
    <SectionTemplate title="Навыки">
      {skills.map((skill) => (
        <SkillItem skill={skill} />
      ))}
    </SectionTemplate>
  );
}
