import {
  PopUserSet,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./PopUser.styled";

const PopUser = ({ isOpen }) => {
  return (
    <PopUserSet $isOpen={isOpen} id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" className="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button">
        <a href="#popExit">Выйти</a>
      </PopUserButton>
    </PopUserSet>
  );
};

export default PopUser;
