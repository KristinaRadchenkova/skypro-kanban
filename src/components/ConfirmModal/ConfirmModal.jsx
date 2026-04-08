import * as S from "./ConfirmModal.styled";

const ConfirmModal = ({ isOpen, onConfirm, onCancel, title, message }) => {
  if (!isOpen) return null;

  return (
    <S.ConfirmOverlay onClick={onCancel}>
      <S.ConfirmContainer onClick={(e) => e.stopPropagation()}>
        <S.ConfirmTitle>{title || "Подтверждение"}</S.ConfirmTitle>
        <S.ConfirmMessage>{message || "Вы уверены?"}</S.ConfirmMessage>
        <S.ButtonGroup>
          <S.ConfirmButton onClick={onConfirm}>Да</S.ConfirmButton>
          <S.CancelButton onClick={onCancel}>Нет</S.CancelButton>
        </S.ButtonGroup>
      </S.ConfirmContainer>
    </S.ConfirmOverlay>
  );
};

export default ConfirmModal;
