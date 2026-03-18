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

    const listEvents = eventThisMonth.map(events => <EventShort key={events.id} id={events.id} name={events.name} img={events.img} date={events.date} city={events.city}/>);

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