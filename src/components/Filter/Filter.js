import React from 'react'
import Slider from 'material-ui/Slider';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './Filter.scss'

class Filter extends React.Component  {
  handleChange() {
    console.log('Changing...')
  }
  render() {
    return (
      <div>
        <Row style={{'text-align': 'center', 'font-weight': 'bold'}}>Filters</Row>
        <Row style={{'font-family': 'Heebo, sans-serif', 'font-size': '12px', color: 'grey', 'text-align': 'left' }}>
          Price Range
        </Row>
        <Slider
          min={1}
          max={600}
          step={1}
          value={300}
          onChange={this.handleSecondSlider}/>
        <Row>Minimum</Row>
        <Row>Maximum</Row>
      </div>
    )
  }
}

export default Filter