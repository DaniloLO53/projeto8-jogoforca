import React, { useState } from "react";
import Chute from "./components/Chute/Chute";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
// import palavras from "./palavras";
import alfabeto from "./alfabeto";
import './App.css'

function App() {
  const [buttonsDisabled, setButtonsDisabled] = useState(true);

  return (
    <div className="mainContainer">
      <Jogo
        setButtonsDisabled={setButtonsDisabled}
      />
      <Letras alfabeto={alfabeto} buttonsDisabled={buttonsDisabled} />
      <Chute buttonsDisabled={buttonsDisabled} />
    </div>
  );
}

export default App;
