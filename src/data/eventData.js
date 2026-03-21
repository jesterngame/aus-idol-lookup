import full_throttle_idol_relay_live from '../assets/posters/full_throttle_idol_relay_live.jpg'
import temp_event_show from '../assets/posters/temp_event_show.png'
import animaga_2026_sydney from '../assets/posters/animaga_2026_sydney.jpg'
import event_5_poster from '../assets/posters/event_5_poster.jpg'
import event_6_poster from '../assets/posters/event_6_poster.png'
import event_7_poster from '../assets/posters/event_7_poster.jpg'
import event_10_poster from '../assets/posters/event_10_poster.jpg'
import event_11_poster from '../assets/posters/event_11_poster.jpg'
import event_12_poster from '../assets/posters/event_12_poster.png'
import event_13_poster from '../assets/posters/event_13_poster.jpg'
import event_14_poster from '../assets/posters/event_14_poster.jpg'
import event_15_poster from '../assets/posters/event_15_poster.jpg'
import event_16_poster from '../assets/posters/event_16_poster.jpg'
import event_17_poster from '../assets/posters/event_17_poster.jpg'
import event_18_poster from '../assets/posters/event_18_poster.webp'
import event_19_poster from '../assets/posters/event_19_poster.png'
import event_20_poster from '../assets/posters/event_20_poster.jpg'
import event_22_poster from '../assets/posters/event_22_poster.jpg'
import event_23_poster from '../assets/posters/event_23_poster.webp'
import event_24_poster from '../assets/posters/event_24_poster.webp'

