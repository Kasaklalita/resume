import React from "react";
import filledCircle from "../../assets/filledCircle.svg";

interface ISkillItemProps {
  skill: string;
}

export default function SkillItem({ skill }: ISkillItemProps) {
  return (
    <div className="flex gap-2.5 items-center">
      <img src={filledCircle} alt="" className="w-2 h-2" />
      <p className="font-light">{skill}</p>
    </div>
  );
}
