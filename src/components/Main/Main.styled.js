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

export const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${(props) => props.theme.colors.lightGray};
  border-top: 4px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 20px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 16px;
  margin-top: 20px;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  gap: 20px;
`;

export const ErrorText = styled.p`
  color: #c33;
  font-size: 16px;
  text-align: center;
`;

export const RetryButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius.small};
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  width: 100%;
`;

export const EmptyStateIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

export const EmptyStateTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${(props) => props.theme.colors.black};
`;

export const EmptyStateText = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
`;
