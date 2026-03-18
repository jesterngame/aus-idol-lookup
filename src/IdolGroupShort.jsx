import groupPic from './assets/idol_temp_logo.png'
// import React, {useContext} from 'react';
// import {PageContext} from './App.jsx';
import { NavLink } from "react-router-dom";

function IdolGroupShort(props){
    // const {page, updatePageGroupSolo} = useContext(PageContext);
    // onClick={() => updatePageGroupSolo(props.id)}

    return(
        <NavLink to={`/aus-idol-lookup/group/${props.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div id={props.id} className="idol-group-card">
                <img className="idol-logo-search" src={props.logo} alt="idol logo"></img>
                <div className="idolgroup-info">
                    <strong>{props.name}</strong>
                    <div><i className="fa-solid fa-city"></i> {props.location}</div>
                </div>
            </div>
        </NavLink>
    );
}


export default IdolGroupShort