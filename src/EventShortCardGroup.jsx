import React, {useContext} from 'react';
import {PageContext} from './App.jsx';

function formatDate(date){
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2,'0')
  const month = String(d.getMonth()+1).padStart(2,'0')
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

function EventShortCardGroup(props){
    const {updatePageEventSingle} = useContext(PageContext);

    const eventDate = props.date;
    eventDate.setHours(0,0,0,0);
    let eventDatePhrased = formatDate(eventDate);

    return(
        <div id={props.id} className="idol-group-card" onClick={() => updatePageEventSingle(props.id)}>
            <div className="event-group-image">
                <img src={props.img} alt="Event Poster" />
            </div>
            <div className="idolgroup-info">
                <strong className="event-info-name">{props.name}</strong>
                <div><i className="fa-solid fa-city"></i> {props.city}</div>
                <div><i className="fa-solid fa-calendar"></i> {eventDatePhrased}</div>
            </div>
        </div>
    );
}


export default EventShortCardGroup