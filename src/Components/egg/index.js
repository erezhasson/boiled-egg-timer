import React from "react";
import './egg.css'
export default function Egg(props) {

    return(
        <div class="egg-container" >
            <div class="egg">
                <div class="egg-white">
                    <div class="egg-yolk">
                        <div class={"egg-yolk-center " + props.state} />
                    </div>
                </div>
            </div>
        </div>
    )
}