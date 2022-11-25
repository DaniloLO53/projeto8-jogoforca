/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
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
  const [currentLetter, setCurrentLetter] = useState('');
  const [guessWord, setGuessWord] = useState('');
  const [currentBlankSpaces, setCurrentBlankSpaces] = useState([]);
  const [currentElementBlankSpaces, setCurrentElementBlankSpaces] = useState([]);
  const [gameState, setGameState] = useState("paused");
  const [showChars, setShowChars] = useState(false);

  const randomWord = () => palavras[Math.floor(Math.random() * (palavras.length - 1))];

  const setDefaultInitialState = () => {
    setCurrentLetter("");
    setWord(randomWord());
    setButtonsDisabled(true);
  };

  useEffect(() => {
    setCurrentBlankSpaces([]);

    if (gameState === "paused" || gameState === 'win' || gameState === 'loose') {
      setDefaultInitialState();
      setShowChars(false);

    } else if (gameState === "playing") {
      setErrors(0);
      setButtonsDisabled(false);
      setShowChars(true);

    } else if (gameState === 'reload') {
      setDefaultInitialState();
      setGameState('playing');

    }

  }, [gameState]);

  useEffect(() => {
    if (showChars === true) {
      renderBlank(word);
    }

  }, [showChars]);

  useEffect(() => {
    if (currentBlankSpaces.length !== 0) {
      const completed = currentBlankSpaces.every((char) => char !== '_' && char);

      setCurrentElementBlankSpaces(renderBlankOnScreen());

      if (completed && gameState === 'playing') {
        setGameState('win');
      }

    }
  }, [currentBlankSpaces]);

  useEffect(() => {
    if (showChars === true) {
      renderBlank();
      hangHandle();
    }
  }, [currentLetter]);

  useEffect(() => {
    if (errors === 6) {
      setGameState('loose');
      setCurrentBlankSpaces(word.split(''));
    }

  }, [errors]);

  useEffect(() => {
    if (gameState !== 'paused') {
      setCurrentBlankSpaces(word.split(''));

      if (word !== guessWord) {
        setGameState('loose');
        setErrors(6);
      }
    }
  }, [guessWord]);

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
    const wordSplited = word.split('');
    const blankSpacesSplited = getBlankSpacesSplited(wordSplited, currentLetter);
    const newCurrentBlankSpaces = mergeBlankSpaces(currentBlankSpaces, blankSpacesSplited);

    setCurrentBlankSpaces(newCurrentBlankSpaces);
  };

  const renderBlankOnScreen = () => currentBlankSpaces
    .map((char, index) => <span key={index + char}>{char}</span>);

  const hangHandle = () => {
    const correct = word.includes(currentLetter);

    if (!correct) {
      setErrors((prevState) => prevState + 1);
    }
  };

  return (
    <div className="mainContainer">
      <Jogo
        errors={errors}
        gameState={gameState}
        setGameState={setGameState}
        currentElementBlankSpaces={currentElementBlankSpaces}
      />
      <Letras
        alfabeto={alfabeto}
        buttonsDisabled={buttonsDisabled}
        setCurrentLetter={setCurrentLetter}
      />
      <Chute
        buttonsDisabled={buttonsDisabled}
        setGuessWord={setGuessWord}
      />
    </div>
  );
}

export default App;
