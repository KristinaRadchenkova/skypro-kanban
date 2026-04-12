import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import Calendar from "../Calendar/Calendar";
import { tasksAPI } from "../../services/api.js";

const PopBrowse = ({ card }) => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(
    card?.status || "Без статуса",
  );
  const [isUpdating, setIsUpdating] = useState(false);

  if (!card) return null;

  const handleClose = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const handleSave = async () => {
    if (selectedStatus === card.status) {
      setIsEditing(false);
      return;
    }

    setIsUpdating(true);
    try {
      await tasksAPI.updateStatus(card._id, selectedStatus);
      setIsEditing(false);
      window.location.reload();
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Ошибка при обновлении статуса");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleCancel = () => {
    setSelectedStatus(card.status);
    setIsEditing(false);
  };

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <S.PopBrowseContainer id="popBrowse">
      <S.PopBrowseWrapper>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            <S.PopBrowseTopBlock>
              <S.PopBrowseTitle>{card.title}</S.PopBrowseTitle>
              <S.ThemeTop
                $color={
                  card.topic === "Web Design"
                    ? "orange"
                    : card.topic === "Research"
                      ? "green"
                      : "purple"
                }
              >
                <p>{card.topic}</p>
              </S.ThemeTop>
            </S.PopBrowseTopBlock>

            <S.StatusBlock>
              <S.StatusTitle>Статус</S.StatusTitle>
              <S.StatusThemes>
                {statuses.map((status) => (
                  <S.StatusTheme
                    key={status}
                    $isActive={
                      (!isEditing && selectedStatus === status) ||
                      (isEditing && selectedStatus === status)
                    }
                    onClick={() => isEditing && handleStatusSelect(status)}
                    style={{ cursor: isEditing ? "pointer" : "default" }}
                  >
                    {status}
                  </S.StatusTheme>
                ))}
              </S.StatusThemes>
            </S.StatusBlock>

            <S.PopBrowseWrap>
              <S.PopBrowseForm>
                <S.FormBrowseBlock>
                  <S.FormBrowseLabel>Описание задачи</S.FormBrowseLabel>
                  <S.FormBrowseTextarea
                    placeholder="Введите описание задачи..."
                    value={card.description || "Нет описания"}
                    readOnly
                  />
                </S.FormBrowseBlock>
              </S.PopBrowseForm>
              <Calendar mode="browse" />
            </S.PopBrowseWrap>

            <S.ThemeDownBlock>
              <S.ThemeDown
                $color={
                  card.topic === "Web Design"
                    ? "orange"
                    : card.topic === "Research"
                      ? "green"
                      : "purple"
                }
              >
                <p>{card.topic}</p>
              </S.ThemeDown>
            </S.ThemeDownBlock>

            <S.ButtonGroup>
              <div className="btn-group">
                {isEditing ? (
                  <>
                    <S.ButtonEdit
                      $primary
                      onClick={handleSave}
                      disabled={isUpdating}
                    >
                      {isUpdating ? "Сохранение..." : "Сохранить"}
                    </S.ButtonEdit>
                    <S.ButtonClose onClick={handleCancel}>Отмена</S.ButtonClose>
                  </>
                ) : (
                  <>
                    <S.ButtonEdit $primary onClick={handleEditClick}>
                      Редактировать задачу
                    </S.ButtonEdit>
                    <S.ButtonClose onClick={handleClose}>Закрыть</S.ButtonClose>
                  </>
                )}
              </div>
            </S.ButtonGroup>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseWrapper>
    </S.PopBrowseContainer>
  );
};

export default PopBrowse;
