import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleUserNameClick = (e) => {
    e.preventDefault();
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  const handleNewTaskClick = (e) => {
    e.preventDefault();
    navigate("/new");
  };

  return (
    <HeaderContainer>
      <Container>
        <HeaderBlock>
          <HeaderLogo $show>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </HeaderLogo>
          <HeaderLogo>
            <Link to="/">
              <img src="/images/logo_dark.png" alt="logo" />
            </Link>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew" onClick={handleNewTaskClick}>
              <Link to="/new">Создать новую задачу</Link>
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
