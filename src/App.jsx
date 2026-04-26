import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./components/AppRoutes";
import { useAuth } from "./contexts/AuthContext";

function App() {
  const { isLoading } = useAuth();

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
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;