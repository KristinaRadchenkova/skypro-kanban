import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

// Стилизованные компоненты
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

const LoginBlock = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px 30px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
`;

const LoginTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  outline: none;

  &::placeholder {
    color: #94a6be;
  }
`;

const LoginButton = styled.button`
  height: 40px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

const FormGroup = styled.div`
  text-align: center;

  p {
    color: ${(props) => props.theme.colors.gray};
    font-size: 14px;
  }
`;

const RegisterLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginPage = ({ setIsAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
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
              Нет аккаунта?{" "}
              <RegisterLink to="/register">Зарегистрироваться</RegisterLink>
            </p>
          </FormGroup>
        </LoginForm>
      </LoginBlock>
    </LoginContainer>
  );
};

export default LoginPage;
