import styled from "styled-components";

export const ColumnContainer = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: ${(props) => props.theme.colors.gray};
    font-size: 14px;
    font-weight: ${(props) => props.theme.typography.fontWeight.semiBold};
    line-height: 1;
    text-transform: uppercase;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;
