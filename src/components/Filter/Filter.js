import React from 'react'
import { Rating } from 'material-ui-rating'
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputRange from 'react-input-range'

import style from 'react-input-range/lib/css/index.css'

import './Filter.scss'

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 0, max: 599 },
    };
  }
  
  render() {
    return (
      <div>
        <Row><Col xs style={{ 'text-align': 'center', 'font-weight': 'bold' }}>Filters</Col></Row>
        <Row style={{ 'font-family': 'Heebo, sans-serif', 'font-size': '12px', color: 'grey', 'text-align': 'left', 'margin-top': '40px' }}>
          Price Range
        </Row>
        <InputRange
          maxValue={600}
          minValue={0}
          value={this.state.value}
          formatLabel={()=>null}
          onChange={value => this.setState({ value })} />
        <div className="Filter-Min" style={{"text-align": "left", "width": "50%", "display": "inline-block"}}>Min</div>
        <div className="Filter-Max" style={{"text-align": "right", "width": "50%", "display": "inline-block"}}>Max</div>
        <div className="Filter-Min" style={{"text-align": "left", "width": "50%", "display": "inline-block", color:'orange', fontWeight: 'bold', fontSize: '16px'}}>${this.state.value.min}</div>
        <div className="Filter-Max" style={{"text-align": "right", "width": "50%", "display": "inline-block", color:'orange', fontWeight: 'bold', fontSize: '16px'}}>${this.state.value.max}</div>

        <hr style={{'border': '0.1px solid grey'}}/>

        
        <Row className="Filter-Min">Stars</Row>
        <Row>
          <Rating
            value={3}
            max={5}
            onChange={(value) => console.log(`Rated with value ${value}`)} />
        </Row>
      </div>
    )
  }
}

export default Filter