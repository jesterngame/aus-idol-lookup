import IdolGroupList from './IdolGroupList.jsx'
import { idolGroupsArray } from './data/idolGroupData.js'
import RootLayout from './RootLayout.jsx'


function BodyGroup(){
    
    const sortedGroups = idolGroupsArray.sort((a, b) => a.name.localeCompare(b.name));
    return <><RootLayout/><div className="main-body"><IdolGroupList groups={sortedGroups}/></div></>;
}

export default BodyGroup;