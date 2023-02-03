import React from "react";

interface ISkillItemProps {
  skill: string;
}

export default function SkillItem({ skill }: ISkillItemProps) {
  return (
    <div>
      <p className="font-light">{skill}</p>
    </div>
  );
}
