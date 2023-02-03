import React from "react";
import { ILanguage } from "../../types";

export default function LanguageItem(language: ILanguage) {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-light">{language.title}</h1>
      <div>
        <p className="text-sm font-light">{language.level}</p>
      </div>
    </div>
  );
}
