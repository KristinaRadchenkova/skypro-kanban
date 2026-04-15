import { useState, useEffect } from "react";
import * as S from "./Calendar.styled";

const Calendar = ({
  mode = "new",
  selectedDate: externalSelectedDate,
  onDateSelect,
}) => {
  const [selectedDate, setSelectedDate] = useState(() => {
    if (externalSelectedDate) {
      const date = new Date(externalSelectedDate);
      return isNaN(date.getTime()) ? new Date() : date;
    }
    return new Date();
  });

  const [currentMonth, setCurrentMonth] = useState(() => {
    if (externalSelectedDate) {
      const date = new Date(externalSelectedDate);
      return isNaN(date.getTime()) ? new Date() : date;
    }
    return new Date();
  });

  const isViewMode = mode === "view";
  const isEditMode = mode === "edit" || mode === "new";

  useEffect(() => {
    if (externalSelectedDate) {
      const date = new Date(externalSelectedDate);
      if (!isNaN(date.getTime())) {
        setSelectedDate(date);
        setCurrentMonth(date);
      }
    }
  }, [externalSelectedDate]);

  const handleDateSelect = (day, month, year) => {
    if (isViewMode) return;

    const date = new Date(year, month, day);
    setSelectedDate(date);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });
  };

  const getMonthName = (date) => {
    const month = date.toLocaleDateString("ru-RU", { month: "long" });
    const year = date.getFullYear();
    return `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}`;
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay() || 7;

    const days = [];

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i > 0; i--) {
      days.push({
        day: prevMonthLastDay - i + 1,
        isOtherMonth: true,
        date: new Date(year, month - 1, prevMonthLastDay - i + 1),
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        isOtherMonth: false,
        date: new Date(year, month, i),
      });
    }

    const remainingDays = 42 - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        day: i,
        isOtherMonth: true,
        date: new Date(year, month + 1, i),
      });
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1),
    );
  };

  const days = getDaysInMonth(currentMonth);
  const today = new Date();

  const isToday = (date) => {
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  return (
    <S.CalendarContainer>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>{getMonthName(currentMonth)}</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction onClick={handlePrevMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </S.NavAction>
            <S.NavAction onClick={handleNextMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.DaysNames>
            <S.DayName>пн</S.DayName>
            <S.DayName>вт</S.DayName>
            <S.DayName>ср</S.DayName>
            <S.DayName>чт</S.DayName>
            <S.DayName>пт</S.DayName>
            <S.DayName>сб</S.DayName>
            <S.DayName>вс</S.DayName>
          </S.DaysNames>
          <S.Cells>
            {days.map((day, index) => (
              <S.Cell
                key={index}
                $isOtherMonth={day.isOtherMonth}
                $isWeekend={isWeekend(day.date)}
                $isCurrent={isToday(day.date)}
                $isActive={isSelected(day.date)}
                $isClickable={isEditMode}
                onClick={() =>
                  handleDateSelect(
                    day.day,
                    day.date.getMonth(),
                    day.date.getFullYear(),
                  )
                }
              >
                {day.day}
              </S.Cell>
            ))}
          </S.Cells>
        </S.CalendarContent>

        <S.CalendarPeriod>
          <S.PeriodText>
            Срок исполнения:{" "}
            <S.PeriodDate>{formatDate(selectedDate)}</S.PeriodDate>
          </S.PeriodText>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarContainer>
  );
};

export default Calendar;
