import { NavLink } from "react-router-dom";

function formatDate(date){
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2,'0')
  const month = String(d.getMonth()+1).padStart(2,'0')
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

function EventShort(props){
    // const {updatePageEventSingle} = useContext(PageContext);

    const eventDate = props.date;
    eventDate.setHours(0,0,0,0);
    let eventDatePhrased = formatDate(eventDate);


    // onClick={() => updatePageEventSingle(props.id)}
    return( 
        <NavLink to={`/aus-idol-lookup/event/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="event-card-short">
                <div className="event-poster-container">
                    <img className="event-img-search" src={props.img} alt="Event Poster" />
                </div>
                <div className="event-info">
                    <strong className="event-info-name">{props.name}</strong>
                    <div><i className="fa-solid fa-city"></i> {props.city}</div>
                    <div><i className="fa-solid fa-calendar"></i> {eventDatePhrased}</div>
                </div>
            </div>
        </NavLink>
    );
}


export default EventShort