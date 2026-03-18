import IdolGroupPage from './IdolGroupPage.jsx'
import { idolGroupsArray } from './data/idolGroupData.js'
import { idolsArray } from './data/idolData.js'
import { eventsArray } from './data/eventData.js'
import RootLayout from './RootLayout.jsx'
import { useParams } from 'react-router-dom';


function BodyGroup(){
    const params = useParams();
    const groupid = Number(params.groupid)
    const filteredGroup = idolGroupsArray.filter(group => group.id === groupid)[0];
    const filteredIdolMembers = idolsArray.filter(idol => idol.group.includes(groupid));
    const filteredEvents = eventsArray.filter(events=>events.groups.some(g => g.id === groupid));

    return <>
            <RootLayout/>
            <div className="main-body">
            <IdolGroupPage group={filteredGroup} members={filteredIdolMembers} events={filteredEvents}/>
            </div>
        </>;
}

export default BodyGroup;