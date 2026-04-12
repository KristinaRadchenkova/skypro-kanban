import { useState, useEffect } from "react";
import {
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./PopUser.styled";

const PopUser = ({ isOpen, onExitClick }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (e) {
        console.error("Ошибка парсинга данных пользователя:", e);
      }
    }
  }, [isOpen]);

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
