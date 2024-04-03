import React, { useState } from "react";
import "./App.css";
import data from "./data.json";
import Toogle from "./Components/Toogle/Toogle";
import Card from "./Components/Card/Card";
import WaveImg from "/lines-wave.svg";
import CurvedImg from "/lines-curved.svg";
// import ScrnSht from "/public/scrnsht.png";

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("monthly");

  const handleOptionChange = (option: string) => {
    console.log("New option selected:", option);
    setSelectedOption(option);
  };

  return (
    <div className="main-container-app">
      <Toogle
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />

      <ul className="list-container">
        {data.map((item: IItem, index: number) => (
          <Card
            key={item.id}
            item={item}
            index={index}
            selectedOption={selectedOption}
          />
        ))}
      </ul>
      <img className="curved" src={CurvedImg} alt="wave image"></img>
      <img className="wave" src={WaveImg} alt="wave image"></img>
    </div>
  );
};

export default App;
