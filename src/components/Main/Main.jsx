// src/components/Main/Main.jsx
import { useState, useEffect } from "react"; // Добавляем импорты
import Column from "../Column/Column";
import { cardList } from "../../data"; // Импортируем данные
import "./Main.css"; // Создадим этот файл для стилей загрузки

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Группируем карточки по статусам
  const columns = [
    { title: "Без статуса", status: "Без статуса" },
    { title: "Нужно сделать", status: "Нужно сделать" },
    { title: "В работе", status: "В работе" },
    { title: "Тестирование", status: "Тестирование" },
    { title: "Готово", status: "Готово" }
  ];

  if (isLoading) {
    return (
      <main className="main">
        <div className="container">
          <div className="main__loading">
            <p className="main__loading-text">Данные загружаются...</p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map(column => (
              <Column
                key={column.status}
                title={column.title}
                cards={cards
                  .filter(card => card.status === column.status)
                  .map(card => ({
                    theme: card.theme === "Web Design" ? "orange" : 
                           card.theme === "Research" ? "green" : "purple",
                    text: card.theme,
                    id: card.id,
                    title: card.title,
                    date: card.date
                  }))
                }
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;