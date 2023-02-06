import React from "react";
import SectionTemplate from "./SectionTemplate";
import ContactItem from "./UI/ContactItem";
import mail from "./../assets/mail.svg";
import phone from "./../assets/phone.svg";
import github from "./../assets/github.svg";
import telegram from "./../assets/telegram.svg";

export default function Contacts() {
  return (
    <div>
      <SectionTemplate title="Контакты" icon={mail}>
        <ContactItem text="+7 930 925-10-56" icon={phone} />
        <ContactItem
          text="https://t.me/VeniaminPolienko"
          icon={telegram}
          isLink={true}
        />
        <ContactItem text="kasaklalita@gmail.com" icon={mail} />
        <ContactItem
          text="https://github.com/Kasaklalita"
          icon={github}
          isLink={true}
        />
      </SectionTemplate>
    </div>
  );
}
