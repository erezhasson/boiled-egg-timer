import React from "react";
import './stopwatch.css'

export default function StopWatch(props) {
    return(
        <div class="stopwatch">
        <input id="start" class="start" name="controls" type="radio" onChange={props.start} />
        <input id="stop" class="stop" name="controls" type="radio" onChange={props.pause}  />
        <input id="reset" class="reset" name="controls" type="radio" onChange={props.restart} />

        <div class="container">
        <div class="digit_contianer">
        <div class="animcont">
            <div class="hours">
                0 1 2 3 4 5 6 7 8 9
            </div>
            </div>
            <div class="animcont">
            <div class="hours">
                0 1 2 3 4 5 6 7 8 9
            </div>
            </div>
            <div class="space">
            :
            </div>


            <div class="animcont">
            <div class="min1">
                0 1 2 3 4 5
            </div>
            </div>
            <div class="animcont">
            <div class="min">
                0 1 2 3 4 5 6 7 8 9
            </div>
            </div>
            <div class="space">
            :
            </div>

            <div class="animcont">
            <div class="sec1">
                0 1 2 3 4 5
            </div>
            </div>
            <div class="animcont">
            <div class="sec">
                0 1 2 3 4 5 6 7 8 9
            </div>
            </div>
            <div class="space">
            :
            </div>

            <div class="animcont">
            <div class="mil0">
                0 1 2 3 4 5 6 7 8 9
            </div>
            </div>
            <div class="animcont">
            <div class="mil1">
                0 1 2 3 4 5 6 7 8 9
            </div>
            </div>
            <div class="animcont">
            <div class="mil">
                0 1 2 3 4 5 6 7 8 9
            </div>
            </div>

        </div>
        <div class="controls">
            <label class="stop_" id="haptic" for="stop">
            </label>
            <label id="haptic2" class="start_" for="start">
            </label>
            <label id="haptic3" class="reset_" for="reset">
            </label>
        </div>
        </div>

    </div>
    )
}