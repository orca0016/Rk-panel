import React, { useCallback, useState } from "react";
import "./Calandar.css";
import { DateValue } from "mantine-datepicker-jalali";
import "dayjs/locale/fa";
import dayjs from "dayjs";
import useMediaQuery from "@mui/material/useMediaQuery";
import BasicModal from "../modal/Modal";
import { useRef } from "react";
import DeleteModal from "../modal/deleteModal";
import InvalidModal from "../modal/InvalidModal";
import CalendarOptimized from "./CalendarOptimized";
import { useMemo } from "react";
import MemoizedCalendarComponent from "./CalendarOptimized";

function Calandars() {
  //refs--------------------------------------
  const dateJ = useRef(undefined);
  const obj = useRef([]);

  //states------------------------------------

  const [event, setEvent] = useState({
    id: "",
    title: "",
    info: "",
    date: "00:00",
    day: "",
  });
  const [singleValue, setSingleValue] = useState(DateValue);
  const [selected, setSelected] = useState([]);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openInvalid, setOpenInvalid] = useState(false);
  const [test, setTest] = useState("");

  //other hooks-------------------------------
  const onlySmallScreen = useMediaQuery("(max-width: 400px)");

  //handlers----------------------------------
  const handleSelect = useCallback(
    (date, e) => {
      dateJ.current = date;

      if (e.currentTarget.attributes["data-before"].value === "true") {
        setOpenInvalid(true);
      } else {
        const isSelected = selected.some((s) =>
          dayjs(dateJ.current).isSame(s, "D")
        );
        if (isSelected) {
          setOpenDelete(true);
        } else {
          setEvent((e) => {
            return {
              ...e,
              day: dayjs(dateJ.current).date(),
            };
          });
          setOpen(true);
        }
      }
    },
    [selected]
  );

  const handleCancel = () => {
    setOpen(false);
    setOpenDelete(false);
    setOpenInvalid(false);
  };

  function handleConfirm(e) {
    e.preventDefault();

    const isSelected = selected.some((s) =>
      dayjs(dateJ.current).isSame(s, "D")
    );
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => {
          return !dayjs(d).isSame(dateJ.current, "date");
        })
      );
    } else {
      if (event.title) {
        console.log(obj.current, dayjs().date().toString());
        setSelected((current) => [...current, dateJ.current]);
        obj.current.push(event);
        setOpen(false);
      } else {
        console.log("NO");
      }
    }
    setOpenDelete(false);
  }

  //functions---------------------------------

  //return------------------------------------
  return (
    <>
      <div className="calandar-container">
        <MemoizedCalendarComponent
          selected={selected}
          handleSelect={handleSelect}
        />

        {obj.current.map((e) => {
          return (
            <div className="h-event" key={e.id}>
              <p>{e.date}</p>
            </div>
          );
        })}
        <input
          type="text"
          onChange={(e) => {
            setTest(e.target.value);
          }}
        />
      </div>
      <BasicModal
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        open={open}
        setEvent={setEvent}
        event={event}
        onlySmallScreen={onlySmallScreen}
      />
      <DeleteModal
        dateJ={dateJ}
        obj={obj}
        open={openDelete}
        handleCancel={handleCancel}
        onlySmallScreen={onlySmallScreen}
        // handleConfirm={handleConfirm}
      />
      <InvalidModal
        open={openInvalid}
        handleCancel={handleCancel}
        onlySmallScreen={onlySmallScreen}
      />
    </>
  );
}

export default Calandars;
