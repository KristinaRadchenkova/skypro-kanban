import * as S from "./PopBrowse.styled";
import Calendar from "../Calendar/Calendar";

const PopBrowse = () => {
  return (
    <S.PopBrowseContainer id="popBrowse">
      <S.PopBrowseWrapper>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>Название задачи</S.PopBrowseTitle>
              <S.ThemeTop $color="orange">
                <p>Web Design</p>
              </S.ThemeTop>
            </S.PopBrowseTopBlock>
            <S.StatusBlock>
              <S.StatusTitle>Статус</S.StatusTitle>
              <S.StatusThemes>
                <S.StatusTheme $isHidden>Без статуса</S.StatusTheme>
                <S.StatusTheme $isActive>Нужно сделать</S.StatusTheme>
                <S.StatusTheme $isHidden>В работе</S.StatusTheme>
                <S.StatusTheme $isHidden>Тестирование</S.StatusTheme>
                <S.StatusTheme $isHidden>Готово</S.StatusTheme>
              </S.StatusThemes>
            </S.StatusBlock>
            <S.PopBrowseWrap>
              <S.PopBrowseForm id="formBrowseCard" action="#">
                <S.FormBrowseBlock>
                  <S.FormBrowseLabel htmlFor="textArea01">
                    Описание задачи
                  </S.FormBrowseLabel>
                  <S.FormBrowseTextarea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar mode="browse" />
            </S.PopBrowseWrap>
            <S.ThemeDownBlock>
              <S.StatusTitle>Категория</S.StatusTitle>
              <S.ThemeDown $color="orange">
                <p>Web Design</p>
              </S.ThemeDown>
            </S.ThemeDownBlock>
            <S.ButtonGroup>
              <div className="btn-group">
                <S.ButtonBrowse>
                  <a href="#">Редактировать задачу</a>
                </S.ButtonBrowse>
                <S.ButtonBrowse>
                  <a href="#">Удалить задачу</a>
                </S.ButtonBrowse>
              </div>
              <S.ButtonClose>
                <a href="#">Закрыть</a>
              </S.ButtonClose>
            </S.ButtonGroup>
            <S.HiddenBlock $isHidden>
              <S.ButtonGroup>
                <div className="btn-group">
                  <S.ButtonEdit $primary>
                    <a href="#">Сохранить</a>
                  </S.ButtonEdit>
                  <S.ButtonEdit>
                    <a href="#">Отменить</a>
                  </S.ButtonEdit>
                  <S.ButtonEdit id="btnDelete">
                    <a href="#">Удалить задачу</a>
                  </S.ButtonEdit>
                </div>
                <S.ButtonClose>
                  <a href="#">Закрыть</a>
                </S.ButtonClose>
              </S.ButtonGroup>
            </S.HiddenBlock>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseWrapper>
    </S.PopBrowseContainer>
  );
};

export default PopBrowse;
