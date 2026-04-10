import { useNavigate } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import Calendar from "../Calendar/Calendar";

const PopBrowse = ({ card }) => {
  const navigate = useNavigate();

  if (!card) return null;

  const handleClose = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <S.PopBrowseContainer id="popBrowse">
      <S.PopBrowseWrapper>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{card.title}</S.PopBrowseTitle>
              <S.ThemeTop
                $color={
                  card.theme === "Web Design"
                    ? "orange"
                    : card.theme === "Research"
                      ? "green"
                      : "purple"
                }
              >
                <p>{card.theme}</p>
              </S.ThemeTop>
            </S.PopBrowseTopBlock>

            <S.StatusBlock>
              <S.StatusTitle>Статус</S.StatusTitle>
              <S.StatusThemes>
                <S.StatusTheme $isActive={card.status === "Без статуса"}>
                  Без статуса
                </S.StatusTheme>
                <S.StatusTheme $isActive={card.status === "Нужно сделать"}>
                  Нужно сделать
                </S.StatusTheme>
                <S.StatusTheme $isActive={card.status === "В работе"}>
                  В работе
                </S.StatusTheme>
                <S.StatusTheme $isActive={card.status === "Тестирование"}>
                  Тестирование
                </S.StatusTheme>
                <S.StatusTheme $isActive={card.status === "Готово"}>
                  Готово
                </S.StatusTheme>
              </S.StatusThemes>
            </S.StatusBlock>

            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormBrowseBlock>
                  <S.FormBrowseLabel>Описание задачи</S.FormBrowseLabel>
                  <S.FormBrowseTextarea
                    placeholder="Введите описание задачи..."
                    value="Описание задачи будет здесь"
                    readOnly
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar mode="browse" />
            </S.PopBrowseWrap>

            <S.ThemeDownBlock>
              <S.ThemeDown
                $color={
                  card.theme === "Web Design"
                    ? "orange"
                    : card.theme === "Research"
                      ? "green"
                      : "purple"
                }
              >
                <p>{card.theme}</p>
              </S.ThemeDown>
            </S.ThemeDownBlock>

            <S.ButtonGroup>
              <div className="btn-group">
                <S.ButtonEdit $primary>Редактировать задачу</S.ButtonEdit>
                <S.ButtonClose onClick={handleClose}>Закрыть</S.ButtonClose>
              </div>
            </S.ButtonGroup>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseWrapper>
    </S.PopBrowseContainer>
  );
};

export default PopBrowse;
