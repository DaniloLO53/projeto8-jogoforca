import React, { useState } from "react";
import Jogo from "./components/Jogo/Jogo";
import Chute from "./components/Chute/Chute";
import Letras from "./components/Letras/Letras";
import styled from 'styled-components';
import alfabeto from './alfabeto';

function App() {
  const [errors, setErrors] = useState(0);

  return (
    <StyledContainer>
      <Jogo
        errors={errors}
        setErrors={setErrors}
      />
      <Letras
        alfabeto={alfabeto}
      />
      <Chute />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export default App;
