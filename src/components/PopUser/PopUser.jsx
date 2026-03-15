import { useNavigate, Link } from "react-router-dom";
import {
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./PopUser.styled";

const PopUser = ({ isOpen }) => {
  const navigate = useNavigate();

  const handleExitClick = (e) => {
    e.preventDefault();
    navigate("/exit");
  };

  return (
    <PopUserSet $isOpen={isOpen} id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button" onClick={handleExitClick}>
        <Link to="/exit">Выйти</Link>
      </PopUserButton>
    </PopUserSet>
  );
};

export default PopUser;
