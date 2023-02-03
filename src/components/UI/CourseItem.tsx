import React from "react";
import { ICourse } from "../../types";
import BlueSpan from "./BlueSpan";

export default function CourseItem(course: ICourse) {
  return (
    <div className="flex mb-2">
      <div className="w-44 text-gray-400 shrink-0">{course.graduatedYear}</div>
      <div>
        <h1 className="font-medium">{course.organization}</h1>
        <BlueSpan>{course.courseName}</BlueSpan>
      </div>
    </div>
  );
}
