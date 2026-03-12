import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./GlobalStyles";
import AppRoutes from "./components/AppRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />
    </ThemeProvider>
  );
}

export default App;
