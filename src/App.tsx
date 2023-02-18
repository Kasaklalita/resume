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
import Courses from "./components/Courses";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div className="App flex justify-around">
      {/* <MainHeader /> */}
      <div
        className="columns flex max-lg:flex-col gap-20 w-full p-4"
        style={{ maxWidth: "1050px" }}
      >
        <div className="left-column flex flex-col gap-10 w-full">
          <MainInfo />
          <Experience />
          <Education />
          <Courses />
          <AboutMe />
          <Hobbies />
        </div>
        <div className="right-column flex flex-col gap-10 shrink-0 max-lg:w-full w-72">
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
