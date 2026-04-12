import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import { authAPI } from "../services/api";

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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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

const ErrorMessage = styled.div`
  background-color: #fee;
  color: #c33;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
`;

const SuccessMessage = styled.div`
  background-color: #e6f7e6;
  color: #2d7a2d;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 14px;
  text-align: center;
`;

const RegisterPage = ({ setIsAuth }) => {
  const [login, setLogin] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!login.trim()) {
      setError("Введите логин");
      return;
    }

    if (login.length < 3) {
      setError("Логин должен содержать минимум 3 символа");
      return;
    }

    if (!name.trim()) {
      setError("Введите имя");
      return;
    }

    if (password !== confirmPassword) {
      setError("Пароли не совпадают");
      return;
    }

    if (password.length < 3) {
      setError("Пароль должен содержать минимум 3 символа");
      return;
    }

    setIsLoading(true);

    try {
      console.log("Attempting registration with:", { login, name });
      const result = await authAPI.register(login, name, password);
      console.log("Registration successful:", result);
      setSuccess("Регистрация прошла успешно! Перенаправление...");
      setIsAuth(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Registration error:", err);
      setError(
        err.message || "Ошибка при регистрации. Попробуйте другой логин.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <RegisterContainer>
      <RegisterBlock>
        <RegisterTitle>Регистрация</RegisterTitle>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}
        <RegisterForm onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Логин (минимум 3 символа)"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="username"
          />
          <Input
            type="text"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="name"
          />
          <Input
            type="password"
            placeholder="Пароль (минимум 3 символа)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="new-password"
          />
          <Input
            type="password"
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            disabled={isLoading}
            autoComplete="new-password"
          />
          <RegisterButton type="submit" disabled={isLoading}>
            {isLoading ? "Регистрация..." : "Зарегистрироваться"}
          </RegisterButton>
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
