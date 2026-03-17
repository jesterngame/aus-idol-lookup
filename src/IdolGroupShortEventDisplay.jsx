import groupPic from './assets/idol_temp_logo.png'
import React, {useContext} from 'react';
import {PageContext} from './App.jsx';

function formatTime(time) {
  const hours = parseInt(time.slice(0, 2));
  const minutes = time.slice(2);

  const period = hours >= 12 ? "PM" : "AM";
  const hours12 = hours % 12 || 12;

  return `${hours12}:${minutes} ${period}`;
}

function IdolGroupShortEventDisplay(props){
    const {page, updatePageGroupSolo} = useContext(PageContext);

    let timeM;
    let timeB;

    if(props.mtime != ''){
        timeM = formatTime(props.mtime);
    }
    if(props.btime != ''){
        timeB = formatTime(props.btime);
    }

    return(
        <div id={props.id} className="idol-group-card" onClick={() => updatePageGroupSolo(props.id)}>
            <img className="idol-logo-search" src={groupPic} alt="idol logo"></img>
            <div className="idolgroup-info">
                <strong>{props.name}</strong>
                <p><i className="fa-solid fa-music"></i> {timeM}</p>
                <p><i className="fa-solid fa-shop"></i> {timeB}</p>
            </div>
        </div>
    );
}


export default IdolGroupShortEventDisplay