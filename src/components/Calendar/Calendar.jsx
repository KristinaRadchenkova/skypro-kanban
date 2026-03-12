import * as S from "./Calendar.styled";

const Calendar = ({ mode = "new" }) => {
  const isBrowseMode = mode === "browse";

  return (
    <S.CalendarContainer>
      <S.CalendarTitle className="subttl">Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction data-action="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </S.NavAction>
            <S.NavAction data-action="next">
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
            <S.Cell $isOtherMonth>28</S.Cell>
            <S.Cell $isOtherMonth>29</S.Cell>
            <S.Cell $isOtherMonth>30</S.Cell>
            <S.Cell $isClickable>31</S.Cell>
            <S.Cell $isClickable>1</S.Cell>
            <S.Cell $isClickable $isWeekend>
              2
            </S.Cell>
            <S.Cell $isClickable $isWeekend>
              3
            </S.Cell>
            <S.Cell $isClickable>4</S.Cell>
            <S.Cell $isClickable>5</S.Cell>
            <S.Cell $isClickable>6</S.Cell>
            <S.Cell $isClickable>7</S.Cell>
            <S.Cell $isClickable $isCurrent>
              8
            </S.Cell>
            <S.Cell $isClickable $isWeekend $isActive={isBrowseMode}>
              9
            </S.Cell>
            <S.Cell $isClickable $isWeekend>
              10
            </S.Cell>
            <S.Cell $isClickable>11</S.Cell>
            <S.Cell $isClickable>12</S.Cell>
            <S.Cell $isClickable>13</S.Cell>
            <S.Cell $isClickable>14</S.Cell>
            <S.Cell $isClickable>15</S.Cell>
            <S.Cell $isClickable $isWeekend>
              16
            </S.Cell>
            <S.Cell $isClickable $isWeekend>
              17
            </S.Cell>
            <S.Cell $isClickable>18</S.Cell>
            <S.Cell $isClickable>19</S.Cell>
            <S.Cell $isClickable>20</S.Cell>
            <S.Cell $isClickable>21</S.Cell>
            <S.Cell $isClickable>22</S.Cell>
            <S.Cell $isClickable $isWeekend>
              23
            </S.Cell>
            <S.Cell $isClickable $isWeekend>
              24
            </S.Cell>
            <S.Cell $isClickable>25</S.Cell>
            <S.Cell $isClickable>26</S.Cell>
            <S.Cell $isClickable>27</S.Cell>
            <S.Cell $isClickable>28</S.Cell>
            <S.Cell $isClickable>29</S.Cell>
            <S.Cell $isClickable $isWeekend>
              30
            </S.Cell>
            <S.Cell $isOtherMonth $isWeekend>
              1
            </S.Cell>
          </S.Cells>
        </S.CalendarContent>

        <S.HiddenInput
          type="hidden"
          id="datepick_value"
          defaultValue="08.09.2023"
        />
        <S.CalendarPeriod>
          {isBrowseMode ? (
            <S.PeriodText className="date-end">
              Срок исполнения: <span className="date-control">09.09.23</span>
            </S.PeriodText>
          ) : (
            <S.PeriodText className="date-end">
              Выберите срок исполнения <span className="date-control"></span>.
            </S.PeriodText>
          )}
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarContainer>
  );
};

export default Calendar;
