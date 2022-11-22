import React from "react";
import './Jogo.css';

function Jogo() {

  const dinamicHang = (hangNumber) => (
    <figure className="hangContainer">
      <img
        src={`./assets/forca${hangNumber}.png`}
      />
    </figure>
  );

  return (
    <div className="gameContainer">
      {dinamicHang(0)}
      <div className="rightSide">
        <button
          type="button"
        >
          Escolher Palavra
        </button>
        <div className="blankSpaces">

        </div>
      </div>
    </div>
  );
}

export default Jogo;
