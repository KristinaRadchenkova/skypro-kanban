import styled, { css } from "styled-components";

export const PopBrowseContainer = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 7;
  pointer-events: none;

  @media screen and (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseWrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent; /* Убираем затемнение */
  pointer-events: none;

  @media screen and (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.white};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
  pointer-events: auto;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);

  @media screen and (max-width: 660px) {
    border-radius: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: 20px 16px 32px;
  }
`;

// Остальные стили остаются без изменений...
export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const ThemeTop = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;

  ${(props) => {
    switch (props.$color) {
      case "orange":
        return css`
          background-color: #ffe4c2;
          p {
            color: #ff6d00;
          }
        `;
      case "green":
        return css`
          background-color: #b4fdd1;
          p {
            color: #06b16e;
          }
        `;
      case "purple":
        return css`
          background-color: #e9d4ff;
          p {
            color: #9a48f1;
          }
        `;
      default:
        return css`
          background-color: #ffe4c2;
          p {
            color: #ff6d00;
          }
        `;
    }
  }}

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const StatusBlock = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  padding: 11px 14px 10px;
  background-color: ${(props) => (props.$isActive ? "#94a6be" : "#eaeef6")};
  color: ${(props) => (props.$isActive ? "#ffffff" : "#94a6be")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  opacity: ${(props) => (props.$isHidden ? "0" : "1")};
  pointer-events: ${(props) => (props.$isHidden ? "none" : "auto")};

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#94a6be" : "#dbe2ed")};
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 15px;

  @media screen and (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const FormBrowseTextarea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: none;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 100%;
    height: 34px;
  }
`;

export const ThemeDownBlock = styled.div`
  margin: 20px 0;
`;

export const ThemeDown = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-top: 14px;

  ${(props) => {
    switch (props.$color) {
      case "orange":
        return css`
          background-color: #ffe4c2;
          p {
            color: #ff6d00;
          }
        `;
      case "green":
        return css`
          background-color: #b4fdd1;
          p {
            color: #06b16e;
          }
        `;
      case "purple":
        return css`
          background-color: #e9d4ff;
          p {
            color: #9a48f1;
          }
        `;
      default:
        return css`
          background-color: #ffe4c2;
          p {
            color: #ff6d00;
          }
        `;
    }
  }}

  p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-group {
    display: flex;
    gap: 8px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 10px;

    .btn-group {
      width: 100%;
      flex-direction: column;
    }
  }
`;

export const ButtonBrowse = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  background-color: #565eef;
  border: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s;

  a {
    color: #ffffff;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    height: 40px;
  }
`;

export const ButtonClose = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  background-color: transparent;
  border: 0.7px solid #565eef;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #565eef;
  cursor: pointer;
  transition: all 0.2s;

  a {
    color: #565eef;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
    border-color: #33399b;
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    height: 40px;
  }
`;

export const ButtonEdit = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) =>
    props.$primary
      ? css`
          background-color: #565eef;
          border: none;
          color: #ffffff;

          a {
            color: #ffffff;
          }

          &:hover {
            background-color: #33399b;
          }
        `
      : css`
          background-color: transparent;
          border: 0.7px solid #94a6be;
          color: #94a6be;

          a {
            color: #94a6be;
          }

          &:hover {
            background-color: #dbe2ed;
          }
        `}

  a {
    text-decoration: none;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    height: 40px;
  }
`;

export const HiddenBlock = styled.div`
  display: ${(props) => (props.$isHidden ? "none" : "block")};
  margin-top: 20px;
`;
