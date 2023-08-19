import { Calendar } from "mantine-datepicker-jalali";
import { DateValue } from "mantine-datepicker-jalali";
import React from "react";
import "dayjs/locale/fa";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useState } from "react";

function CalendarOptimized(props) {
  const [singleValue, setSingleValue] = useState(DateValue);

  return (
    <Calendar
      label="تاریخ"
      placeholder="تاریخ را وارد کنید"
      style={{ direction: "rtl" }}
      defaultValue={new Date()}
      value={singleValue}
      onChange={setSingleValue}
      locale="fa"
      firstDayOfWeek={6}
      weekendDays={[5]}
      getDayProps={(date) => {
        return {
          style: { position: "relative" },
          "data-before": dayjs(date).isBefore(dayjs(), "date"),
          "data-event": props.selected.some((s) =>
            dayjs(date).isSame(s, "date")
          ),
          onClick: (e) => props.handleSelect(date, e),
        };
      }}
    />
  );
}
const MemoizedCalendarComponent = React.memo(CalendarOptimized);
export default MemoizedCalendarComponent;
