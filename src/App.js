import React, { useEffect, useState } from "react";
import Chute from "./components/Chute/Chute";
import Jogo from "./components/Jogo/Jogo";
import Letras from "./components/Letras/Letras";
import palavras from "./palavras";
import alfabeto from "./alfabeto";
import './App.css'

function App() {
  const randomWord = () => palavras[Math.floor(Math.random() * (palavras.length - 1))];

  const [buttonsDisabled, setButtonsDisabled] = useState(true);
  const [errors, setErrors] = useState(0);
  const [word, setWord] = useState('');
  const [currectLetter, setCurrectLetter] = useState('');
  const [blank, setBlank] = useState([]);
  const [guessWord, setGuessWord] = useState('');

  const handleLetter = ({ target }) => {
    setCurrectLetter(target.innerHTML);
    target.disabled = true;
  };

  const checkIsTheWord = () => {
    if (guessWord === word) {
      console.log('Ganhouuu');
    } else {
      console.log('errouu')

      setErrors(6);
    }
  };

  const renderBlank = () => {
    const wordSplited = word.split('');

    const whatToRender = blank.length === 0 ? wordSplited : blank;

    console.log(whatToRender);

    const lettersCorrect = wordSplited.map((letter) => letter === currectLetter.toLocaleLowerCase() ? letter : '_');

    const lettersToRender = blank.map((letter, index) => {
      if (lettersCorrect[index] !== '_') {
        return letter = lettersCorrect[index];
      } else {
        return letter
      }
    });

    console.log(word, blank, lettersCorrect, lettersToRender);

    setBlank(blank.length > 0 ? lettersToRender : lettersCorrect);

    // return wordSplited.map((letter, index) => <span key={index}>{'_'}</span>);
  };

  useEffect(() => {
    checkIsTheWord();
  }, [guessWord]);

  useEffect(() => {
    console.log(currectLetter);
    if (word.includes(currectLetter.toLocaleLowerCase())) {
      console.log('uhuulll')
      renderBlank();
    } else {
      setErrors((prevState) => prevState + 1);
    }

  }, [currectLetter]);

  useEffect(() => {
    setWord(randomWord);
  }, [buttonsDisabled]);

  return (
    <div className="mainContainer">
      <Jogo
        setButtonsDisabled={setButtonsDisabled}
        buttonsDisabled={buttonsDisabled}
        errors={errors}
        setErros={setErrors}
        word={word}
        renderBlank={renderBlank}
        blank={blank}
      />
      <Letras alfabeto={alfabeto} buttonsDisabled={buttonsDisabled} handleLetter={handleLetter} />
      <Chute buttonsDisabled={buttonsDisabled} guessWord={guessWord} setGuessWord={setGuessWord} />
    </div>
  );
}

export default App;