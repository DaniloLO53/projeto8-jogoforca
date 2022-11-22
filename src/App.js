import React from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
// import palavras from "./palavras";
import alfabeto from "./alfabeto";
import './App.css'

function App() {
  return (
    <div className="mainContainer">
      <Jogo />
      <Letras alfabeto={alfabeto} />
      <Chute />
    </div>
  );
}

export default App;
