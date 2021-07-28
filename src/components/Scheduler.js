import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // for selectable

export default function Scheduler() {
  const [events, setEvents] = useState([]);

  const addNewEvent = (newEvent) => {
    console.log(newEvent);
    let postOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify(newEvent),
    };

    fetch("http://localhost:3000/events", postOption)
      .then((res) => res.json())
      .then(console.log);
  };

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection
    if (title) {
      this.addNewEvent({
        calendar_id: this.props.user.id,
        user_id: this.props.user.id,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      });
      calendarApi.addEvent({
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        //allDay: selectInfo.allDay
      });
    }
  };

  const renderEventContent = (eventInfo) => {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        select={handleDateSelect}
        selectMirror={true}
        editable={true}
        eventContent={renderEventContent}
        height="auto"
        aspectRatio="auto"
      />
    </div>
  );
}
