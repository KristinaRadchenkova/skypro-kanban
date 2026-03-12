import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

// Импортируем стили из макета через styled-components
const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #EAEEF6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    max-width: 368px;
    width: 100%;
    padding: 0 16px;
    border-radius: none;
    border: none;
    box-shadow: none;
  }
`;

const LoginTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.6px;
  margin-bottom: 20px;
  color: #000000;
`;

const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  min-width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 10px 8px;
  margin-bottom: 7px;
  font-family: 'Roboto', sans-serif;

  &::placeholder {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.28px;
    color: #94A6BE;
  }

  &:first-child {
    margin-bottom: 7px;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: 375px) {
    height: 40px;
  }
`;

const FormGroup = styled.div`
  text-align: center;

  p, a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }

  a {
    text-decoration: underline;
    color: rgba(148, 166, 190, 0.4);
    transition: color 0.2s;

    &:hover {
      color: #565EEF;
    }
  }
`;

const RegisterLink = styled(Link)`
  text-decoration: underline;
  color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  margin-left: 5px;

  &:hover {
    color: #565EEF;
  }
`;

const LoginPage = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика авторизации
    setIsAuth(true);
    navigate("/");
  };

  return (
    <LoginContainer>
      <LoginBlock>
        <LoginTitle>Вход</LoginTitle>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <LoginButton type="submit">Войти</LoginButton>
          <FormGroup>
            <p>
              Нет аккаунта? <RegisterLink to="/register">Зарегистрироваться</RegisterLink>
            </p>
          </FormGroup>
        </LoginForm>
      </LoginBlock>
    </LoginContainer>
  );
};

export default LoginPage;