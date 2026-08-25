import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import Calendar from "../Calendar/Calendar.jsx";
import { useTasks } from "../../contexts/TaskContext.jsx";
import ConfirmModal from "../ConfirmModal/ConfirmModal.jsx";

const PopBrowse = ({ card, onCardUpdate }) => {
  const navigate = useNavigate();
  const { updateTask, deleteTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(
    card?.status || "Без статуса",
  );
  const [selectedDate, setSelectedDate] = useState(() => {
    if (card?.date) {
      const date = new Date(card.date);
      return isNaN(date.getTime()) ? new Date() : date;
    }
    return new Date();
  });
  const [description, setDescription] = useState(card?.description || "");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState("");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    if (card) {
      setSelectedStatus(card.status || "Без статуса");
      if (card.date) {
        const date = new Date(card.date);
        if (!isNaN(date.getTime())) {
          setSelectedDate(date);
        }
      }
      setDescription(card.description || "");
    }
  }, [card]);

  if (!card) return null;

  const handleClose = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setError("");
  };

  const handleStatusSelect = (status) => {
    setSelectedStatus(status);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSave = async () => {
    const trimmedDescription = description.trim();
    if (trimmedDescription.length === 0) {
      setError("Описание не может быть пустым");
      return;
    }

    setIsUpdating(true);
    setError("");

    try {
      const updatedData = {
        title: card.title,
        topic: card.topic,
        theme: card.topic,
        status: selectedStatus,
        date: selectedDate.toISOString(),
        description: trimmedDescription,
      };

      await updateTask(card._id, updatedData);

      if (onCardUpdate) {
        onCardUpdate({
          status: selectedStatus,
          date: selectedDate,
          description: trimmedDescription,
          topic: card.topic,
        });
      }

      setIsEditing(false);
    } catch (err) {
      setError(err.message || "Ошибка при обновлении задачи");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setIsDeleteModalOpen(false);
    setIsDeleting(true);
    setError("");

    try {
      await deleteTask(card._id);
      navigate("/");
    } catch (err) {
      setError(err.message || "Ошибка при удалении задачи");
      setIsDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCancel = () => {
    setSelectedStatus(card.status);
    if (card.date) {
      const date = new Date(card.date);
      if (!isNaN(date.getTime())) {
        setSelectedDate(date);
      }
    }
    setDescription(card.description || "");
    setIsEditing(false);
    setError("");
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
              <S.CategoryBadge
                $color={
                  card.topic === "Web Design"
                    ? "orange"
                    : card.topic === "Research"
                      ? "green"
                      : "purple"
                }
              >
                {card.topic}
              </S.CategoryBadge>
            </S.PopBrowseTopBlock>

            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            <S.StatusSection>
              <S.SectionLabel>Статус</S.SectionLabel>
              {isEditing ? (
                <S.StatusList>
                  {statuses.map((status) => (
                    <S.StatusItem
                      key={status}
                      $isActive={selectedStatus === status}
                      $isClickable={true}
                      onClick={() => handleStatusSelect(status)}
                    >
                      {status}
                    </S.StatusItem>
                  ))}
                </S.StatusList>
              ) : (
                <S.StatusItem $isActive={true} $isClickable={false}>
                  {card.status}
                </S.StatusItem>
              )}
            </S.StatusSection>

            <S.ContentSection>
              <S.DescriptionSection>
                <S.SectionLabel>Описание задачи</S.SectionLabel>
                {isEditing ? (
                  <S.FormBrowseTextarea
                    name="description"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                ) : (
                  <S.DescriptionText>
                    {card.description || "Нет описания"}
                  </S.DescriptionText>
                )}
              </S.DescriptionSection>

              <S.CalendarSection>
                <Calendar
                  mode={isEditing ? "edit" : "view"}
                  selectedDate={selectedDate}
                  onDateSelect={handleDateSelect}
                />
              </S.CalendarSection>
            </S.ContentSection>

            <S.Footer>
              <S.ButtonGroupLeft>
                {isEditing ? (
                  <>
                    <S.OutlineButton onClick={handleSave} disabled={isUpdating}>
                      {isUpdating ? "Сохранение..." : "Сохранить"}
                    </S.OutlineButton>
                    <S.OutlineButton onClick={handleCancel}>
                      Отменить
                    </S.OutlineButton>
                    <S.OutlineButton
                      onClick={handleDeleteClick}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Удаление..." : "Удалить задачу"}
                    </S.OutlineButton>
                  </>
                ) : (
                  <>
                    <S.OutlineButton onClick={handleEditClick}>
                      Редактировать задачу
                    </S.OutlineButton>
                    <S.OutlineButton
                      onClick={handleDeleteClick}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Удаление..." : "Удалить задачу"}
                    </S.OutlineButton>
                  </>
                )}
              </S.ButtonGroupLeft>
              <S.PrimaryButton onClick={handleClose}>Закрыть</S.PrimaryButton>
            </S.Footer>
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseWrapper>
      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        title="Удаление задачи"
        message="Вы уверены, что хотите удалить эту задачу?"
      />
    </S.PopBrowseContainer>
  );
};

export default PopBrowse;
