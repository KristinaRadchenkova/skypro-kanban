import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

const RegisterBlock = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 40px 30px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
`;

const RegisterTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};
`;

const RegisterForm = styled.form`
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

const RegisterButton = styled.button`
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

const LoginLink = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const RegisterPage = ({ setIsAuth }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика регистрации
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return;
    }
    setIsAuth(true);
    navigate("/");
  };

  return (
    <RegisterContainer>
      <RegisterBlock>
        <RegisterTitle>Регистрация</RegisterTitle>
        <RegisterForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <Input
            type="password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
          <FormGroup>
            <p>
              Уже есть аккаунт? <LoginLink to="/login">Войти</LoginLink>
            </p>
          </FormGroup>
        </RegisterForm>
      </RegisterBlock>
    </RegisterContainer>
  );
};

export default RegisterPage;
