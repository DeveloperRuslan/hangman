// Компонент GameKeyboard, принимает props handleClickedKey и clickedKeys
const GameKeyboard = ({ handleClickedKey, clickedKeys }) => {
  // Создаем массив букв русского алфавита от 'а' до 'я'
  const alphabetArray = [
      'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з',
      'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р',
      'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ',
      'ъ', 'ы', 'ь', 'э', 'ю', 'я'
  ];

  return (
      // Контейнер для кнопок клавиатуры
      <div className="mt-9 flex flex-wrap justify-center gap-1">
          {alphabetArray.map((char) => (
              <button
                  onClick={() => handleClickedKey(char)} // Обработка нажатия кнопки
                  disabled={clickedKeys.includes(char)} // Отключить кнопку, если клавиша уже нажата
                  key={char}
                  className={`w-[calc(100%/9-5px)] rounded-md border bg-emerald-700 py-1.5 font-semibold text-white hover:bg-emerald-600 ${clickedKeys.includes(char) && "pointer-events-none opacity-60"}`}
              >
                  {char.toUpperCase()} {/* Вывод буквы в верхнем регистре */}
              </button>
          ))}
      </div>
  );
};

  
  export default GameKeyboard;