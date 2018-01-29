import React from "react";
import ReactDOM from "react-dom";
import hero from './images/hero.jpg'
import Rectangle from 'react-rectangle';
import crown from './images/crown.svg'
import InlineSVG from 'svg-inline-react';
import { connect } from 'react-redux'
import DateDisplay from './components/DateDisplay/DateDisplay'
import Calendar from './components/Calendar/Calendar'
import moment from 'moment'
import reducers from './reducers'
import SearchButton from './components/SearchButton/SearchButton'
import BottomPanel from './components/BottomPanel/BottomPanel'

import './App.scss'

class AppMain extends React.Component {
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
          <div style={{ background: 'grey', float: 'left', width: '60%', height: '50%', top: '20%', left: '50%', position: 'absolute', transform: 'translate(-50%, -50%)' }} >
            <div className="App-form">
              <div className="App-form-title"><span>Select the dates to stay in Charlotte</span></div>
              <div className="App-form-left">
                <DateDisplay className="App-form-datedisplay" dates={{ checkin: this.props.dates.checkin, checkout: this.props.dates.checkout }} />
                <SearchButton />
              </div>
              <div className="App-form-daterange">
                <Calendar />
              </div>
            </div>
          </div>
        </Rectangle>
        <BottomPanel />
      </div >
    )

  }
}

const mapStateToProps = state => {
  return {
    dates: state.dates
  }
};
export default connect(mapStateToProps)(AppMain)