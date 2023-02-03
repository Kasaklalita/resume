import { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Languages from "./components/Languages";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <div className="columns flex w-full p-4">
        <div className="left-column flex flex-col gap-10 w-full"></div>
        <div
          className="right-column flex flex-col gap-10"
          style={{ width: "300px" }}
        >
          <Contacts />
          <Languages />
        </div>
      </div>
    </div>
  );
}

export default App;
