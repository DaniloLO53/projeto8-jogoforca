/* eslint-disable no-unused-vars */
import React from "react";
import './Jogo.css';
import PropTypes from 'prop-types';

function Jogo(props) {
  const { errors, currentElementBlankSpaces, gameState, setGameState } = props;

  const dinamicHang = (hangNumber) => (
    <figure className="hangContainer">
      <img
        src={`./assets/forca${hangNumber}.png`}
      />
    </figure>
  );

  return (
    <div className="gameContainer">
      {dinamicHang(errors)}
      <div className="rightSide">
        <button
          type="button"
          onClick={() => setGameState(gameState === 'playing' ? 'reload' : 'playing')}
        >
          Escolher Palavra
        </button>
        <div className={gameState}>
          {currentElementBlankSpaces}
        </div>
      </div>
    </div>
  );
}

Jogo.propTypes = {
  errors: PropTypes.number.isRequired,
  gameState: PropTypes.string.isRequired,
  setGameState: PropTypes.string.isRequired,
  currentElementBlankSpaces: PropTypes.func.isRequired,
};

export default Jogo;