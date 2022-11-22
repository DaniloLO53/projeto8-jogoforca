import React from "react";
import './Chute.css';

function Chute() {
  return (
    <div className="guessContainer">
      <p>Já sei a palavra!</p>
      <input
        type="text"
      />
      <button
        type="button"
      >
        Chutar
      </button>
    </div>
  );
}

export default Chute;
