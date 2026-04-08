import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Wrapper } from "../components/App.styled";
import Header from "../components/Header/Header";
import PopBrowse from "../components/PopBrowse/PopBrowse";
import Main from "../components/Main/Main";
import styled from "styled-components";
import { cardList } from "../data";

const CardPageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainBackground};
  position: relative;
`;

const CardPage = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    const foundCard = cardList.find((c) => c.id === Number(id));
    setCard(foundCard);
  }, [id]);

  return (
    <Wrapper>
      <Header />
      <CardPageContainer>
        <Main />
        {card && <PopBrowse card={card} />}
      </CardPageContainer>
    </Wrapper>
  );
};

export default CardPage;
