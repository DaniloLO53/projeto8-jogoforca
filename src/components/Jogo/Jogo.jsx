/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Jogo(props) {
  const {
    errors,
    currentElementBlankSpaces,
    gameState,
    setGameState,
    word
  } = props;

  const [dataAnswer, setDataAnswer] = useState(false);

  const dinamicHang = (hangNumber) => (
    <StyledFigure className="hangContainer">
      <StyledImg
        src={`./assets/forca${hangNumber}.png`}
        data-test="game-image"
      />
    </StyledFigure>
  );

  console.log('OO', gameState)

  return (
    <StyledGameContainer className="gameContainer">
      {dinamicHang(errors)}
      <StyledRightSide className="rightSide">
        <StyledButton
          type="button"
          onClick={() => {
            setGameState(gameState === 'playing' ? 'reload' : 'playing');
            setDataAnswer(true);
          }}
          data-test="choose-word"
        >
          Escolher Palavra
        </StyledButton>
        <StyledBlankSpaces
          data-test="word"
          data-answer={dataAnswer ? word : ''}
          gameState={gameState}
        >
          {currentElementBlankSpaces}
        </StyledBlankSpaces>
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

const StyledBlankSpaces = styled.div`
  font-size: 40px;
  color: ${(props) => {
    if (props.gameState === 'win') {
      return 'green';
    } else if (props.gameState === 'loose') {
      return 'red';
    } else if (props.gameState === undefined) {
      return 'black';
    }
  }};
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

const StyledGameContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 60px;
`;

const StyledRightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 30px;
`;

Jogo.propTypes = {
  errors: PropTypes.number.isRequired,
  word: PropTypes.string.isRequired,
  gameState: PropTypes.string.isRequired,
  setGameState: PropTypes.string.isRequired,
  currentElementBlankSpaces: PropTypes.func.isRequired,
};

export default Jogo;