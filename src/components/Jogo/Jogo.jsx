import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Jogo(props) {
  const {
    errors,
    // setErrors,
  } = props;

  return (
    <StyledGameContainer>
      <StyledFigure>
        <StyledImg
          src={`./assets/forca${errors}.png`}
          alt="#"
        />
      </StyledFigure>
      <StyledRightSide>
        <StyledButton>Escolher Palavra</StyledButton>
        <p></p>
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

Jogo.propTypes = {
  errors: PropTypes.number.isRequired,
  // setErrors: PropTypes.func.isRequired,
};

export default Jogo;
