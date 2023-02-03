import React from "react";

export default function SectionTemplate({ children, title }: any) {
  return (
    <div className="w-full">
      <div className="flex gap-4 border-b border-black border-solid pb-2 mb-3">
        <h1 className="text-lg uppercase">{title}</h1>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
