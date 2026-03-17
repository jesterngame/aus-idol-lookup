import profilePic from './assets/temp_pfp.png'
import Socials from './Socials.jsx'

function Idol(props){
    let penlight = '';

    switch(props.colour) {
        case "monochrome":
        case "Ghost Grey":
        case "Angelic White":
            penlight = 'white';
            break;
        case "Nostalgic Blue":
        case "Ocean Wave Blue":
        case "Stormy Blue":
        case "Royal Blue":
        case "Columbia Blue":
            penlight = 'blue';
            break; 
        case "Light Blue":
            penlight = 'lightskyblue';
            break; 
        case "Devilish Pink":
        case "Rose Pink":
        case "Hot Pink":
            penlight = 'pink';
            break;
        case "Electric Yellow":
            penlight = 'yellow';
            break;
        case "Royal Purple":
        case "Deep Lilac":
        case "Lavender":
            penlight = 'purple';
            break;
        case "Neon Green":
            penlight = 'green';
            break;
        case "Crimson Red":
            penlight = 'red';
            break;
        default:
            penlight = props.colour;
    }

    const socialsList = props.socials;

    const listSocials = socialsList.map(social => <Socials key={social.type} type={social.type} link={social.link}/>);

    let memberImageStyle = {
        maxWidth: "70%",
        height: "auto",
        borderRadius: "50%",
        marginBottom: "10px",
        backgroundColor: penlight
    };

    return(
        <div id={props.id} className="idol-member">
            <img className="circle-img" src={profilePic} alt="Profile Picture" style={memberImageStyle}></img>
            <h3>{props.name}</h3>
            <p>Colour: {props.colour}</p>
            <div className="individual-member-socials">
                {listSocials}
            </div>
        </div>
    );
}


export default Idol