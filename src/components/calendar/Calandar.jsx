import React from "react";
import "./Calandar.css";
import { CalendarProvider, Calendar } from "zaman";

function Calandars() {
  return (
    <div className="calandar">
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
