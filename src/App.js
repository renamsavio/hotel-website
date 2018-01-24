import React from "react";
import ReactDOM from "react-dom";
import hero from './images/hero.jpg'
import Rectangle from 'react-rectangle';
import crown from './images/crown.svg'
import InlineSVG from 'svg-inline-react';

import './App.scss'

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <InlineSVG className="App-icon" src={require("./images/crown.svg")} />
          <img src={hero} className="App-img-hero"></img>
          <div className="App-img-text">WELCOME TO</div>
          <hr className="App-img-hrl-up" color="white" width="50%" />
          <div className="App-img-name"><b>CHARLOTTE</b></div>
          <hr className="App-img-hrl-down" color="white" width="50%" />
          <div className="App-img-desc"><b>THE QUEEN CITY</b></div>
        </div>
        <Rectangle aspectRatio={[5, 3]}>
            <div style={{ background: 'grey', width: '50%', height: '50%', top: '20%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }} >
              <div className="App-form">
                <span>Select the dates to stay in Charlotte</span>
              </div>
            </div>
         </Rectangle>
      </div >
    )

  }
}

export default App