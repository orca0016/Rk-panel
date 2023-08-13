import React, { useState } from "react";
import "./Calandar.css";
import { DateValue, Calendar } from "mantine-datepicker-jalali";
import "dayjs/locale/fa";
import dayjs from "dayjs";
import { Group, Indicator } from "@mantine/core";

function Calandars() {
  const [singleValue, setSingleValue] = useState(DateValue);
  const [selected, setSelected] = useState([]);
  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "D"));

    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => {
          console.log(!dayjs(d).isSame(date, "date"));
          return !dayjs(d).isSame(date, "date");
        })
      );
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };
  return (
    <div className="calandar-container">
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
        getDayProps={(date) => ({
          selected: selected.some((s) => dayjs(date).isSame(s, "date")),
          onClick: () => handleSelect(date),
        })}
      />
    </div>
  );
}

export default Calandars;
