import React from "react";
import SectionTemplate from "./SectionTemplate";

export default function AboutMe() {
  return (
    <SectionTemplate title="О себе">
      <p className="font-light">
        Студент второго курса Московского Авиационного Института с шестимесячным
        опытом работы в качестве fullstack-разработчика. Создал единую базу
        UI-компонентов для различных проектов компании, улучшил часть
        пользовательского интерфейса продуктов компании посредством
        использования Material 3.
      </p>
    </SectionTemplate>
  );
}
