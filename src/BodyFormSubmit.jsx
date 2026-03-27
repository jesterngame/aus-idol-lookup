import RootBack from './RootBack.jsx'

function BodyFormSubmit(){
    return <>
        <RootBack/>
        <div className="main-body">
            <div className="glossary-container">
                <h1>Google Forms</h1>
                <div className="glossary-container-info">
                    <p>Use these Google Forms to submit information to help keep this webapp up to date</p>
                </div>
                <p><a href="https://forms.gle/UhH9whqqnYUipdFL6" target="_blank">New Event Submission</a></p>
                <p><a href="https://forms.gle/HDBFNiqm8rnu8ffN8" target="_blank">Update Event</a></p>
                <p><a href="https://forms.gle/6tB6C2egGyYB6G5C6" target="_blank">New Group Submission</a></p>
                <p><a href="https://forms.gle/3xHAtsdnMJfGeJUL7" target="_blank">Update Group</a></p>
            </div>
        </div>
        
    </>;
}

export default BodyFormSubmit;