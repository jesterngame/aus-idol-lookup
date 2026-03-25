import IdolGroupList from './IdolGroupList.jsx'
import { idolGroupsArray } from './data/idolGroupData.js'
import RootLayout from './RootLayout.jsx'
import { useState } from "react";
import Select from "react-select";

const options = [
  { value: "Jpop", label: "Jpop" },
  { value: "Genki", label: "Genki" },
  { value: "Eurobeat", label: "Eurobeat" },
  { value: "EDM", label: "EDM" },
  { value: "Rock", label: "Rock" },
  { value: "Metal", label: "Metal" },
];


function BodyGroup(){
    const [selectedCity, setSelectedCity] = useState("all");
    const [selectedGenre, setSelectedGenres] = useState([]);
    const [searchName, setSearchName] = useState("");

    const selectedGenres = selectedGenre.map(opt => opt.value);

    const filteredGroups = idolGroupsArray.filter(group => {
        const matchLocation = (selectedCity === "all") || group.location === selectedCity;

        const matchGenre = (!selectedGenre.length) || selectedGenres.every(genre => group.genre.includes(genre))

        const matchesSearch = searchName.trim() === "" || group.name.toLowerCase().includes(searchName.toLowerCase());

        return matchLocation && matchGenre && matchesSearch
    });

    // const filteredGroups2 = filteredGroups.filter(group =>{
    //     (!selectedGenre.length) || selectedGenres.every(genre => group.genre.includes(genre))
    // });

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
                <option value="Brisbane">Brisbane</option>
                <option value="Melbourne">Melbourne</option>
                <option value="Sydney">Sydney</option>
            </select>
            
            <div className="filterSelectGenre">
                <label>Name:</label>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchName}
                    onChange={e => setSearchName(e.target.value)}
                />
            </div>

            <div className="filterSelectGenre">
                <label>Genre:</label>
                <Select
                    isMulti
                    options={options}
                    value={selectedGenre}
                    onChange={setSelectedGenres}
                    placeholder="Select Genres..."
                    className="filterMultiSelect"
                />
            </div>
        </div>
        <div className="body-filter">
            <IdolGroupList groups={sortedGroups}/>
        </div>
    </>;
}

export default BodyGroup;