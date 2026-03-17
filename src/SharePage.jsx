import animaga_2026_sydney from './assets/qrcode_app.png'

function SharePage(){


    return(
        <div className="group-page-container">
            <h1>Share</h1>
            <p>Show this QR to a fellow fan so they can scan and access the webapp.</p>
            <img className="shareQr" src={animaga_2026_sydney} alt="QR Code" />
        </div>
    );
}


export default SharePage