import { useState, useEffect } from "react";
import Column from "../Column/Column";
import { tasksAPI } from "../../services/api";
import {
  MainContainer,
  MainBlock,
  MainContent,
  LoadingContainer,
  LoadingText,
  ErrorContainer,
  ErrorText,
  RetryButton,
} from "./Main.styled";
import { Container } from "../App.styled";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cards, setCards] = useState([]);

  const fetchTasks = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("token");
      console.log("Token exists:", !!token);

      if (!token) {
        throw new Error("Необходимо авторизоваться");
      }

      const tasks = await tasksAPI.getAll();
      console.log("Fetched tasks:", tasks);
      setCards(tasks);
    } catch (err) {
      console.error("Error fetching tasks:", err);
      setError(err.message || "Не удалось загрузить задачи");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const columns = [
    { title: "Без статуса", status: "Без статуса" },
    { title: "Нужно сделать", status: "Нужно сделать" },
    { title: "В работе", status: "В работе" },
    { title: "Тестирование", status: "Тестирование" },
    { title: "Готово", status: "Готово" },
  ];

  const formatDate = (dateString) => {
    if (!dateString) return "Нет даты";
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "Нет даты";
      return date.toLocaleDateString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
    } catch {
      return "Нет даты";
    }
  };

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

  if (error) {
    return (
      <MainContainer>
        <Container>
          <ErrorContainer>
            <ErrorText>{error}</ErrorText>
            <RetryButton onClick={fetchTasks}>Повторить попытку</RetryButton>
          </ErrorContainer>
        </Container>
      </MainContainer>
    );
  }

  if (cards.length === 0) {
    return (
      <MainContainer>
        <Container>
          <MainBlock>
            <MainContent>
              <div
                style={{
                  textAlign: "center",
                  padding: "40px",
                  color: "#94a6be",
                }}
              >
                Нет задач. Создайте первую задачу!
              </div>
            </MainContent>
          </MainBlock>
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
                      card.topic === "Web Design"
                        ? "orange"
                        : card.topic === "Research"
                          ? "green"
                          : "purple",
                    text: card.topic,
                    id: card._id,
                    title: card.title,
                    date: formatDate(card.date),
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
