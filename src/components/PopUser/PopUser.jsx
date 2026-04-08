import {
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./PopUser.styled";

const PopUser = ({ isOpen, onExitClick }) => {
  const handleExitClick = (e) => {
    e.preventDefault();
    onExitClick();
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
        Выйти
      </PopUserButton>
    </PopUserSet>
  );
};

export default PopUser;
