import React from "react";
import me from "../assets/Veniamin.jpg";

export default function MainInfo() {
  return (
    <div>
      <div className="flex gap-6 mb-4">
        <img className="w-48 rounded-md" src={me} alt="" />
        <div className="">
          <h1 className="text-5xl font-medium uppercase mb-4">
            Полиенко Вениамин Сергеевич
          </h1>
          <h2 className="text-xl font-medium uppercase">Backend разработчик</h2>
        </div>
      </div>
      <div className="flex">
        <p>Москва</p>
        <p>Возраст: 19 лет</p>
      </div>
    </div>
  );
}
