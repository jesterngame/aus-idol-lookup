import {PageContext} from './App.jsx';
import React, { useState, useContext } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay
} from "date-fns";

const Calendar = ({ events = [] }) => {

    const {updatePageEventSingle} = useContext(PageContext);

    const [currentDate, setCurrentDate] = useState(new Date());

    const renderHeader = () => {
        return (
        <div className="header">
            <div className="monthSelector">
                <button className="monthArrow" onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
                <i className="fa-solid fa-angle-left"></i>
                </button>
                <div className='currentMonthDisplay'>
                    <h2>{format(currentDate, "MMMM yyyy")}</h2>
                </div>
                <button className="monthArrow" onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
                <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
            <button className="monthToday" onClick={() => setCurrentDate(new Date())}>
                Today
            </button>
        </div>
        );
    };

    const renderDays = () => {
        const days = [];
        const startDate = startOfWeek(currentDate);
        
        for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col day" key={i}>
            {format(addDays(startDate, i), "EEE")}
            </div>
        );
        }

        return <div className="row">{days}</div>;
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentDate);
        const monthEnd = endOfMonth(monthStart);

        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const rows = [];
        let days = [];
        let day = startDate;

        while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            const dayClone = day;

            const dayEvents = events.filter(event =>
                isSameDay(event.date, dayClone)
            );

            days.push(
            <div
                className={`cell ${
                !isSameMonth(dayClone, monthStart) ? "disabled" : ""
                } ${isSameDay(dayClone, new Date()) ? "selected" : ""}`}
                key={dayClone}
            >
                <div className="date-number">{format(dayClone, "d")}</div>

                <div className="calEvents">
                {dayEvents.map(event => (
                    <div key={event.id} className="calEvent" onClick={() => updatePageEventSingle(event.id)}>
                    {event.name}
                    </div>
                ))}
                </div>
            </div>
            );

            day = addDays(day, 1);
        }

        rows.push(
            <div className="row" key={day}>
            {days}
            </div>
        );

        days = [];
        }

        return <div className="body">{rows}</div>;
    };

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};

export default Calendar;