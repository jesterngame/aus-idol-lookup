import EventShort from './EventShort.jsx'
import EventCurrentMonthCard from './EventCurrentMonthCard.jsx'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import 'swiper/css/free-mode';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Autoplay, Navigation, FreeMode, Pagination } from 'swiper/modules';

function EventList(props){

    const eventList = props.events;

    const now = new Date();

    const oneMonthFromNow = new Date();
      oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);

    const eventThisMonth = eventList.filter(event => {
        const d = event.date;
        return (
            d  >= now && d <= oneMonthFromNow
        );
    });
    const listCurrentEvents = eventThisMonth.map(events => <SwiperSlide key={events.id}><EventCurrentMonthCard key={events.id} id={events.id} name={events.name} img={events.img} date={events.date} city={events.city}/></SwiperSlide>);

    // const listEvents = eventThisMonth.map(events => <EventShort key={events.id} id={events.id} name={events.name} img={events.img} date={events.date} city={events.city}/>);

    return(
        <>
            <div className="main-swiper">
                <h5>Upcoming Events</h5>
                <Swiper
                    spaceBetween={15}
                    centeredSlides={true}
                    autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper SwiperEvent"
                >
                    {listCurrentEvents}
                    <div className="swiper-nav-button">
                        <div className="arrow-left"><i className="fa-solid fa-angle-left"></i></div>
                        <div className="arrow-right"><i className="fa-solid fa-angle-right"></i></div>
                    </div>
                </Swiper>
            </div>
            <div className="event-list-container">
                {/* {listEvents} */}
                <div className="hompage-intro">
                    <h5>New to idols in Australia? Read below!</h5>
                    <p>
                        Inspired by Japan's massively popular idol scene, Australia has had its own idol community growing since 2016. Originating in Sydney with live shows featuring dance & vocal covers of J-pop songs from groups such as AKB48, the scene quickly expanded. In addition to regularly organised shows throughout Australia's capital cities, idols can be found performing at many festivals, community events, and anime and pop culture conventions. Today, there are numerous idol groups and soloists performing both covers of J-pop idol songs, and their own original music. Every group has their own sound, ranging from pop and EDM to rock and metal. Explore this site to learn more about upcoming events & the groups performing at them!
                    </p>
                </div>
            </div>
        </>
    );
}

export default EventList;