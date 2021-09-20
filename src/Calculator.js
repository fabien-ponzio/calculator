import React, { useState } from "react"; //permet d'utiliser les fonctions de react
import AmazingNumberButton from "./AmazingNumberButton";
import BeautifullScreen from "./BeautifullScreen";
import GreatOperationButton from "./GreatOperationButton";
import MagnificientEqualButton from "./MagnificientEqualButton";
import TheTitle from "./TheTitle";

function Calculator() {
  // définir les state ici , comme on définit les attribut dans les classes php

  // suivis des méthodes , fonction, puis du return avec les component
  const [calc, setCalc] = useState("");

  function handleClick(e) {
    e.preventDefault();
    const event = e.target.value;

    console.log(event);

    switch (event) {
      case "+":
        return setCalc(calc + event);
      case "-":
        return setCalc(calc + event);
      case "*":
        return setCalc(calc + event);
      case "/":
        return setCalc(calc + event);
      case "C":
        return setCalc("");
      case "=":
        setCalc(calc + event);
        let temp = eval(calc);
        return setCalc(temp);
      default:
        return setCalc(calc + event);
    }
    setCalc(event);
  }
  return (
    <div className="App">
      <div>
        <div className="title">
          <TheTitle />
        </div>
        <div className="screen">
          <BeautifullScreen handleClick={handleClick} calc={calc} />
        </div>


    <div className="allKeys">
        
          {/* // BOUTONS CHIFFRES */}
        <section className="grid-container">
          <AmazingNumberButton chandleClick={handleClick} label="1" className="grid-item"/>
          <AmazingNumberButton handleClick={handleClick} label="2" className="grid-item"/>
          <AmazingNumberButton handleClick={handleClick} label="3" className="grid-item"/>
          <AmazingNumberButton handleClick={handleClick} label="4" className="grid-item"/>
          <AmazingNumberButton handleClick={handleClick} label="5" className="grid-item"/>
          <AmazingNumberButton handleClick={handleClick} label="6" className="grid-item"/>
          <AmazingNumberButton handleClick={handleClick} label="7" className="grid-item"/>
          <AmazingNumberButton handleClick={handleClick} label="8" className="grid-item"/>
          <AmazingNumberButton handleClick={handleClick} label="9" className="grid-item"/>
        <div>          
          <AmazingNumberButton handleClick={handleClick} label="0" className="grid-item"/>
        </div>
        </section>
        <section class="grid-container">
          <GreatOperationButton handleClick={handleClick} label="+" className="grid-item"/>
          <GreatOperationButton handleClick={handleClick} label="-" className="grid-item"/>
          <GreatOperationButton handleClick={handleClick} label="*" className="grid-item"/>
          <GreatOperationButton handleClick={handleClick} label="/" className="grid-item"/>
          <GreatOperationButton handleClick={handleClick} label="C" className="grid-item"/>
          <MagnificientEqualButton handleClick={handleClick} className="grid-item"/>
        </section>
        
      </div>
    </div>
  </div>
  );
}

export default Calculator;
