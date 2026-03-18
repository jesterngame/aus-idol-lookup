import EventPage from './EventPage.jsx'
import { eventsArray } from './data/eventData.js'
import { idolGroupsArray } from './data/idolGroupData.js'
import RootLayout from './RootLayout.jsx'
import { useParams } from 'react-router-dom';

function BodyEvent(){
    const params = useParams();
    const eventid = Number(params.eventid)

    const filteredEvent = eventsArray.filter(event => event.id === eventid)[0];

    const groupIds = new Set(filteredEvent.groups.map(g => g.id))
    const orderMap = new Map(filteredEvent.groups.map(g => [g.id, g.mtime]));

    const filteredIdolGroups = idolGroupsArray.filter(group=>groupIds.has(group.id)).sort((a, b) => (orderMap.get(a.id) || Infinity) - (orderMap.get(b.id) || Infinity));

    return <>
        <RootLayout/>
        <div className="main-body">
        <EventPage event={filteredEvent} groups={filteredIdolGroups}/>
        </div>
        </>
}

export default BodyEvent;