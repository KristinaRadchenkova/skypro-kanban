import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #FFFFFF;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #D4DBE5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);

  @media screen and (max-width: 375px) {
    padding: 50px 20px;
  }
`;

const ExitTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: -0.4px;
  margin-bottom: 20px;
  color: #000000;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 375px) {
    display: block;
  }
`;

const ExitButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: ${props => props.$primary ? '#565EEF' : 'transparent'};
  border-radius: 4px;
  border: ${props => props.$primary ? 'none' : '0.7px solid #565EEF'};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${props => props.$primary ? '#FFFFFF' : '#565EEF'};
  cursor: pointer;
  transition: all 0.2s;
  margin-right: ${props => props.$primary ? '10px' : '0'};

  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
    border-color: #33399b;
  }

  a {
    width: 100%;
    height: 100%;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  @media screen and (max-width: 375px) {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: ${props => props.$primary ? '10px' : '0'};
  }
`;

const ExitPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    setIsAuth(false);
    navigate("/login");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <ExitContainer>
      <ExitBlock>
        <ExitTitle>Выход</ExitTitle>
        <ButtonGroup>
          <ExitButton $primary onClick={handleExit}>
            <a href="#exit">Да, выйти</a>
          </ExitButton>
          <ExitButton onClick={handleCancel}>
            <a href="#cancel">Нет, остаться</a>
          </ExitButton>
        </ButtonGroup>
      </ExitBlock>
    </ExitContainer>
  );
};

export default ExitPage;