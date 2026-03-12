import { useParams } from "react-router-dom";
import { Wrapper } from "../components/App.styled";
import Header from "../components/Header/Header";
import PopBrowse from "../components/PopBrowse/PopBrowse";
import styled from "styled-components";

const CardPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

const CardPage = () => {
  const { id } = useParams();

  return (
    <Wrapper>
      <Header />
      <CardPageContainer>
        <PopBrowse />
        <div style={{ padding: "20px", textAlign: "center" }}>
          <p>Просмотр карточки с ID: {id}</p>
        </div>
      </CardPageContainer>
    </Wrapper>
  );
};

export default CardPage;
