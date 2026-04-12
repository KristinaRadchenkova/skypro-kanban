import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Wrapper } from "../components/App.styled";
import Header from "../components/Header/Header";
import PopBrowse from "../components/PopBrowse/PopBrowse";
import Main from "../components/Main/Main";
import styled from "styled-components";
import { tasksAPI } from "../services/api";

const CardPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackground};
  position: relative;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  gap: 20px;
`;

const ErrorText = styled.p`
  color: #c33;
  font-size: 16px;
`;

const RetryButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

const CardPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCard = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const task = await tasksAPI.getById(id);
      const formattedCard = {
        ...task,
        theme:
          task.topic === "Web Design"
            ? "orange"
            : task.topic === "Research"
              ? "green"
              : "purple",
      };
      setCard(formattedCard);
    } catch (err) {
      console.error("Error fetching card:", err);
      setError(err.message || "Не удалось загрузить задачу");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCard();
    }
  }, [id]);

  if (isLoading) {
    return (
      <Wrapper>
        <Header />
        <CardPageContainer>
          <Main />
          <LoadingContainer>Загрузка данных...</LoadingContainer>
        </CardPageContainer>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <Header />
        <CardPageContainer>
          <Main />
          <ErrorContainer>
            <ErrorText>{error}</ErrorText>
            <RetryButton onClick={fetchCard}>Повторить попытку</RetryButton>
          </ErrorContainer>
        </CardPageContainer>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header />
      <CardPageContainer>
        <Main />
        {card && <PopBrowse card={card} />}
      </CardPageContainer>
    </Wrapper>
  );
};

export default CardPage;
