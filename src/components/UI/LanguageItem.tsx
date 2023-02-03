import React from "react";
import { ILanguage } from "../../types";

export default function LanguageItem(language: ILanguage) {
  return (
    <div>
      <h1>{language.title}</h1>
      <p className="text-sm">{language.level}</p>
      {/* <div>
        <div className="w-10 h-2bg-teal"></div>
       
      </div> */}
    </div>
  );
}
