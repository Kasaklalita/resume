import { useState } from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import MainHeader from "./components/MainHeader";

function App() {
  return (
    <div className="App">
      <MainHeader />
      <Contacts />
    </div>
  );
}

export default App;
