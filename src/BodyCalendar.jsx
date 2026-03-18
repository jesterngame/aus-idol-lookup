import Calendar from './EventCalendar.jsx'
import { eventsArray } from './data/eventData.js'
import RootLayout from './RootLayout.jsx'

function BodyCalendar(){
    return <>
        <RootLayout/>
        <div className="main-body">
        <Calendar events={eventsArray} />;
        </div>
    </>
}

export default BodyCalendar;