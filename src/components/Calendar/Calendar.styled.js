import styled, { css } from "styled-components";

export const CalendarContainer = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 340px;
    width: 100%;
  }
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CalendarBlock = styled.div``;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  ${(props) =>
    props.$isOtherMonth &&
    css`
      opacity: 0;
    `}

  ${(props) => props.$isWeekend && css``}

  ${(props) =>
    props.$isCurrent &&
    css`
      font-weight: 700;
    `}

  ${(props) =>
    props.$isActive &&
    css`
      background-color: #94a6be;
      color: #ffffff;
    `}

  &:hover {
    ${(props) =>
      props.$isClickable &&
      css`
        color: #94a6be;
        background-color: #eaeef6;
      `}
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const PeriodText = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;
