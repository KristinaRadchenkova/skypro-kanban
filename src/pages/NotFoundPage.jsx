import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper } from "../components/App.styled";
import Header from "../components/Header/Header";

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

const NotFoundContent = styled.div`
  text-align: center;
  background-color: ${(props) => props.theme.colors.white};
  padding: 60px 80px;
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
`;

const Title = styled.h1`
  font-size: 120px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 20px;
  line-height: 1;
  font-weight: 700;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 16px;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 30px;
`;

const HomeLink = styled(Link)`
  display: inline-block;
  padding: 14px 40px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  text-decoration: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

const NotFoundPage = () => {
  return (
    <Wrapper>
      <Header />
      <NotFoundContainer>
        <NotFoundContent>
          <Title>404</Title>
          <Subtitle>Страница не найдена</Subtitle>
          <Description>
            Запрашиваемая страница не существует или была удалена
          </Description>
          <HomeLink to="/">Вернуться на главную</HomeLink>
        </NotFoundContent>
      </NotFoundContainer>
    </Wrapper>
  );
};

export default NotFoundPage;
