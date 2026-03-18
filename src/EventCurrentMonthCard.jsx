import { NavLink } from "react-router-dom";

function formatDate(date){
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2,'0')
  const month = String(d.getMonth()+1).padStart(2,'0')
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

function EventCurrentMonthCard(props){
    // const {updatePageEventSingle} = useContext(PageContext);

    const eventDate = props.date;
    eventDate.setHours(0,0,0,0);
    let eventDatePhrased = formatDate(eventDate);

    // onClick={() => updatePageEventSingle(props.id)} 
    return( 
        <NavLink to={`/event/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div 
                className="event-poster-full-card" 
                style={{
                    backgroundImage: `url(${props.img})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "350px",
                    borderRadius: "10px",
                    marginTop: "20px"
                }}
            >
                <div className="event-info-poster">
                </div>
                <div className="event-info-poster-text">
                        <strong className="event-info-name">{props.name}</strong>
                        <div>{props.city}</div>
                        <div>{eventDatePhrased}</div>
                    </div>
            </div>
        </NavLink>
    );
}


export default EventCurrentMonthCard