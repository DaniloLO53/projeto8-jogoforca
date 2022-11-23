/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import './Jogo.css';
import PropTypes from 'prop-types';

function Jogo(props) {
  const { setButtonsDisabled, buttonsDisabled, errors, word, setWord, renderBlank, blank, randomWord, win, currect, setCurrentLetter, startGame, currentElementBlankSpaces } = props;
  // console.log(word);

  // useEffect(() => renderBlank(), [word]);

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
          onClick={() => setWord(randomWord())}
        >
          Escolher Palavra
        </button>
        <div className={win}>
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
  currentElementBlankSpaces: PropTypes.func.isRequired,
};

export default Jogo;
