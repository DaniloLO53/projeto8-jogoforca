/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';
import palavras from '../../palavras';

function Jogo(props) {
  const {
    errors,
    setWord,
    word,
    setShowWord,
    showWord,
    disabled,
    setDisabled,
    setErrors,
  } = props;

  console.log(word.word, word.withBlanks(), errors)

  const [clicked, setClicked] = useState(false);

  return (
    <StyledGameContainer>
      <StyledFigure>
        <StyledImg
          src={`./assets/forca${errors}.png`}
          alt="#"
          data-test="game-image"
        />
      </StyledFigure>
      <StyledRightSide>
        <StyledButton
          data-test="choose-word"
          onClick={(() => {
            setClicked(true);
            setDisabled(false);
            setErrors(0);
            setWord({
              word: palavras[Math.floor(Math.random() * palavras.length)],
              withBlanks: function () {
                return this.word.split('').map(() => '_').join('');
              },
            });
          })}
        >
          Escolher Palavra
        </StyledButton>
        <StyledWord
          display={clicked}
          errors={errors}
          word={word}
          data-test="word"
          data-answer={word.word}
        >
          {errors === 6 || word.withBlanks() === word.word ? word.word : word.withBlanks()}
        </StyledWord>
      </StyledRightSide>
    </StyledGameContainer>
  );
}

const StyledImg = styled.img`
  width: 50%;
`;

const StyledFigure = styled.figure`
  width: 50%;
`;

const StyledGameContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 60px;
`;

const StyledButton = styled.button`
  padding: 20px;
  background-color: #27ae60;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 20px;
  border-radius: 8px;
  width: 250px;
`;

const StyledRightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 30px;
`;

const StyledWord = styled.p`
  letter-spacing: 1.5rem;
  font-size: 40px;
  font-weight: 700;
  display: ${({ display }) => display ? 'block' : 'none'};
  color: ${({ errors, word }) => {
    if (errors === 6) {
      return 'red';
    } else if (word.withBlanks() === word.word) {
      return 'green';
    } else {
      return 'black';
    }
  }};
`;

Jogo.propTypes = {
  errors: PropTypes.number.isRequired,
  setWord: PropTypes.func.isRequired,
  word: PropTypes.string.isRequired,
  showWord: PropTypes.string.isRequired,
  setShowWord: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  setDisabled: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
};

export default Jogo;
