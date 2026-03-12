import * as S from "./PopNewCard.styled";
import Calendar from "../Calendar/Calendar";

const PopNewCard = () => {
  return (
    <S.PopNewCardContainer id="popNewCard">
      <S.PopNewCardWrapper>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose href="#">&#10006;</S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.FormNewLabel htmlFor="formTitle">
                    Название задачи
                  </S.FormNewLabel>
                  <S.FormNewInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.FormNewLabel htmlFor="textArea">
                    Описание задачи
                  </S.FormNewLabel>
                  <S.FormNewTextarea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar mode="new" />
            </S.PopNewCardWrap>
            <S.CategoriesBlock>
              <S.CategoriesTitle>Категория</S.CategoriesTitle>
              <S.CategoriesThemes>
                <S.CategoryTheme $color="orange" $isActive>
                  <p>Web Design</p>
                </S.CategoryTheme>
                <S.CategoryTheme $color="green">
                  <p>Research</p>
                </S.CategoryTheme>
                <S.CategoryTheme $color="purple">
                  <p>Copywriting</p>
                </S.CategoryTheme>
              </S.CategoriesThemes>
            </S.CategoriesBlock>
            <S.FormNewCreateButton id="btnCreate">
              Создать задачу
            </S.FormNewCreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardWrapper>
    </S.PopNewCardContainer>
  );
};

export default PopNewCard;
