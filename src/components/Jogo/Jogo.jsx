/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import './Jogo.css';
import PropTypes from 'prop-types';

function Jogo(props) {
  const { setButtonsDisabled, buttonsDisabled, errors, word, setWord, renderBlank, blank, randomWord, win, currect, setCurrentLetter, startGame, currentElementBlankSpaces, setCurrentBlankSpaces, gameState } = props;
  // console.log(word);

  const [gameState, setGameState] = useState("paused");

  // useEffect(() => renderBlank(), [word]);

  useEffect (() => {
    if (gameState === "paused") {
      console.log("paused");
    } else if (gameState === "win") {
      console.log("win");
    } else if (gameState === "playing") {
      setButtonsDisabled(false);
    }

    setCurrentLetter("");
    setWord(randomWord());
    setErrors(0);
    setCurrentBlankSpaces([]);
    setButtonsDisabled(true);
  }, [gameState]);

  const dinamicHang = (hangNumber) => (
    <figure className="hangContainer">
      <img
        src={`./assets/forca${hangNumber}.png`}
      />
    </figure>
  );

  // console.log(currentElementBlankSpaces)

  // const dinamicLetters = () => blank.map((letter, index) => <span key={index}>{letter}</span>);

  return (
    <div className="gameContainer">
      {dinamicHang(errors)}
      <div className="rightSide">
        <button
          type="button"
          onClick={() => setGameState("playing")}
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
  setButtonsDisabled: PropTypes.func.isRequired,
  buttonsDisabled: PropTypes.bool.isRequired,
  renderLetters: PropTypes.func.isRequired,
  renderBlank: PropTypes.func.isRequired,
  errors: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  setWord: PropTypes.func.isRequired,
  blank: PropTypes.array.isRequired,
  randomWord: PropTypes.func.isRequired,
  win: PropTypes.string.isRequired,
  currect: PropTypes.string.isRequired,
  setCurrentLetter: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
  setCurrentBlankSpaces: PropTypes.func.isRequired,
  gameState: PropTypes.string.isRequired,
  currentElementBlankSpaces: PropTypes.func.isRequired,
};

export default Jogo;
