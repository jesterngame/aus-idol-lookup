"use client";

import { Swiper, SwiperSlide } from 'swiper/react'
import IdolGroupShortEventDisplay from './IdolGroupShortEventDisplay.jsx'
import "swiper/css";
import 'swiper/css/free-mode';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import { useRef } from 'react';

function formatDate(date){
  const d = new Date(date)
  const day = String(d.getDate()).padStart(2,'0')
  const month = String(d.getMonth()+1).padStart(2,'0')
  const year = d.getFullYear()
  return `${day}/${month}/${year}`
}

function EventPage(props){

    const eventData = props.event;

    const eventDate = eventData.date;
    eventDate.setHours(0,0,0,0);
    let eventDatePhrased = formatDate(eventDate);


    const groupData = props.groups;
    const listGroups = groupData.map(group => {
        const eventTimes = eventData.groups.find(item => item.id === group.id);

        return (
        <SwiperSlide key={group.id}><IdolGroupShortEventDisplay key={group.id} id={group.id} name={group.name} location={group.location} logo={group.logo} mtime={eventTimes.mtime} btime={eventTimes.btime}/></SwiperSlide>
        )
    });

    const dialogRef = useRef();

    const eventPosterImg = new Image();
    eventPosterImg.src = eventData.img;

    return(
        <div className="group-page-container">
            <dialog ref={dialogRef} className="image-veiwer">
                <div 
                    style={{
                        aspectRatio: `${eventPosterImg.naturalWidth} / ${eventPosterImg.naturalHeight}`,
                        maxWidth: "90vw",
                        maxHeight: "90vh"
                    }}
                >
                    <img src={eventData.img} alt="Event Poster" />
                </div>
                <button className="image-veiwer-closer" onClick={() => dialogRef.current?.close()}>
                    <i className="fa-solid fa-x"></i>
                    <span className="sr-only">Close</span>
                </button>
            </dialog>
            <div className="column left">
                <div className="event-header" onClick={() => dialogRef.current?.showModal()}>
                    <img src={eventData.img} alt="Event Poster" />
                </div>
                <h2>{eventData.name}</h2>
                    <p><i className="fa-solid fa-calendar"></i> {eventDatePhrased}</p>
                    <p><i className="fa-solid fa-city"></i> {eventData.city}</p>
                    <p><i className="fa-solid fa-location-dot"></i> {eventData.address}</p>
            </div>

            <div className="column middle">
                <h2>Groups</h2>
                <div className="idol-group-members">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper"
                    >
                        {listGroups}
                    </Swiper>
                </div>

            </div>

            <div className="column right">
                <h2>About</h2>
                <p style={{ whiteSpace: "pre-line" }}>{eventData.description}</p>

                <p><a href={eventData.ticketlink} target="_blank" className="eventTicket"> <i className="fa-solid fa-ticket large-social"></i></a></p>
            </div>
        </div>
    );
}


export default EventPage