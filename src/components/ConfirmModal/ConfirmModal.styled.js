import styled from "styled-components";

export const ConfirmOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ConfirmContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  padding: 30px;
  max-width: 400px;
  width: 90%;
  text-align: center;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
`;

export const ConfirmTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: ${(props) => props.theme.colors.black};
`;

export const ConfirmMessage = styled.p`
  font-size: 14px;
  margin-bottom: 25px;
  color: ${(props) => props.theme.colors.gray};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
`;

export const ConfirmButton = styled.button`
  padding: 10px 30px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

export const CancelButton = styled.button`
  padding: 10px 30px;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
