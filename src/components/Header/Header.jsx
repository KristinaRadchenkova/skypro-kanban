import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PopUser from "../PopUser/PopUser";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import {
  HeaderContainer,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  HeaderBtnMainNew,
  HeaderUser,
} from "./Header.styled";
import { Container } from "../App.styled";
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleUserNameClick = (e) => {
    e.preventDefault();
    setIsUserPopupOpen(!isUserPopupOpen);
  };

  const handleNewTaskClick = (e) => {
    e.preventDefault();
    navigate("/new");
  };

  const handleExitClick = () => {
    setIsConfirmOpen(true);
  };

  const handleConfirmExit = () => {
    setIsConfirmOpen(false);
    navigate("/exit");
  };

  const handleCancelExit = () => {
    setIsConfirmOpen(false);
  };

  const userName = user?.name || "Пользователь";

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
              Создать новую задачу
            </HeaderBtnMainNew>
            <HeaderUser href="#" onClick={handleUserNameClick}>
              {userName}
            </HeaderUser>
            <PopUser isOpen={isUserPopupOpen} onExitClick={handleExitClick} />
          </HeaderNav>
        </HeaderBlock>
      </Container>
      <ConfirmModal
        isOpen={isConfirmOpen}
        onConfirm={handleConfirmExit}
        onCancel={handleCancelExit}
        title="Выход из системы"
        message="Вы уверены, что хотите выйти?"
      />
    </HeaderContainer>
  );
};

export default Header;