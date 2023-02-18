import React from "react";
import SectionTemplate from "./SectionTemplate";
import face from "./../assets/face.svg";

export default function AboutMe() {
  return (
    <SectionTemplate title="О себе" icon={face}>
      <p className="font-light">
        Студент Московского Авиационного Института c коммерческим опытом работы
        в качестве fullstack-разработчика. Создал единую базу UI-компонентов для
        различных проектов компании, улучшил часть пользовательского интерфейса
        продуктов компании посредством использования Material 3.
      </p>
    </SectionTemplate>
  );
}
