import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import MainHeader from "./components/MainHeader";
import MainInfo from "./components/MainInfo";
import Merits from "./components/Merits";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <div className="columns flex gap-20 w-full p-4">
        <div className="left-column flex flex-col gap-10 w-full">
          <MainInfo />
          <Experience />
          <Education />
          <AboutMe />
        </div>
        <div
          className="right-column flex flex-col gap-10 shrink-0"
          style={{ width: "250px" }}
        >
          <Contacts />
          <Languages />
          <Skills />
          <Merits />
        </div>
      </div>
    </div>
  );
}

export default App;
