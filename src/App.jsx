import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import { GlobalStyles } from "./GlobalStyles";
import { Wrapper } from "./components/App.styled";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
