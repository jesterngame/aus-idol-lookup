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
    const currentMonth = now.getMonth();   // 0–11
    const currentYear = now.getFullYear();

    const eventThisMonth = eventList.filter(event => {
        const d = event.date;
        return (
            d.getMonth() === currentMonth &&
            d.getFullYear() === currentYear
        );
    });
    const listCurrentEvents = eventThisMonth.map(events => <SwiperSlide key={events.id}><EventCurrentMonthCard key={events.id} id={events.id} name={events.name} img={events.img} date={events.date} city={events.city}/></SwiperSlide>);

    const listEvents = eventList.map(events => <EventShort key={events.id} id={events.id} name={events.name} img={events.img} date={events.date} city={events.city}/>);

    return(
        <>
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
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper SwiperEvent"
            >
                {listCurrentEvents}
            </Swiper>
            <div className="event-list-container">
                {listEvents}
            </div>
        </>
    );
}

export default EventList;