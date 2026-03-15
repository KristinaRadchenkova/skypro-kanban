import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./components/AppRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(() => {
    // Проверяем localStorage при инициализации
    const savedAuth = localStorage.getItem("isAuth");
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  // Сохраняем состояние авторизации при его изменении
  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [isAuth]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </ThemeProvider>
  );
}

export default App;
