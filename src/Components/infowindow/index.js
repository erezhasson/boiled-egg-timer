import React from 'react';
import './infowindow.css';
import Time from './time';

export default function InfoWindow(props) {

  return (
    <div className={props.visible} id="Info">
      <div className="notepad2">
        <h1>Know your egg:</h1>

        <div className="boling-times-container">
          <Time time={'0-6 minutes'} status={'runny yolk'}/>
          <Time time={'6-9 minutes'} status={'almost firm yolk'}/>
          <Time time={'9-12 minutes'} status={'totally firm yolk'}/>
          <Time time={'12> minutes'} status={'bad yolk 🤢'}/>

          
          <div className="buttons">
            <div className="buttons-head">Follow Me:</div>
            <a href="https://github.com/erezhasson" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </div>
  );
};