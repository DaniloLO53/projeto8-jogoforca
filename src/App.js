import React, { useState } from "react";
import Chute from "./components/Chute/Chute";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
// import palavras from "./palavras";
import alfabeto from "./alfabeto";
import './App.css'

function App() {
  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const [errors, setErrors] = useState(0);

  return (
    <div className="mainContainer">
      <Jogo
        setButtonsDisabled={setButtonsDisabled}
        errors={errors}
        setErros={setErrors}
      />
      <Letras alfabeto={alfabeto} buttonsDisabled={buttonsDisabled} />
      <Chute buttonsDisabled={buttonsDisabled} />
    </div>
  );
}

export default App;
