import {
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./PopUser.styled";
import { useAuth } from "../../contexts/AuthContext";

const PopUser = ({ isOpen, onExitClick }) => {
  const { user } = useAuth();

  const handleExitClick = (e) => {
    e.preventDefault();
    onExitClick();
  };

  const userName = user?.name || "Пользователь";
  const userLogin = user?.login || "user";

  return (
    <PopUserSet $isOpen={isOpen} id="user-set-target">
      <PopUserName>{userName}</PopUserName>
      <PopUserMail>{userLogin}</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button" onClick={handleExitClick}>
        Выйти
      </PopUserButton>
    </PopUserSet>
  );
};

export default PopUser;