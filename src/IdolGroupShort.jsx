import groupPic from './assets/idol_temp_logo.png'
import React, {useContext} from 'react';
import {PageContext} from './App.jsx';

function IdolGroupShort(props){
    const {page, updatePageGroupSolo} = useContext(PageContext);

    return(
        <div id={props.id} className="idol-group-card" onClick={() => updatePageGroupSolo(props.id)}>
            <img className="idol-logo-search" src={props.logo} alt="idol logo"></img>
            <div className="idolgroup-info">
                <strong>{props.name}</strong>
                <div><i className="fa-solid fa-city"></i> {props.location}</div>
            </div>
        </div>
    );
}


export default IdolGroupShort