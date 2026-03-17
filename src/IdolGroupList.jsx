import IdolGroupShort from './IdolGroupShort.jsx'

function IdolGroupList(props){

    const groupList = props.groups;

    const listGroups = groupList.map(group => <IdolGroupShort key={group.id} id={group.id} name={group.name} location={group.location} logo={group.logo}/>);

    return(
        <div className="group-list-container">
            {listGroups}
        </div>
    );
}

export default IdolGroupList;