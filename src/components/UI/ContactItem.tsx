import React from "react";

export default function ContactItem({ text, icon }: any) {
  return (
    <div className="flex gap-2 items-center">
      <img src={icon} alt="" className="w-4 h-4 shrink-0" />
      <p>{text}</p>
    </div>
  );
}
