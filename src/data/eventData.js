import full_throttle_idol_relay_live from '../assets/posters/full_throttle_idol_relay_live.jpg'
import temp_event_show from '../assets/posters/temp_event_show.png'
import animaga_2026_sydney from '../assets/posters/animaga_2026_sydney.jpg'

export const eventsArray = [
    {
        id:1,
        name: "Unknown Event",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Not yet known",
        description: `<p>An event being put on by Snacktime</p>`,
        img: temp_event_show,
        ticketlink: "",
        groups: [{ id: 2, mtime: "", btime: "" }],
        date: new Date(2026, 3, 13) // year, month (0-11), day
    },
    {
        id:2,
        name: "animaga Sunday",
        type: "con",
        city: "Sydney/Eora",
        address: "ICC Sydney",
        description: `Mark your calendars! Animaga is coming to ICC Sydney on 14–15 March 2026, bringing two unforgettable days packed with anime, fandom, and excitement. For the very first time, Animaga is setting the stage in Sydney, and we're ready to make it an event to remember.`,
        ticketlink: "http://instagram.com/animagaexpo",
        img: animaga_2026_sydney,
        groups: [{ id: 3, mtime: "", btime: "" }],
        date: new Date(2026, 2, 15) // year, month (0-11), day
    },
    {
        id:3,
        name: "Full Throttle Idol Relay Live",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Hamilton Town Hall",
        description: `VIP DOORS OPEN: 5:00PM
                
                GA DOORS OPEN: 5:30PM
                
                Join us for the ultimate Idol Taiban Event where sweat flies, wotas roar, and only the toughest idols make it through. This is the Full Throttle Idol Relay Live. Three idol racers go in, one comes out the winner!
                
                Three Idols will take the stage to show everyone what they are made of! This live is a race to the end of the setlist concept. Each group will have five songs to complete before the end of the show. The first group to complete all five songs wins! The winning idols will have bragging rights and a solo encore song as a victory lap!
                
                Want to show your support for your favourite idol? VIPs get the opportunity to influence the race by picking their favourite idol. The winning team gets a special surprise for supporting their oshi to the end!
                
                Will your favourite idol win?
                
                SHOW FEATURES THE FOLLOWING IDOLS
                
                    CASSIE SAMA
                
                    CH4I
                
                    AMUSE PROJECT (Rinya, Pengi, Luvkii and Aleks)
                `,
        ticketlink: "https://events.humanitix.com/full-throttle-idol-relay-live",
        img: full_throttle_idol_relay_live,
        groups: [
            { id: 5, mtime: "", btime: "" },
            { id: 6, mtime: "", btime: "" },
            { id: 7, mtime: "", btime: "" }            
        ],
        date: new Date(2026, 2, 14) // year, month (0-11), day
    },
    {
        id:4,
        name: "animaga Saturday",
        type: "con",
        city: "Sydney/Eora",
        address: "ICC Sydney",
        description: `Mark your calendars! Animaga is coming to ICC Sydney on 14–15 March 2026, bringing two unforgettable days packed with anime, fandom, and excitement. For the very first time, Animaga is setting the stage in Sydney, and we're ready to make it an event to remember.`,
        ticketlink: "http://instagram.com/animagaexpo",
        img: animaga_2026_sydney,
        groups: [
            { id: 8, mtime: "1030", btime: "1045" },
            { id: 9, mtime: "1045", btime: "1100" },
            { id: 10, mtime: "1100", btime: "1115" },
            { id: 11, mtime: "1115", btime: "1130" },
            { id: 12, mtime: "1200", btime: "1215" },
            { id: 13, mtime: "1215", btime: "1230" },
            { id: 14, mtime: "1230", btime: "1245" },
            { id: 15, mtime: "1430", btime: "1445" },
            { id: 16, mtime: "1445", btime: "1500" },
            { id: 17, mtime: "1500", btime: "1515" },
            { id: 18, mtime: "1545", btime: "1600" },
            { id: 19, mtime: "1600", btime: "1615" },
            { id: 1, mtime: "1615", btime: "1630" }
        ],
        date: new Date(2026, 2, 14) // year, month (0-11), day
    }
];