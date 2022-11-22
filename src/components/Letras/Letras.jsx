import React from "react";
import PropTypes from 'prop-types';
import './Letras.css';

function Letras(props) {
  const { alfabeto, buttonsDisabled, handleLetter } = props;

  const letter = alfabeto.map((l) => (
    <button
      type="button"
      key={l}
      disabled={buttonsDisabled}
      onClick={(event) => handleLetter(event)}
    >
      {l.toUpperCase()}
    </button>
  ));

  return (
    <div className="lettersContainer">
      {letter}
    </div>
  );
}

Letras.propTypes = {
  alfabeto: PropTypes.array.isRequired,
  buttonsDisabled: PropTypes.bool.isRequired,
  handleLetter: PropTypes.func.isRequired,
};

export default Letras;
