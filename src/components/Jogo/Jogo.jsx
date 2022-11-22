/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import './Jogo.css';
import PropTypes from 'prop-types';

function Jogo(props) {
  const { setButtonsDisabled, buttonsDisabled, errors, word, renderBlank, blank } = props;
  console.log(word);

  useEffect(() => renderBlank(), [buttonsDisabled]);

  const dinamicHang = (hangNumber) => (
    <figure className="hangContainer">
      <img
        src={`./assets/forca${hangNumber}.png`}
      />
    </figure>
  );

  const dinamicLetters = () => blank.map((letter, index) => <span key={index}>{letter}</span>);

  return (
    <div className="gameContainer">
      {dinamicHang(errors)}
      <div className="rightSide">
        <button
          type="button"
          onClick={() => {
            setButtonsDisabled(false);
          }}
        >
          Escolher Palavra
        </button>
        <div className="blankSpaces">
          {!buttonsDisabled && dinamicLetters()}
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
  blank: PropTypes.array.isRequired,
};

export default Jogo;
