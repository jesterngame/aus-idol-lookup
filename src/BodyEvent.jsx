import EventList from './EventList.jsx'
import { eventsArray } from './data/eventData.js'
import RootLayout from './RootLayout.jsx'

function BodyEvent(){

    const sortedEvents = eventsArray.sort((a, b) => a.date.getTime() - b.date.getTime());
    return <>
        <RootLayout/>
        <div className="main-body">
        <EventList events={sortedEvents} category="Events"/>
        </div>
        </>
}

export default BodyEvent;