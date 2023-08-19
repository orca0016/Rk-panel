import React from "react";
import "./Calandar.css";
import { CalendarProvider, Calendar } from "zaman";
import { useContext } from "react";
import { ApiContext } from "../../context/dataContext";
function Calandars() {
  const {dark } = useContext(ApiContext);

  return (
    <div className={`calandar ${dark ? "light2" : null}`}>
      <CalendarProvider locale="fa" round="x2" accentColor="#000000">
        <Calendar
          className="h-calander-self"
          defaultValue={new Date()}
          onChange={(d) => console.log(d)}
          weekends={[6]}
        />
      </CalendarProvider>
    </div>
  );
}

export default Calandars;
