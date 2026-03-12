import { Wrapper } from "../components/App.styled";
import Header from "../components/Header/Header";
import PopNewCard from "../components/PopNewCard/PopNewCard";
import styled from "styled-components";

const NewCardContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

const NewCardPage = () => {
  return (
    <Wrapper>
      <Header />
      <NewCardContainer>
        <PopNewCard />
      </NewCardContainer>
    </Wrapper>
  );
};

export default NewCardPage;