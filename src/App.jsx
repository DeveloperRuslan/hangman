// Импорт необходимых компонентов и контекста
import GameBoard from "./components/GameBoard"; // Компонент игрового поля
import GameOverModal from "./components/GameOverModal"; // Модальное окно окончания игры
import HangmanIllustration from "./components/HangmanIllustration"; // Иллюстрация игры "Виселица"
import { GameProvider } from "./context/GameContext"; // Провайдер контекста игры для управления состоянием

// Главный компонент приложения
export default function App() {
  return (
    // Обертываем приложение в GameProvider для управления состоянием
    <GameProvider>
      <div className="flex h-screen items-center justify-center px-3">
        <div className="flex w-[850px] items-end justify-between gap-16 rounded-lg bg-white px-10 py-14 shadow-xl max-md:flex-col max-md:items-center max-md:px-2.5 max-md:py-8">
          <HangmanIllustration /> 
          <GameBoard /> 
        </div>
        <GameOverModal /> 
      </div>
    </GameProvider>
  );
}
