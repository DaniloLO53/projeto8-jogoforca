/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

function Letras(props) {
  const { alfabeto, setErrors, word, setWord, disabled, setChoosedLetters, choosedLetters } = props;

  const letterElement = alfabeto.map((letter) => (
    <StyledLetters
      type="button"
      key={letter}
      disabled={(disabled) || word.word === word.withBlanks() || choosedLetters.includes(letter.toLowerCase())}
      onClick={({ target }) => {
        setChoosedLetters((prevState) => [...prevState, letter.toLowerCase()]);
        setErrors((prevState) => word.word
          .includes(letter.toLowerCase()) ? prevState : prevState + 1);
        setWord((prevState) => ({
          ...prevState,
          withBlanks: function () {
            return prevState.withBlanks()
              .split('')
              .map((char, index) => prevState.word[index] === letter ? letter : char)
              .join('');
          },
        }))
      }}
      data-test="letter"
    >
      {letter.toUpperCase()}
    </StyledLetters>
  ));

  letterElement.map((x) => console.log(x.props.disabled))

  return (
    <StyledLettersContainer>
      {letterElement}
    </StyledLettersContainer>
  );
}

Letras.propTypes = {
  alfabeto: PropTypes.array.isRequired,
  setErrors: PropTypes.func.isRequired,
  word: PropTypes.object.isRequired,
  setWord: PropTypes.func.isRequired,
  choosedLetters: PropTypes.array.isRequired,
  setChoosedLetters: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

const StyledLettersContainer = styled.div`
  width: 56%;
  margin-top: 100px;
  
`;

const StyledLetters = styled.button.attrs()`
  width: 40px;
  height: 40px;
  margin: 6px;
  background-color: #7aa7c7;
  color: #39739d;
  font-weight: 700;
  &:disabled {
    color: #7aa7c7;
    background-color: #9FAAB5;
  }
`;

export default Letras;
