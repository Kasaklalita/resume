import React from "react";

interface IContactItemProps {
  text: string;
  icon: any;
  isLink?: boolean;
}

const defaultProps: IContactItemProps = {
  text: "",
  icon: null,
  isLink: false,
};

export default function ContactItem(props = defaultProps) {
  return (
    <div className="flex gap-2 items-center">
      <img src={props.icon} alt="" className="w-4 h-4 shrink-0" />

      {props.isLink ? (
        <a className="font-light" href={props.text}>
          {props.text}
        </a>
      ) : (
        <p className="font-light">{props.text}</p>
      )}
    </div>
  );
}
