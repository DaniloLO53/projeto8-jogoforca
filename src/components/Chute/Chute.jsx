import React, { useEffect, useState } from "react";
import './Chute.css';
import PropTypes from 'prop-types';

function Chute(props) {
  const { buttonsDisabled, setGuessWord, word, guessWord, setGameState, setCurrentBlankSpaces } = props;

  const [inputValue, setInputValue] = useState('');

  // console.log(word)

  useEffect(() => {
    if (word !== '') {

      if (word === guessWord) {
        setCurrentBlankSpaces(word.split(''));
      } else {
        setGameState('loose');
        setCurrentBlankSpaces(word.split(''));
      }
    }
  }, [guessWord]);

  return (
    <div className="guessContainer">
      <p>Já sei a palavra!</p>
      <input
        type="text"
        value={inputValue}
        onChange={({ target }) => setInputValue(target.value)}
      />
      <button
        type="button"
        disabled={buttonsDisabled}
        onClick={() => {
          setGuessWord(inputValue);
        }}
      >
        Chutar
      </button>
    </div>
  );
}

Chute.propTypes = {
  buttonsDisabled: PropTypes.bool.isRequired,
  setGuessWord: PropTypes.func.isRequired,
  setWin: PropTypes.func.isRequired,
  setGameState: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
  guessWord: PropTypes.string.isRequired,
  setCurrentBlankSpaces: PropTypes.func.isRequired,
};

export default Chute;