import RootLayout from './RootLayout.jsx'

function BodyAbout(){
    return <>
        <RootLayout/>
        <div className="main-body">
            <div className="glossary-container">
                <h1>About</h1>
                <div className="glossary-container-info">
                    <p>Created in 2026 by the team behind Aus Idol Fest, Aus Idol Lookup is your one stop shop to keep up to date with idols. With a calendar of upcoming events from around the country and information on the multitude of local idol groups and soloists, our goal is to serve as a central repository for idol fans in Australia.</p>
                </div>
                <h1>Glossary:</h1>
                <div className="glossary-container-info">
                    <p><strong>Buppan / tokutenkai:</strong> A period of time either before or after the show to purchase merchandise, take chekis, and talk with the idols.</p>
                    <p><strong>Calls:</strong> Short phrases shouted by the crowd during verses and choruses. Find out more here: <a href="https://docs.google.com/document/u/0/d/1o1rjxjCm1V1uZA98wwuO-h9lwvIXHl-_MFMoX6xtNH4" target="_blank"><i className="fa-solid fa-link"></i></a></p>
                    <p><strong>Cheki:</strong> A polaroid photo of an idol, either taken of them solo, or taken of them with you. These are often autographed & decorated by the idol - the specific term for this is a deco cheki.</p>
                    <p><strong>Kaigai:</strong> The Japanese word for "overseas". Many Western idols refer to themselves as Kaigai Idols.</p>
                    <p><strong>Mix:</strong> Fanchants, shouted by during instrumental breaks. Find out more here: <a href="https://docs.google.com/document/u/0/d/1o1rjxjCm1V1uZA98wwuO-h9lwvIXHl-_MFMoX6xtNH4" target="_blank"><i className="fa-solid fa-link"></i></a></p>
                    <p><strong>Oshi:</strong> Your number one favourite idol!</p>
                    <p><strong>Oshi Mark:</strong> A representative emoji for your favourite idol.</p>
                    <p><strong>Penlight:</strong> An LED lightstick. Every idol has their own representative colour - when they're on stage, change your penlight to match your favourite's!</p>
                    <p><strong>Wota:</strong> Derived from the word "otaku" - a dedicated idol fan.</p>
                </div>

                <h3>Credits</h3>
               <i>Icons by Font Awesome (https://fontawesome.com), licensed under CC BY 4.0.</i>
            </div>
        </div>
        
    </>;
}

export default BodyAbout;