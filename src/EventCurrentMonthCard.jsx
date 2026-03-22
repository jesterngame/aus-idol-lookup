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

    const eventPosterImg = new Image();
    eventPosterImg.src = props.img;


    // onClick={() => updatePageEventSingle(props.id)} 
    return( 
        <NavLink to={`/event/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="event-poster-container">
                <div className="event-poster-full-card" 
                    // style={{
                    //     backgroundImage: `url(${props.img})`,
                    //     backgroundSize: "contain",
                    //     backgroundPosition: "center",
                    //     backgroundRepeat: "no-repeat",
                    //     height: "350px",
                    //     borderRadius: "10px",
                    //     marginTop: "20px"
                    // }}
                >
                    <div className="event-poster-image" style={{
                            aspectRatio: `${eventPosterImg.naturalWidth} / ${eventPosterImg.naturalHeight}`
                        }}>
                        <img src={props.img} />
                    </div>
                    <div className="event-info-poster-text">
                        <strong className="event-info-name">{props.name}</strong>
                        <div><strong>{props.city}</strong></div>
                        <div><strong>{eventDatePhrased}</strong></div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}


export default EventCurrentMonthCard