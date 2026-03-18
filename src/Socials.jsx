
function Socials(props){


    let socialClass = "";

    switch(props.type) {
        case "instagram":
            socialClass +="fa-brands fa-instagram";
            break;
        case "tiktok":
            socialClass +="fa-brands fa-tiktok";
            break;
        case "youtube":
            socialClass +="fa-brands fa-youtube";
            break;
        case "twitter":
            socialClass +="fa-brands fa-x-twitter";
            break;
        case "spotify":
            socialClass +="fa-brands fa-spotify";
            break;
        case "patreon":
            socialClass += "fa-brands fa-patreon";
            break;
        case "website":
            socialClass += "fa-solid fa-globe";
            break;
        case "twitch":
            socialClass += "fa-brands fa-twitch";
            break;
        case "ko-fi":
            socialClass += "fa-brands fa-ko-fi"
            break;
        default:
    }

    return (
        <a href={props.link} target="_blank"><i className={socialClass}></i></a>
    );
}

export default Socials