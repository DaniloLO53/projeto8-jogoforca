import React from "react";
import './Chute.css';
import PropTypes from 'prop-types';

function Chute(props) {
  const { buttonsDisabled } = props;

  return (
    <div className="guessContainer">
      <p>Já sei a palavra!</p>
      <input
        type="text"
      />
      <button
        type="button"
        disabled={buttonsDisabled}
      >
        Chutar
      </button>
    </div>
  );
}

Chute.propTypes = {
  buttonsDisabled: PropTypes.bool.isRequired,
};

export default Chute;
