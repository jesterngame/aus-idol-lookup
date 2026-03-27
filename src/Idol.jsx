import Socials from './Socials.jsx'


const PenLight = ({ style, size = 80 }) => (
  <svg
    viewBox="0 0 121.4243 121.42431"
    width={size}
    height={size}
    style={ style }
  >
    <g transform="translate(793.02288,-58.950377)">
      <g transform="translate(3.9251996,3.8010955)">
        <path
          d="m -748.56751,137.40478 -9.21156,-9.21155 c -1.83334,2.0522 -5.19124,5.48188 -11.27392,10.74773 -11.38439,9.85558 -10.15805,13.70311 -10.04433,13.81679 l 2.98246,2.98246 2.98282,2.98282 c 0.11368,0.11372 3.96084,1.3397 13.81643,-10.04469 5.26584,-6.08268 8.6959,-9.44022 10.7481,-11.27356 z"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.11667}
        />
        <path
          d="m -697.34684,76.972186 c -3.07033,-3.070328 -6.2196,-3.938725 -6.2196,-3.938725 l -2.53172,2.53172 10.15833,10.158332 2.53172,-2.53172 c 0,0 -0.8684,-3.149272 -3.93873,-6.219607 z"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.11667}
        />
        <path
          d="m -740.2993,130.08298 -10.15833,-10.15833 -0.22436,0.22435 -1.54823,-0.41474 -6.20974,6.20975 0.55944,2.0883 4.73678,4.73677 4.73714,4.73715 2.0883,0.55944 6.20975,-6.20974 -0.4151,-1.54859 z"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.11667}
        />
        <path
          d="m -706.40821,75.875232 -43.47619,43.476188 10.15833,10.15833 43.47619,-43.476186 z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth={2.11667}
        />
        <path
          d="m -756.55181,124.64788 11.70815,11.67718"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.05833}
        />
      </g>
    </g>
  </svg>
);


function Idol(props){
    let penlight = '';

    let backgroundColour = '';

    switch(props.colour) {
        case "monochrome":
        case "Ghost Grey":
        case "Angelic White":
            penlight = 'white';
            break;
        case "Yellow":
        case "Electric Yellow":
            penlight = "#FFCE58";
            break;
        case "Nostalgic Blue":
        case "Ocean Wave Blue":
        case "Stormy Blue":
        case "Royal Blue":
        case "Columbia Blue":
            penlight = 'blue';
            break; 
        case "Light Blue":
        case "Baby blue":
        case "Sky blue":
        case "Magical blue":
            penlight = 'lightskyblue';
            break; 
        case "Devilish Pink":
        case "Rose Pink":
        case "Hot Pink":
        case "Sunshine Pink":
        case "Princess Pink":
            penlight = 'pink';
            break;
        case "Royal Purple":
        case "Deep Lilac":
        case "Lavender":
        case "Pastel purple":
        case "Lilac Purple":
            penlight = 'purple';
            break;
        case "Neon Green":
        case "Lucky green":
            penlight = 'green';
            break;
        case "Crimson Red":
            penlight = 'red';
            break;
        case "Peachy orange":
            penlight = 'orange';
            break;
        default:
            penlight = props.colour;
            break;
    }
    
    switch(penlight) {
        case "White":
        case "Yellow":
            console.log("Back dark");
            backgroundColour = "#313131";
            break;
        default:
            backgroundColour = "";
            break;
    }

    const socialsList = props.socials;

    const listSocials = socialsList.map(social => <Socials key={social.type} type={social.type} link={social.link}/>);

    let memberImageStyle = {
        borderRadius: "50%",
        marginBottom: "10px",
        backgroundColor: backgroundColour,
        color: penlight
    };

    return(
        <div id={props.id} className="idol-member">
            {/* <img className="circle-img" src={profilePic} alt="Profile Picture" style={memberImageStyle}></img> */}
            <div ></div>
            <PenLight style={memberImageStyle} />
            <h3>{props.name}</h3>
            <p>{props.type}</p>
            <p>Colour: {props.colour}</p>
            <div className="individual-member-socials">
                {listSocials}
            </div>
        </div>
    );
}


export default Idol