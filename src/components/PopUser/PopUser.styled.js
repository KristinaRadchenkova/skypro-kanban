import styled from "styled-components";

export const PopUserSet = styled.div`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: ${(props) => props.theme.borderRadius.large};
  border: 0.7px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const PopUserName = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 14px;
  font-weight: ${(props) => props.theme.typography.fontWeight.medium};
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 4px;
`;

export const PopUserMail = styled.p`
  color: ${(props) => props.theme.colors.gray};
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const PopUserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${(props) => props.theme.colors.black};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }

  input[type="checkbox"] {
    position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #eaeef6;
    outline: none;
    appearance: none;

    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.colors.gray};
      transition: 0.5s;
    }
  }

  input:checked[type="checkbox"]::before {
    left: 12px;
  }
`;

export const PopUserButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${(props) => props.theme.colors.primary};
  border-radius: ${(props) => props.theme.borderRadius.small};
  border: 1px solid ${(props) => props.theme.colors.primary};

  a {
    color: ${(props) => props.theme.colors.primary};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
    color: ${(props) => props.theme.colors.white};

    a {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;
