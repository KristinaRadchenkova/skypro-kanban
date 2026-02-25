import { useState, useEffect } from "react";
import Column from "../Column/Column";
import { cardList } from "../../data";
import {
  MainContainer,
  MainBlock,
  MainContent,
  LoadingContainer,
  LoadingText,
} from "./Main.styled";
import { Container } from "../App.styled";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardList);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const columns = [
    { title: "Без статуса", status: "Без статуса" },
    { title: "Нужно сделать", status: "Нужно сделать" },
    { title: "В работе", status: "В работе" },
    { title: "Тестирование", status: "Тестирование" },
    { title: "Готово", status: "Готово" },
  ];

  if (isLoading) {
    return (
      <MainContainer>
        <Container>
          <LoadingContainer>
            <LoadingText>Данные загружаются...</LoadingText>
          </LoadingContainer>
        </Container>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Container>
        <MainBlock>
          <MainContent>
            {columns.map((column) => (
              <Column
                key={column.status}
                title={column.title}
                cards={cards
                  .filter((card) => card.status === column.status)
                  .map((card) => ({
                    theme:
                      card.theme === "Web Design"
                        ? "orange"
                        : card.theme === "Research"
                          ? "green"
                          : "purple",
                    text: card.theme,
                    id: card.id,
                    title: card.title,
                    date: card.date,
                  }))}
              />
            ))}
          </MainContent>
        </MainBlock>
      </Container>
    </MainContainer>
  );
};

export default Main;
