import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import {
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
} from "./Header.styled";
import { Container } from "../App.styled";

const Header = () => {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);

  const handleUserNameClick = (e) => {
    e.preventDefault();
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderBlock>
          <HeaderLogo $show>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </HeaderBtnMainNew>
            <HeaderUser href="#user-set-target" onClick={handleUserNameClick}>
              Ivan Ivanov
            </HeaderUser>
            <PopUser isOpen={isUserPopupOpen} />
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
