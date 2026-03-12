import styled, { css } from "styled-components";

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardContainer = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;

  ${(props) => {
    switch (props.$theme) {
      case "orange":
        return css`
          background-color: ${props.theme.colors.orangeLight};
          color: ${props.theme.colors.orange};
        `;
      case "green":
        return css`
          background-color: ${props.theme.colors.greenLight};
          color: ${props.theme.colors.green};
        `;
      case "purple":
        return css`
          background-color: ${props.theme.colors.purpleLight};
          color: ${props.theme.colors.purple};
        `;
      default:
        return css`
          background-color: ${props.theme.colors.orangeLight};
          color: ${props.theme.colors.orange};
        `;
    }
  }}

  p {
    font-size: 10px;
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
    line-height: 10px;
    color: inherit;
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.gray};
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  line-height: 18px;
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    width: 13px;
  }

  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: ${(props) => props.theme.colors.gray};
    letter-spacing: 0.2px;
  }
`;
