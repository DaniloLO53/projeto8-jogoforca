/* eslint-disable no-unused-vars */
import React from "react";
import './Jogo.css';
import PropTypes from 'prop-types';

function Jogo(props) {
  const { setButtonsDisabled, buttonsDisabled, errors, word, renderLetters, renderBlank } = props;
  console.log(word);

  // useEffect(() => dinamicHang(errors), [errors])

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
          onClick={() => setButtonsDisabled(false)}
        >
          Escolher Palavra
        </button>
        <div className="blankSpaces">
          {!buttonsDisabled && renderBlank()}
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
};

export default Jogo;
