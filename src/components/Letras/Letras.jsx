import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

function Letras(props) {
  const { alfabeto } = props;

  const letter = alfabeto.map((letterElement) => (
    <StyledLetters
      type="button"
      key={letterElement}
      disabled
      onClick={({ target }) => {
        // setCurrentLetter(l);
        target.disabled = true;
      }}
      data-test="letter"
    >
      {letterElement.toUpperCase()}
    </StyledLetters>
  ));

  return (
    <StyledLettersContainer>
      {letter}
    </StyledLettersContainer>
  );
}

Letras.propTypes = {
  alfabeto: PropTypes.array.isRequired,
  // buttonsDisabled: PropTypes.bool.isRequired,
  // setCurrentLetter: PropTypes.func.isRequired,
};

const StyledLettersContainer = styled.div`
  width: 56%;
  margin-top: 100px;
  
`;

const StyledLetters = styled.button.attrs()`
  width: 40px;
  height: 40px;
  margin: 6px;
  background-color: #e1ecf4;
  color: #7aa7c7;
  font-weight: 700;
  &:disabled {
    opacity: 0.5;
  }
`;

export default Letras;
