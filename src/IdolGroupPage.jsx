import groupPic from './assets/idol_temp_logo.png'
import Socials from './Socials.jsx'
import Idol from './Idol.jsx'
import EventShortCardGroup from './EventShortCardGroup.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import 'swiper/css/free-mode';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';

function IdolGroupPage(props){

    const groupData = props.group;
    

    const memberData = props.members;
    const listMembers = memberData.map(idol => <SwiperSlide key={idol.id}><Idol key={idol.id} id={idol.id} name={idol.name} type={idol.type} colour={idol.colour} socials={idol.socials}/></SwiperSlide>);

    const socialsList = groupData.socials;
    const listSocials = socialsList.map(social => <Socials key={social.type} type={social.type} link={social.link}/>);

    const now = new Date();

    const eventData = props.events.filter(event => {
        const d = event.date;
        return (
            d  >= now
        );
    });
    const listEvents = eventData.map(event => <SwiperSlide key={event.id}><EventShortCardGroup key={event.id} id={event.id} name={event.name} img={event.img} date={event.date} city={event.city} type={event.type} /></SwiperSlide>);

    const eventDataPast = props.events.filter(event => {
        const d = event.date;
        return (
            d  < now
        );
    });
    const listEventsPast = eventDataPast.map(event => <SwiperSlide key={event.id}><EventShortCardGroup key={event.id} id={event.id} name={event.name} img={event.img} date={event.date} city={event.city} type={event.type} /></SwiperSlide>);


    return(
        <div className="group-page-container">
            <div className="column left">
                <img className="idol-logo" src={groupData.logo} alt="idol logo"></img>
                <h1>{groupData.name}</h1>
                    <div>Location: {groupData.location} Genre: {groupData.genre.join(", ")}</div><br/>
                <div className="group-socials">
                    {listSocials}
                </div>
                <h2>About</h2>
                <p style={{ whiteSpace: "pre-line" }}>{groupData.description}</p>
            </div>

            <div className="column middle">
                <div className="event">
                    <h2>Upcoming Events</h2>
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
                        {listEvents}
                    </Swiper>
                </div>

                <h2>Members</h2>
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
                        {listMembers}
                    </Swiper>
                </div>

                <div className="event">
                    <h2>Past Events</h2>
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
                        {listEventsPast}
                    </Swiper>
                </div>

            </div>

            <div className="column right">
            </div>
        </div>
    );
}


export default IdolGroupPage