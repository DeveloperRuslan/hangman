import { useContext, useEffect, useRef } from "react";
import GameContext from "../context/GameContext";
import GameKeyboard from "./GameKeyboard";
import { wordList } from "../constants";

// Компонент игрового поля
const GameBoard = () => {
  // Извлечение необходимых значений и функций из контекста игры
  const { currentWord, setCurrentWord, correctLetters, setCorrectLetters, clickedKeys,  setClickedKeys, wrongGuesses, setWrongGuesses, setIsGameWon, setShowModal, isGameReset, setIsGameReset } = useContext(GameContext);

  // Референс для элемента подсказки
  const hintRef = useRef();
  const maxGuesses = 6; // Максимальное количество попыток

  // Эффект для инициализации игрового поля с случайным словом и подсказкой
  useEffect(() => {
    const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
    hintRef.current.innerText = hint; // Установка подсказки
    setCurrentWord(word); // Установка текущего слова
    setCorrectLetters(new Array(word.length).fill("")); // Инициализация правильных букв
    setIsGameReset(false); // Сброс флага перезапуска игры
  }, [isGameReset, setCorrectLetters, setCurrentWord, setIsGameReset]);

  // Эффект для проверки статуса игры (выигрыш/проигрыш) на основе попыток и правильных букв
  useEffect(() => {
    if (currentWord && correctLetters.length) {
      if (wrongGuesses >= maxGuesses) {
        setIsGameWon(false); // Установка флага выигрыша в false
        setShowModal(true); // Показать модальное окно
      } else if (correctLetters.join("") === currentWord) {
        setIsGameWon(true); // Установка флага выигрыша в true
        setShowModal(true); // Показать модальное окно
      }
    }
  }, [correctLetters, wrongGuesses, currentWord, setIsGameWon, setShowModal]);

  // Обработка нажатий клавиш и обновление состояния игры
  const handleClickedKey = (clickedKey) => {
    if (currentWord.includes(clickedKey)) {
      // Если буква правильная
      const updatedCorrectLetters = correctLetters.map((letter, index) =>
        currentWord[index] === clickedKey ? clickedKey : letter,
      );
      setCorrectLetters(updatedCorrectLetters); // Обновление правильных букв
    } else {
      setWrongGuesses((prevGuesses) => prevGuesses + 1); // Увеличение количества неправильных попыток
    }

    setClickedKeys((prevKeys) => [...prevKeys, clickedKey]); // Добавление нажатой клавиши
  };

  return (
    <div>
      {/* Отображение текущего слова с угаданными буквами */}
      <ul className="flex flex-wrap items-center justify-center gap-3">
        {currentWord?.split("").map((_, index) => (
          <li key={index} className={`-mt-10 mb-10 w-7 text-center text-3xl font-semibold uppercase ${ !correctLetters[index] && "mt-0 border border-b-2 border-black"}`}>
            {correctLetters[index]} {/* Отображение правильной буквы */}
          </li>
        ))}
      </ul>

      {/* Отображение подсказки */}
      <h4 className="mb-4 text-center text-lg font-medium max-md:text-base">
        Подсказка:{" "}
        <b ref={hintRef} className="font-semibold text-neutral-700"></b>
      </h4>

      {/* Отображение количества неправильных попыток и максимального количества попыток */}
      <h4 className="mb-4 text-center text-lg font-medium text-neutral-800 max-md:text-base">
        Неправильные попытки:{" "}
        <b className="font-bold text-red-500">
          {wrongGuesses} / {maxGuesses}
        </b>
      </h4>

      {/* Отображение игровой клавиатуры */}
      <GameKeyboard handleClickedKey={handleClickedKey} clickedKeys={clickedKeys} />
    </div>
  );
};

export default GameBoard;
