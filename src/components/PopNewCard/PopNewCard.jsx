import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./PopNewCard.styled";
import Calendar from "../Calendar/Calendar.jsx";
import { tasksAPI } from "../../services/api.js";

const PopNewCard = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    theme: "Web Design",
    status: "Без статуса",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleThemeSelect = (theme) => {
    setFormData((prev) => ({ ...prev, theme }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.title.trim()) {
      setError("Введите название задачи");
      return;
    }

    setIsSubmitting(true);

    try {
      await tasksAPI.create(formData);
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } catch (err) {
      console.error("Error creating task:", err);
      setError(err.message || "Ошибка при создании задачи");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <S.PopNewCardContainer id="popNewCard">
      <S.PopNewCardWrapper>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose href="#" onClick={handleClose}>
              &#10006;
            </S.PopNewCardClose>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" onSubmit={handleSubmit}>
                <S.FormNewBlock>
                  <S.FormNewLabel htmlFor="formTitle">
                    Название задачи
                  </S.FormNewLabel>
                  <S.FormNewInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleInputChange}
                    autoFocus
                    disabled={isSubmitting}
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.FormNewLabel htmlFor="textArea">
                    Описание задачи
                  </S.FormNewLabel>
                  <S.FormNewTextarea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                  />
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar mode="new" />
            </S.PopNewCardWrap>
            <S.CategoriesBlock>
              <S.CategoriesTitle>Категория</S.CategoriesTitle>
              <S.CategoriesThemes>
                <S.CategoryTheme
                  $color="orange"
                  $isActive={formData.theme === "Web Design"}
                  onClick={() => handleThemeSelect("Web Design")}
                >
                  <p>Web Design</p>
                </S.CategoryTheme>
                <S.CategoryTheme
                  $color="green"
                  $isActive={formData.theme === "Research"}
                  onClick={() => handleThemeSelect("Research")}
                >
                  <p>Research</p>
                </S.CategoryTheme>
                <S.CategoryTheme
                  $color="purple"
                  $isActive={formData.theme === "Copywriting"}
                  onClick={() => handleThemeSelect("Copywriting")}
                >
                  <p>Copywriting</p>
                </S.CategoryTheme>
              </S.CategoriesThemes>
            </S.CategoriesBlock>
            <S.FormNewCreateButton
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Создание..." : "Создать задачу"}
            </S.FormNewCreateButton>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardWrapper>
    </S.PopNewCardContainer>
  );
};

export default PopNewCard;
