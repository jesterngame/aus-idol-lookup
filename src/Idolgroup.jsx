import Idol from './Idol.jsx'

function Idolgroup(props){

    const membersList = props.members;

    const listIdols = membersList.map(idol => <Idol key={idol.id} id={idol.id} name={idol.name} colour={idol.colour} socials={idol.socials}/>);

    return(
        <div>
            {listIdols}
        </div>
    );
}

export default Idolgroup;