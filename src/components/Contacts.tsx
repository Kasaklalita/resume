import React from "react";
import SectionTemplate from "./SectionTemplate";
import ContactItem from "./UI/ContactItem";
import reactIcon from "../assets/react.svg";

export default function Contacts() {
  return (
    <div>
      <SectionTemplate title="Контакты">
        <ContactItem text="+7 930 925-10-56" icon={reactIcon} />
        <ContactItem text="kasaklalita@gmail.com" icon={reactIcon} />
        <ContactItem text="https://github.com/Kasaklalita" icon={reactIcon} />
      </SectionTemplate>
    </div>
  );
}
