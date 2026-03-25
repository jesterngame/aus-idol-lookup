import Calendar from './EventCalendar.jsx'
import { eventsArray } from './data/eventData.js'
import RootLayout from './RootLayout.jsx'
import { useState } from "react";

function BodyCalendar(){

    const [selectedCity, setSelectedCity] = useState("all");
        
    const filteredEvents = eventsArray.filter(event => {
        if (selectedCity === "all") return true;
        return event.city === selectedCity;
    });

    return <>
        <RootLayout/>
        <div className="filterSelectContainer">
            <label>City:</label>
            <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="filterSelecter"
            >
                <option value="all">All</option>
                <option value="Brisbane">Brisbane</option>
                <option value="Melbourne">Melbourne</option>
                <option value="Sydney">Sydney</option>
                <option value="Perth">Perth</option>
            </select>
        </div>
        <div className="main-body-filter">
            <Calendar events={filteredEvents} />
        </div>
    </>
}

export default BodyCalendar;