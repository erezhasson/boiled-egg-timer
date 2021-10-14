import React, {useState} from "react";
import Egg from "../egg";
import './eggtimer.css'
import Footer from "../footer";
import StopWatch from "../stopwatch";
import InfoWindow from "../infowindow";

export default function EggTimer() {
    const [infoWindow, setInfoWindow] = useState('hidden');

    return(
        <div className="boiled-egg-timer-container">
            <header>Boiled Egg Timer 🥚</header>
            <h2>start timer and watch the egg boils</h2>
            <div className="info-button" onMouseEnter={() => setInfoWindow(infoWindow == 'visible' ? 'hidden' : 'visible')} onClick={() => setInfoWindow(infoWindow == 'visible' ? 'hidden' : 'visible')}>
                <i class={infoWindow == 'visible' ? "fas fa-times-circle" : "fas fa-info-circle"}></i>
            </div>
            <Egg/>
            <InfoWindow visible={infoWindow}/>
            <StopWatch/>
            <Footer/>
        </div>
    )
};

