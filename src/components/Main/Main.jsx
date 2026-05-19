import { useEffect } from "react";
import Column from "../Column/Column";
import {
  MainContainer,
  MainBlock,
  MainContent,
  LoadingWrapper,
  Spinner,
  LoadingText,
  ErrorContainer,
  ErrorText,
  RetryButton,
  EmptyState,
  EmptyStateIcon,
  EmptyStateTitle,
  EmptyStateText,
} from "./Main.styled";
import { Container } from "../App.styled";
import { useTasks } from "../../contexts/TaskContext";
import { tasksAPI } from "../../services/api";

const Main = ({ hideDataFetch = false }) => {
  const { tasks, isLoading, error, setTasks, fetchTasks } = useTasks();

  useEffect(() => {
    const loadTasks = async () => {
      const cachedTasks = tasksAPI.getTasksFromCache();

      if (cachedTasks && cachedTasks.length > 0) {
        setTasks(cachedTasks);
      } else if (!hideDataFetch) {
        try {
          await fetchTasks();
        } catch (err) {
          console.error("Main: ошибка загрузки задач:", err);
        }
      } else {
        try {
          await fetchTasks();
        } catch (err) {
          console.error("Main: ошибка загрузки задач:", err);
        }
      }
    };

    loadTasks();
  }, [hideDataFetch, fetchTasks, setTasks]);

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

  if (isLoading && !hideDataFetch) {
    return (
      <MainContainer>
        <Container>
          <LoadingWrapper>
            <Spinner />
            <LoadingText>Загрузка задач...</LoadingText>
          </LoadingWrapper>
        </Container>
      </MainContainer>
    );
  }

  if (error && !hideDataFetch) {
    return (
      <MainContainer>
        <Container>
          <ErrorContainer>
            <ErrorText>{error}</ErrorText>
            <RetryButton
              onClick={async () => {
                try {
                  await fetchTasks(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              Повторить попытку
            </RetryButton>
          </ErrorContainer>
        </Container>
      </MainContainer>
    );
  }

  if (!tasks || tasks.length === 0) {
    return (
      <MainContainer>
        <Container>
          <MainBlock>
            <MainContent>
              <EmptyState>
                <EmptyStateIcon>📋</EmptyStateIcon>
                <EmptyStateTitle>Новых задач нет</EmptyStateTitle>
                <EmptyStateText>
                  Создайте свою первую задачу, нажав кнопку "Создать новую
                  задачу"
                </EmptyStateText>
              </EmptyState>
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
                cards={tasks
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
