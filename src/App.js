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
import SearchButtonContainer from './containers/SearchButtonContainer'
import BottomPanel from './components/BottomPanel/BottomPanel'
import OverlayObjects from './components/OverlayObjects/OverlayObjects'
import { Grid, Row, Col } from 'react-flexbox-grid';

import './App.scss'

const URL_HOTEL_DATA = "https://www.raphaelfabeni.com.br/rv/hotels.json"

class AppMain extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{ backgroundColor: 'blue', left: '0px', top: 'auto', height: '350px' }}>
          <OverlayObjects />
        </div>
        <div style={{ backgroundColor: 'white', position: 'relative', bottom: '50px', marginLeft: '15%', marginRight: '15%' }}>
          <Grid fluid>
            <Row center="xs" style={{ paddingBottom: "20px", paddingTop: "30px", fontWeight: "bold" }}>
              <Col>Select the dates to stay in Charlotte</Col>
            </Row>
            <Row around="xs">
              <Col xs={3} style={{ textAlign: "center" }}>
                <DateDisplay className="App-form-datedisplay" dates={{ checkin: this.props.dates.checkin, checkout: this.props.dates.checkout }} />
                <SearchButtonContainer url={URL_HOTEL_DATA} />
              </Col>
              <Col xs={8} center="xs" style={{ textAlign: "center" }}>
                <Calendar />
              </Col>
            </Row>
          </Grid>
        </div>
        <div>
          <BottomPanel />
        </div>
      </div >
    )

  }
}

const mapStateToProps = state => {
  return {
    dates: state.dates.dates
  }
};
export default connect(mapStateToProps)(AppMain)