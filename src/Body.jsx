import IdolGroupList from './IdolGroupList.jsx'
import Idolgroup from './Idolgroup.jsx'
import IdolGroupPage from './IdolGroupPage.jsx'
import EventList from './EventList.jsx'
import EventPage from './EventPage.jsx'
import Calendar from './EventCalendar.jsx'
import { idolsArray } from './data/idolData.js'
import { idolGroupsArray } from './data/idolGroupData.js'
import { eventsArray } from './data/eventData.js'

function Body(props){

    if (props.page === "Group") {
        const sortedGroups = idolGroupsArray.sort((a, b) => a.name.localeCompare(b.name));
        return <IdolGroupList groups={sortedGroups}/>;
    }

    if (props.page === "Idol") {
        return <Idolgroup members={idolsArray} category="Idols"/>;
    }

    if (props.page === "Events") {
        const sortedEvents = eventsArray.sort((a, b) => a.date.getTime() - b.date.getTime());
        return <EventList events={sortedEvents} category="Events"/>;
    }

    if (props.page === "Event") {
        const filteredEvent = eventsArray.filter(event => event.id === props.eventid)[0];

        const groupIds = new Set(filteredEvent.groups.map(g => g.id))
        const orderMap = new Map(filteredEvent.groups.map(g => [g.id, g.mtime]));

        const filteredIdolGroups = idolGroupsArray.filter(group=>groupIds.has(group.id)).sort((a, b) => (orderMap.get(a.id) || Infinity) - (orderMap.get(b.id) || Infinity));

        return <EventPage event={filteredEvent} groups={filteredIdolGroups}/>;
    }

    if (props.page === "GroupSolo") {
        const filteredGroup = idolGroupsArray.filter(group => group.id === props.groupid);
        const filteredIdolMembers = idolsArray.filter(idol => idol.group.includes(props.groupid));
        const filteredEvents = eventsArray.filter(events=>events.groups.some(g => g.id === props.groupid));
        return <IdolGroupPage group={filteredGroup} members={filteredIdolMembers} events={filteredEvents}/>;
    }

    if (props.page === "Calendar") {

        return <Calendar events={eventsArray} />;
    }

    return null;
}

export default Body;