import React from "react";
import './Jogo.css';
import PropTypes from 'prop-types';

function Jogo(props) {
  const { setButtonsDisabled, errors } = props;

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

        </div>
      </div>
    </div>
  );
}

Jogo.propTypes = {
  setButtonsDisabled: PropTypes.func.isRequired,
  errors: PropTypes.number.isRequired,
};

export default Jogo;
