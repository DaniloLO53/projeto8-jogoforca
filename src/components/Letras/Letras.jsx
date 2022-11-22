import React from "react";
import PropTypes from 'prop-types';
import './Letras.css';

function Letras(props) {
  const { alfabeto } = props;

  const letter = alfabeto.map((l) => (
    <button
      type="button"
      key={l}
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
  alfabeto: PropTypes.string.isRequired,
};

export default Letras;
