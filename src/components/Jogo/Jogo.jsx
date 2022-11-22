/* eslint-disable no-unused-vars */
import React from "react";
import './Jogo.css';
import PropTypes from 'prop-types';

function Jogo(props) {
  const { setButtonsDisabled, errors, word, renderLetters, renderBlank } = props;
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
          {renderBlank()}
        </div>
      </div>
    </div>
  );
}

Jogo.propTypes = {
  setButtonsDisabled: PropTypes.func.isRequired,
  renderLetters: PropTypes.func.isRequired,
  renderBlank: PropTypes.func.isRequired,
  errors: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
};

export default Jogo;
