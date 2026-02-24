import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100%;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    width: 100%;
    margin: 0 auto;
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export const LoadingText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
`;
