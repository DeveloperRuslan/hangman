import { createContext, useState } from "react";

// Создаем новый контекст для игры
const GameContext = createContext();

// Компонент провайдера для управления состоянием игры 
//и предоставления его дочерним компонентам
export const GameProvider = ({ children }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [clickedKeys, setClickedKeys] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [isGameWon, setIsGameWon] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isGameReset, setIsGameReset] = useState(false);

 // Функция для сброса игрового поля в исходное состояние
  const resetGameBoard = () => {
    setShowModal(false);
    setCurrentWord("");
    setCorrectLetters([]);
    setClickedKeys([]);
    setWrongGuesses(0);
    setIsGameWon(false);
    setIsGameReset(true);
  };

  return (
   // Предоставляем состояние и функции дочерним компонентам
    <GameContext.Provider
      value={{ currentWord, setCurrentWord, correctLetters, setCorrectLetters, clickedKeys, setClickedKeys, wrongGuesses, setWrongGuesses, isGameWon, setIsGameWon, showModal, setShowModal, resetGameBoard, isGameReset, setIsGameReset }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;