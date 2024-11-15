import { useContext } from "react";
import GameContext from "../context/GameContext";

// Компонент HangmanIllustration
const HangmanIllustration = () => {
  // Извлечение значения wrongGuesses из контекста GameContext
  const { wrongGuesses } = useContext(GameContext);

  return (
    <div>
      {/* Отображение изображения повешенного в зависимости от количества неверных угадываний */}
      <img
        className="pointer-events-none max-w-[270px] select-none max-md:max-w-[200px]"
        src={`hangman-${wrongGuesses}.svg`} // Динамическое имя изображения на основе количества неверных угадываний
        alt="Hangman Illustration" // Альтернативный текст для изображения
      />
      <h2 className="mt-6 text-center text-2xl font-bold uppercase max-md:hidden">Игра Палач</h2> {/* Заголовок, скрываемый на малых экранах */}
    </div>
  );
};

export default HangmanIllustration; // Экспортируем компонент для использования в других частях приложения
