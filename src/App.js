import React from "react";
import Chute from "./components/Chute";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras";
// import palavras from "./palavras";

function App() {
  return (
    <div>
      <Jogo />
      <Letras />
      <Chute />
    </div>
  );
}

export default App;
