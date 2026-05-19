import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper } from "../components/App.styled";
import Header from "../components/Header/Header";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";

const ExitContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

const ExitContent = styled.div`
  text-align: center;
  padding: 40px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
`;

const ExitMessage = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.black};
`;

const ExitPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();

    const timer = setTimeout(() => {
      navigate("/login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [logout, navigate]);

  return (
    <Wrapper>
      <Header />
      <ExitContainer>
        <ExitContent>
          <ExitMessage>Вы успешно вышли из системы</ExitMessage>
          <ExitMessage>Перенаправление на страницу входа...</ExitMessage>
        </ExitContent>
      </ExitContainer>
    </Wrapper>
  );
};

export default ExitPage;