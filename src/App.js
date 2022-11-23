/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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
  const [currentLetter, setCurrentLetter] = useState('');
  // const [blank, setBlank] = useState([]);
  const [guessWord, setGuessWord] = useState('');
  const [win, setWin] = useState('');
  const [currentBlankSpaces, setCurrentBlankSpaces] = useState([]);
  const [currentElementBlankSpaces, setCurrentElementBlankSpaces] = useState([]);

  // const handleLetter = ({ target }) => {
  //   setcurrentLetter(target.innerHTML);
  //   target.disabled = true;
  // };

  useEffect(() => {
    if (word.length !== 0) {
      setButtonsDisabled(false);
      renderBlank();
    } else {
      // console.log('Inicio')
    }
  }, [word]);

  useEffect(() => renderBlank(), [currentLetter]);

  const getWordSplited = (word) => word.split('');

  const getBlankSpacesSplited = (word, currentLetter) => word
    .map((letter) => letter === currentLetter ? letter : '_');

  const mergeBlankSpaces = (previous, current) => current.map((space, index) => {
    const charOfPrevious = previous[index] || '_';

    const currentIsBlank = space === '_';
    const previousIsBlank = charOfPrevious === '_';

    if (!currentIsBlank) return space;
    if (!previousIsBlank) return charOfPrevious;
    return '_';
  });

  const renderBlank = () => {
    const wordSplited = getWordSplited(word);
    const blankSpacesSplited = getBlankSpacesSplited(wordSplited, currentLetter);
    const newCurrentBlankSpaces = mergeBlankSpaces(currentBlankSpaces, blankSpacesSplited);

    setCurrentBlankSpaces(newCurrentBlankSpaces);
  };

  const renderBlankOnScreen = () => currentBlankSpaces
    .map((char, index) => <span key={index}>{char}</span>);

  const verifyContainsLetter = () => word.includes(currentLetter);

  const hangHandle = () => {
    const correct = verifyContainsLetter();

    if (!correct) {
      setErrors((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    if (currentBlankSpaces.length !== 0) {
      const completed = currentBlankSpaces.every((char) => char !== '_' && char);

      setCurrentElementBlankSpaces(renderBlankOnScreen());

      setWin(completed ? 'win' : '');
    }
  }, [currentBlankSpaces]);

  useEffect(() => {
    hangHandle();
    console.log(word)
  }, [currentLetter]);

  useEffect(() => {
    setButtonsDisabled(true);

    if (win === 'win') {
      const correctWordSplited = getWordSplited(word);
      setCurrentBlankSpaces(correctWordSplited);
    }

  }, [win]);

  return (
    <div className="mainContainer">
      <Jogo
        setButtonsDisabled={setButtonsDisabled}
        buttonsDisabled={buttonsDisabled}
        errors={errors}
        setErros={setErrors}
        word={word}
        setWord={setWord}
        randomWord={randomWord}
        renderBlank={renderBlank}
        win={win}
        currentLetter={currentLetter}
        setCurrentLetter={setCurrentLetter}
        currentElementBlankSpaces={currentElementBlankSpaces}
      />
      <Letras alfabeto={alfabeto} buttonsDisabled={buttonsDisabled} currentLetter={currentLetter} setCurrentLetter={setCurrentLetter} />
      <Chute buttonsDisabled={buttonsDisabled} guessWord={guessWord} word={word} setGuessWord={setGuessWord} setWin={setWin} />
    </div>
  );
}

export default App;