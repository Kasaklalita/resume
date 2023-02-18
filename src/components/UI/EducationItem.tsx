import React from "react";
import { IEducation } from "../../types";

export default function EducationItem(education: IEducation) {
  return (
    <div className="flex mb-2 max-sm:flex-col">
      <p className="w-44 text-gray-400 shrink-0">{education.graduatedYear}</p>
      <div>
        <div>
          <span className="text-[#28aee4] font-bold">
            {education.organizationName + ", "}
          </span>
          <span className=" font-medium">{education.educationType}</span>
        </div>
        <p className="font-light">{education.direction}</p>
      </div>
    </div>
  );
}
