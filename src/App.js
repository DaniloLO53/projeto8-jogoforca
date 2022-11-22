import React, { useEffect, useState } from "react";
import Chute from "./components/Chute/Chute";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";
import './App.css'

function App() {
  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const [errors, setErrors] = useState(0);
  const [word, setWord] = useState('');

  const randomWord = () => palavras[Math.floor(Math.random() * (palavras.length - 1))];

  const renderLetters = () => {
    const wordSplited = word.split('');

    return wordSplited.map((letter, index) => <span key={index}>{letter}</span>);
  };

  const renderBlank = () => {
    const wordSplited = word.split('');

    return wordSplited.map((letter, index) => <span key={index}>{'_'}</span>);
  };

  useEffect(() => {
    setWord(randomWord);
  }, [buttonsDisabled]);

  return (
    <div className="mainContainer">
      <Jogo
        setButtonsDisabled={setButtonsDisabled}
        errors={errors}
        setErros={setErrors}
        word={word}
        renderLetters={renderLetters}
        renderBlank={renderBlank}
      />
      <Letras alfabeto={alfabeto} buttonsDisabled={buttonsDisabled} />
      <Chute buttonsDisabled={buttonsDisabled} />
    </div>
  );
}

export default App;
