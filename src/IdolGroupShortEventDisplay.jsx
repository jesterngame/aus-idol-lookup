import { NavLink } from "react-router-dom";

function formatTime(time) {
  const hours = parseInt(time.slice(0, 2));
  const minutes = time.slice(2);

  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  return `${hours12}:${minutes} ${period}`;
}

function IdolGroupShortEventDisplay(props){

    let timeM;
    let timeB;

    if(props.mtime != ''){
        timeM = formatTime(props.mtime);
    } else {
        timeM = "N/A";
    }
    if(props.btime != ''){
        timeB = formatTime(props.btime);
    } else {
        timeB = "N/A";
    }

    return(
        <NavLink to={`/group/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div id={props.id} className="idol-group-card" >
                <img className="idol-logo-search" src={props.logo} alt="idol logo"></img>
                <div className="idolgroup-info">
                    <strong>{props.name}</strong>
                    <p><i className="fa-solid fa-music"></i> {timeM}</p>
                    <p><i className="fa-solid fa-shop"></i> {timeB}</p>
                </div>
            </div>
        </NavLink>
    );
}


export default IdolGroupShortEventDisplay