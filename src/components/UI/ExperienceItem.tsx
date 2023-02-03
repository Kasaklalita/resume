import React from "react";
import { IWorkExperience } from "../../types";

export default function ExperienceItem(experience: IWorkExperience) {
  return (
    <div className="flex">
      <div className="w-44 text-gray-400 shrink-0">
        {experience.dateStarted} — {experience.dateEnded}
      </div>
      <div>
        <div>
          <span className="text-[#28aee4] font-bold">
            {experience.companyName},{" "}
          </span>
          <span className=" font-medium">{experience.position}</span>
        </div>
        <div className="font-light">
          <p>В мои обязаности входит следующее:</p>
          <ul className="pl-4">
            {experience.responsibilities.map((responsibility) => (
              <li>{responsibility}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
