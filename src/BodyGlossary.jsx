import RootLayout from './RootLayout.jsx'

function BodyGlossary(){
    return <>
        <RootLayout/>
        <div className="main-body">
            <div className="glossary-container">
                <h1>Glossary:</h1>
                <div className="glossary-container-info">
                    <p><strong>Buppan / tokutenkai:</strong> A period of time either before or after the show to purchase merchandise, take chekis, and talk with the idols.</p>
                    <p><strong>Cheki:</strong> A polaroid photo of an idol, either taken of them solo, or taken of them with you. These are often autographed & decorated by the idol - the specific term for this is a deco cheki.</p>
                    <p><strong>Oshi:</strong> Your number one favourite idol!</p>
                    <p><strong>Wota:</strong> Derived from the word "otaku" - a dedicated idol fan.</p>
                    <p><strong>Mix:</strong> Fanchants, shouted by during instrumental breaks. Find out more here: <a href="https://docs.google.com/document/u/0/d/1o1rjxjCm1V1uZA98wwuO-h9lwvIXHl-_MFMoX6xtNH4" target="_blank"><i className="fa-solid fa-link"></i></a></p>
                    <p><strong>Calls:</strong> Shorter phrases, shouted by the crowd during verses and choruses. The above document also details many common calls.</p>
                    <p><strong>Penlight:</strong> An LED lightstick. Every idol has their own representative colour - when they're on stage, change your penlight to match your favourite's!</p>
                </div>
            </div>
        </div>
        
    </>;
}

export default BodyGlossary;