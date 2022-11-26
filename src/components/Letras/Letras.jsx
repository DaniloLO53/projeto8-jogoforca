/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

function Letras(props) {
  const { alfabeto, errors, setErrors, word, setWord, disabled, setDisabled } = props;

  console.log(word.word, word.withBlanks(), word.word === word.withBlanks());

  const letter = alfabeto.map((letterElement) => (
    <StyledLetters
      type="button"
      key={letterElement}
      disabled={disabled || word.word === word.withBlanks()}
      onClick={({ target }) => {
        setErrors((prevState) => word.word.includes(letterElement.toLowerCase()) ? prevState : prevState + 1);
        setWord((prevState) => ({
          ...prevState,
          withBlanks: function () {
            return prevState.withBlanks().split('').map((char, index) => prevState.word[index] === letterElement ? letterElement : char).join('');
          },
        }))
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
  errors: PropTypes.number.isRequired,
  setErrors: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  setWord: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  setDisabled: PropTypes.func.isRequired,
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
    color: #7aa7c8
  }
`;

export default Letras;
