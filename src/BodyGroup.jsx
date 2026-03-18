import IdolGroupList from './IdolGroupList.jsx'
import { idolGroupsArray } from './data/idolGroupData.js'
import RootLayout from './RootLayout.jsx'
import { useState } from "react";

function BodyGroup(){
    const [selectedCity, setSelectedCity] = useState("all");

    const filteredGroups = idolGroupsArray.filter(group => {
        if (selectedCity === "all") return true;
        return group.location === selectedCity;
    });

    const sortedGroups = filteredGroups.sort((a, b) => a.name.localeCompare(b.name));
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
                <option value="Brisbane/Meanjin">Brisbane/Meanjin</option>
                <option value="Melbourne/Naarm">Melbourne/Naarm</option>
                <option value="Sydney/Eora">Sydney/Eora</option>
            </select>
        </div>
        <div className="body-filter">
            <IdolGroupList groups={sortedGroups}/>
        </div>
    </>;
}

export default BodyGroup;