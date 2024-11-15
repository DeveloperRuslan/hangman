import { useContext } from "react";
import GameContext from "../context/GameContext";

// Компонент GameOverModal
const GameOverModal = () => {
  // Извлекаем необходимые значения из контекста GameContext
  const { currentWord, isGameWon, showModal, resetGameBoard } = useContext(GameContext);

  return (
    // Контейнер модального окна с условной видимостью
    <div className={`inset fixed z-10 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.5)] px-3 backdrop-blur-lg ${showModal ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition-opacity duration-300`}>
      <div className="flex max-w-[420px] flex-grow flex-col items-center rounded-lg border bg-white p-7 text-center shadow-2xl">
        {/* Отображаем соответствующий гиф в зависимости от результата игры */}
        <img className="mb-5 max-w-32 max-md:w-28" src={`${showModal && (isGameWon ? 'won' : 'lost')}.gif`} alt="Gif" />

        {/* Отображаем сообщение о результате игры */}
        <h4 className="text-2xl font-bold">
          {showModal && (isGameWon ? "Поздравляем!" : "Удачи в следующий раз!")}
        </h4>

        {/* Отображаем результат игры и правильное слово */}
        <p className="mb-8 mt-4 text-xl max-lg:text-lg">
          {isGameWon ? "Вы угадали слово" : "Правильное слово было"}
          <br />
          <b className="font-bold uppercase text-emerald-700">{" "} {showModal && currentWord}</b>
        </p>

        {/* Кнопка Повторить игру */}
        <button
          onClick={resetGameBoard}
          className="max-lg:2 rounded-md border bg-emerald-700 px-5 py-2.5 font-medium uppercase text-white hover:bg-emerald-600 max-lg:px-4"
        >
          Играть снова
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