export const eventsArray = [
    {
        id:1,
        name: "TBA Snacktime Event",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Queen Street Mall",
        description: `TBA Snacktime Event`,
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
    },
    {
        id: 5,
        name: "DOUBLE FOOL - Gachi of Piece! + NEON LOUNGE",
        type: "live",
        city: "Sydney/Eora",
        address: "ESCAC by BRAND X",
        description: `A gathering to commemorate something...? Why are they run at the same time? A Lounge and Otaku ofukai? 


        Gachi of Piece! 
        Otaku! Wota! Let's have an ofukai together where we celebrate our favourite idols! Let's go all out and call! Bring your badges (wait do we have any?), Penlights, and uryaoi! Cheki-meishi, kagishime, cause world chaos and show your oshi who"s the true top wota. Wear your favourite Idol group"s merch and get something from us.

        今日の最前管理

        Emi's #1 Otaku (Lili) 
        Lili's #1 Otaku (Emi)

        NEON LOUNGE

        Come and bask yourself in the hospitality of the neon lounge. Share a drink with us* and celebrate, after a long week of hard work. Wear something fancy and classy, and you might get a special gift! 

        CAST 

        FUUTAiZMiZUKI
        Shiitakki

        no alcohol will be served*`,
        ticketlink: "https://www.4qnq.info/event-details/double-fool-gachi-of-piece-neon-lounge",
        img: event_5_poster,
        groups: [
            { id: 16, mtime: "", btime: "" },
            { id: 14, mtime: "", btime: "" }
        ],
        date: new Date(2026, 2, 22)
    },
    {
        id: 6,
        name: "極致ピエロ: THE PROPRO SHOW",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "PIP Theatre",
        description: `Welcome one and all to Seiryou Process’s end of Sad Clown era live: Kyokuchi Pierro. Join us and supporting act Amuse Project in a unique, high-energy dark-circus themed kaigai idol live to celebrate music, creativity, and all things clown. Hold onto your sanity; our circus only has one more stop before the end of the road. Get a taste of what comes next.`,
        ticketlink: "https://piptheatre.org/%E6%A5%B5%E8%87%B4%E3%83%94%E3%82%A8%E3%83%AD-the-propro-show/",
        img: event_6_poster,
        groups: [
            { id: 4, mtime: "", btime: "" },
            { id: 5, mtime: "", btime: "" }
        ],
        date: new Date(2026, 3, 4)
    },
    {
        id: 7,
        name: "AniMayhem 2026 Saturday",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Brisbane Convention and Exhibition Centre",
        description: `AniMayhem is Brisbane’s newest anime and pop culture convention, debuting in May 2026. Set to attract thousands of anime lovers, cosplayers, collectors, and pop culture fans. This immersive two-day event offers a platform for brands to engage directly with Australia’s vibrant otaku community.`,
        ticketlink: "https://expertiseevents.eventsair.com/animayhem-2026/animayhemtix26/Site/Register",
        img: event_7_poster,
        groups: [
            { id: 5, mtime: "", btime: "" }
        ],
        date: new Date(2026, 4, 2)
    },
    {
        id: 8,
        name: "Unknown Event",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "",
        description: ``,
        ticketlink: "",
        img: temp_event_show,
        groups: [
            { id: 17, mtime: "", btime: "" }
        ],
        date: new Date(2026, 4, 2)
    },
    {
        id: 9,
        name: "AniMayhem 2026 Sunday",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Brisbane Convention and Exhibition Centre",
        description: `AniMayhem is Brisbane’s newest anime and pop culture convention, debuting in May 2026. Set to attract thousands of anime lovers, cosplayers, collectors, and pop culture fans. This immersive two-day event offers a platform for brands to engage directly with Australia’s vibrant otaku community.`,
        ticketlink: "https://expertiseevents.eventsair.com/animayhem-2026/animayhemtix26/Site/Register",
        img: event_7_poster,
        groups: [
            { id: 5, mtime: "", btime: "" }
        ],
        date: new Date(2026, 4, 3)
    },
    {
        id: 10,
        name: "Shiro Stage",
        type: "live",
        city: "Melbourne/Naarm",
        address: "Richmond Theatrette",
        description: `Overview

        Melbourne idol groups come together for a reverse Valentines show for White Day

        Welcome to Shiro Stage!
        One month after Valentines day, we celebrate once again with gift giving and sweet treats.


        Featuring performances by:
        LuMeteor

        Hibiskiss

        Aquatic Memories

        and a debut performance by Unmei`,
        ticketlink: "https://www.eventbrite.com.au/e/shiro-stage-idol-taiban-tickets-1982266809388",
        img: event_10_poster,
        groups: [
            { id: 21, mtime: "", btime: "" },
            { id: 23, mtime: "", btime: "" },
            { id: 24, mtime: "", btime: "" },
            { id: 20, mtime: "", btime: "" }
        ],
        date: new Date(2026, 2, 22)
    },
    {
        id: 11,
        name: "AniRock Fes Melbourne",
        type: "live",
        city: "Melbourne/Naarm",
        address: "Stay Gold",
        description: `Get ready for a night dedicated entirely to J-Rock, J-Pop, and iconic anime music!

        This special live event features two idol groups and two live bands, bringing you performances from classics to fan-favorites band animes — including hits from BanG Dream!, Bocchi the Rock!, etc.

        🔥Follow our host instagram ‘overtuned_band’ to get setlists and more details!

        Expect an immersive J-music experience with:
        ✨ High-energy stages by local idol groups
        🎸 Live band performances of anime and J-Rock classics
        🎭 Cosplay on stage — many members will be performing in character, and we fully welcome audiences to come in their favourite cosplay and enjoy the music together!

        To bring the authentic Japanese livehouse atmosphere, we’ve also prepared:
        📸 Cheki (Polaroid) sessions
        🤝 Special meet & greet / tokuten time
        🎁 Lucky draw prizes for attendees

        If you’re a fan of anime music, J-Rock, Japanese idols, or JP livehouse culture,
        **this is an event you definitely don’t want to miss!**🔥`,
        ticketlink: "https://www.eventbrite.com.au/e/anirock-fes-melbourne-tickets-1978683448459",
        img: event_11_poster,
        groups: [
            { id: 23, mtime: "", btime: "" },
            { id: 22, mtime: "", btime: "" }
        ],
        date: new Date(2026, 2, 29)
    },
    {
        id: 12,
        name: "Ready, Set, Re:Start!",
        type: "live",
        city: "Sydney/Eora",
        address: "Red Rattler Theatre",
        description: `READY. SET! RE:START 💜 — Azusa Graduation Live

        Come send off Azusa with Faeble at our next one-man-live! 

        🗓️ 29.03.26
        📍 Red Rattler, Marrickville 
        ⏱️ Doors open — 6PM`,
        ticketlink: "https://www.faeblefuture.com/shop/p/hyperdrive-5r2sw-8jyr3",
        img: event_12_poster,
        groups: [
            { id: 15, mtime: "", btime: "" }
        ],
        date: new Date(2026, 2, 29)
    },
    {
        id: 13,
        name: "Idolscope IV - 深海の中へ",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Hamilton Town Hall",
        description: ``,
        ticketlink: "https://www.instagram.com/idolscope.au/",
        img: event_13_poster,
        groups: [],
        date: new Date(2026, 7, 7)
    },
    {
        id: 14,
        name: "Evernight Ball",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Grange Community Hall",
        description: `⭐️✨🌌🪩

        𝒀𝒐𝒖 𝒂𝒓𝒆 𝒇𝒐𝒓𝒎𝒂𝒍𝒍𝒚 𝒊𝒏𝒗𝒊𝒕𝒆𝒅… 𝓣𝓸 𝓸𝓾𝓻 𝓔𝓿𝓮𝓻𝓷𝓲𝓰𝓱𝓽 𝓑𝓪𝓵𝓵!
        A magical night of dancing, dress up, and performances. All to fundraise for children in need

        💫 Save the date, and join Starlight Chasers 💫
        » on August 29th 2026 from 3:45pm
        » at Grange Town Hall
        » in Formal / Semi Formal dress code

        » More information to come !`,
        ticketlink: "",
        img: event_14_poster,
        groups: [],
        date: new Date(2026, 7, 29)
    },
    {
        id: 15,
        name: "Maid with Magic Live",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Hamilton Town Hall",
        description: `Please join us for our first ever birthday live event with guest maids, Bloom Idol Project!! It'll be a night full of moe & magical spells to keep the night alive~

        Merch & drinks are available for purchase during the event.

        Food is NOT available to be purchased during the event and only through your ticket.

        Limited tickets available.

        What are you waiting for?! Get your tickets now before they sell out!`,
        ticketlink: "https://events.humanitix.com/maid-with-magic-live",
        img: event_15_poster,
        groups: [
            { id: 25, mtime: "", btime: "" },
            { id: 1, mtime: "", btime: "" }
        ],
        date: new Date(2026, 4, 30)
    },
    {
        id: 16,
        name: "Baywave Youth Festival!",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "Lota Skatepark, Lota",
        description: `Baywave Youth Festival!

            Time: 11AM-4PM

            Tickets: Free`,
        ticketlink: "https://www.instagram.com/babiyouthandfamilyservice/",
        img: event_16_poster,
        groups: [{ id: 2, mtime: "", btime: "" }],
        date: new Date(2026, 3, 8)
    },
    {
        id: 17,
        name: "Oishii Party  おいしい パーティー",
        type: "taiban",
        city: "Brisbane/Meanjin",
        address: "Kurilpa Hall, 174 Boundary St, West End QLD 4101",
        description: `Ready your plates for delicious performance from Idols in Meanjin (Brisbane). SnackTime presents our Taiban event 'おいしい パーティー' with special help from Constellation. This event will include four ~15 minute performances from four idol groups and buppan merch sales. Join us on April 25th, 5:30pm - 8pm, Kurilpa Hall West End.`,
        img: event_17_poster,
        ticketlink: "https://www.trybooking.com/events/landing/1558232?utm_source=ig&utm_medium=social&utm_content=link_in_bio",
        groups: [
            { id: 2, mtime: "", btime: "" },
            { id: 26, mtime: "", btime: "" },
            { id: 27, mtime: "", btime: "" },
            { id: 28, mtime: "", btime: "" }
        ],
        date: new Date(2026, 3, 25) // year, month (0-11), day
    },
    {
        id: 18,
        name: "Oshi Mart 2",
        type: "live",
        city: "Perth/Boorloo",
        address: "Moonchunk Gacha and Claw",
        description: `Ever wondered how idol fans know to chant and cheer in sync? Or how the audience coordinates their penlights seamlessly to each song? Now is your chance to learn!

        Oshi Mart will be hosting TWO Wota 101 sessions taught by Brisbane Idol Cassie-Sama. These sessions will instruct you on how to call/mix, use your penlights, and some extra bits on oshi-culture you mightn't know! 

        These sessions are free and open to everybody! RSVP is not required but encouraged and available via the link in our bio! 

        Practice your new skills with our performers throughout the day, and get excited about idol!`,
        ticketlink: "https://form.jotform.com/260748837856879",
        img: event_18_poster,
        groups: [
            { id: 6, mtime: "", btime: "" }
        ],
        date: new Date(2026, 3, 11) // year, month (0-11), day
    },
    {
        id: 19,
        name: "Yume No Chu!",
        type: "live",
        city: "Perth/Boorloo",
        address: "The Jonesway Theatre",
        description: `iDol Mic Night presents their second JPOP IDOL TAIBAN: Yume No Chu!
        Enter the dreamy stage and cheer on your favourite stars as they perform Japanese idol, jpop and anisong faves!`,
        ticketlink: "https://www.thejoneswaytheatre.com.au/eventsandtickets/idol-mic-night",
        img: event_19_poster,
        groups: [],
        date: new Date(2026, 4, 2) // year, month (0-11), day
    },
    {
        id: 20,
        name: "IDOLKURA 11",
        type: "live",
        city: "Sydney/Eora",
        address: "Rouge Bar Sydney",
        description: `We"re bringing back IDOLKURA! Come share a drink, dance to a night of J-Idol, Anikura, J-Core! 
        With DJ INVOKER & CODA making their IDOLKURA DEBUT!`,
        ticketlink: "https://www.4qnq.info/event-details/idolkura-11",
        img: event_20_poster,
        groups: [
            { id: 29, mtime: "", btime: "" },
            { id: 3, mtime: "", btime: "" },
            { id: 16, mtime: "", btime: "" },
            { id: 14, mtime: "", btime: "" }
        ],
        date: new Date(2026, 2, 30) // year, month (0-11), day
    },
    {
        id: 21,
        name: "Deakin Idol Fest",
        type: "live",
        city: "Melbourne/Naarm",
        address: "Deakin University Burwood",
        description: `Our mid trimester celebration is here! If you’re a fan of J-pop or K-pop, come have fun with us on the last day of uni before the Easter break. The evening will be full of idol performances, and related craft activities and games.`,
        ticketlink: "https://www.instagram.com/p/DVx1RvXE727/",
        img: temp_event_show,
        groups: [{ id: 30, mtime: "", btime: "" }],
        date: new Date(2026, 3, 2) // year, month (0-11), day
    },
    {
        id: 22,
        name: "Charm's Picnic Party",
        type: "live",
        city: "Melbourne/Naarm",
        address: "Flagstaff Gardens",
        description: `It's a party, and you"re invited!!🌺

        This April 4th, I"m hosting a picnic at Flagstaff Gardens! 

        For this event, anyone can perform on this open stage concept live. Please apply via the form below.`,
        ticketlink: "https://docs.google.com/forms/d/e/1FAIpQLSe6ADVXo8vLtBriOLhyNEskShuicdXuygooDEL0yymO_pKDyg/viewform",
        img: event_22_poster,
        groups: [{ id: 30, mtime: "", btime: "" }],
        date: new Date(2026, 3, 4) // year, month (0-11), day
    },
    {
        id: 23,
        name: "INTERSTELLAR",
        type: "live",
        city: "Brisbane/Meanjin",
        address: "E-Space",
        description: `Multiverse AU proudly presents Interstellar, our very first event!—where idols and creators collide across worlds.


        Interstellar is a celebration of performance culture and community, connecting the audience to a wide range of talented performers from all walks of life, while also bringing our own mini artist alley for a festival feel.

        Join Multiverse as we begin a journey so many have achieved before us!

        This is a community-run event. Ticket purchases contribute directly to the costs of delivering the event and ensuring a safe, high-quality experience for performers, vendors, and attendees. Thank you for supporting independent creative communities and helping make this event possible.`,
        ticketlink: "https://events.humanitix.com/interstellar-y6qh262g?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAb21jcAQq659leHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAafOTjET_QgvX_zAQ_bFtUof5siYi5fdw4zWwQqmDVbs1QQQcGD8GlKU7jwojQ_aem_lMtEiTnBWUWrpzwMNwHhgw",
        img: event_23_poster,
        groups: [],
        date: new Date(2026, 9, 3) // year, month (0-11), day
    },
    {
        id: 24,
        name: "We are HiMizu!",
        type: "live",
        city: "Sydney/Eora",
        address: "ESCAC by Brand X",
        description: `HiMizu"s 1st One Man - We are HiMizu!

        Details:

        Saturday, 4th April 2026

        ESCAC by Brand X, 34 Burton Street, Darlinghurst

        Doors: 3:00pm

        Start: 3:15pm



        FREE ENTRY (RSVP using this ticket)

        Live Programs are available for pick up for $10!

        Note - There will be a limited amount on the day. Purchasing a booklet with your RSVP ensures you don't miss out!`,
        ticketlink: "https://himizu.square.site/product/we-are-himizu-ticket/ZYPCO753WLXRRMT4JXH3VMJR",
        img: event_24_poster,
        groups: [{ id: 18, mtime: "", btime: "" }],
        date: new Date(2026, 3, 4) // year, month (0-11), day
    }

];