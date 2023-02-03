import React from "react";

interface ISkillItemProps {
  skill: string;
}

export default function SkillItem({ skill }: ISkillItemProps) {
  return (
    <div>
      <p>{skill}</p>
    </div>
  );
}
