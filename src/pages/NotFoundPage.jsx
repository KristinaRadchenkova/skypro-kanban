import { Link } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

const NotFoundContent = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 120px;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 20px;
  line-height: 1;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: ${(props) => props.theme.colors.black};
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
    <NotFoundContainer>
      <NotFoundContent>
        <Title>404</Title>
        <Subtitle>Страница не найдена</Subtitle>
        <HomeLink to="/">Вернуться на главную</HomeLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
