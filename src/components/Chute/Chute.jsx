import React, { useState } from "react";
import './Chute.css';
import PropTypes from 'prop-types';

function Chute(props) {
  const { buttonsDisabled, setGuessWord } = props;

  const [inputValue, setInputValue] = useState('');

  // console.log(guessWord)

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
        onClick={() => setGuessWord(inputValue)}
      >
        Chutar
      </button>
    </div>
  );
}

Chute.propTypes = {
  buttonsDisabled: PropTypes.bool.isRequired,
  setGuessWord: PropTypes.func.isRequired,
};

export default Chute;
