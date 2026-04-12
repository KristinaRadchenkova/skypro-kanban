import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./components/AppRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Проверяем наличие токена при загрузке приложения
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    console.log("App init - token exists:", !!token);
    console.log("App init - user exists:", !!user);

    if (token && user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Загрузка приложения...
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </ThemeProvider>
  );
}

export default App;
