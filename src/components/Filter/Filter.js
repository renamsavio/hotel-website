import React from 'react'
import { Rating } from 'material-ui-rating'
import { Grid, Row, Col } from 'react-flexbox-grid';
import InputRange from 'react-input-range'
import PropTypes from 'prop-types'

import style from 'react-input-range/lib/css/index.css'

import './Filter.scss'

class Filter extends React.Component {
  constructor(props) {
    super();

    this.state = {
      sliderValue: { min: 0, max: 600 },
      rate: 0
    };

    this.onChange = props.onChange
  }
  
  render() {
    return (
      <div>
        <Row><Col xs style={{ textAlign: 'center', fontWeight: 'bold' }}>Filters</Col></Row>
        <Row style={{ fontFamily: 'Heebo, sans-serif', fontSize: '12px', color: 'grey', textAlign: 'left', marginTop: '40px' }}>
          Price Range
        </Row>
        <InputRange
          maxValue={600}
          minValue={0}
          value={this.state.sliderValue}
          formatLabel={()=>null}
          onChange={
            sliderValue => {
              this.setState({ sliderValue })
              //this.onChange(this.state)
            }
          }
           />
        <div className="Filter-Min" style={{textAlign: "left", width: "50%", display: "inline-block"}}>Min</div>
        <div className="Filter-Max" style={{textAlign: "right", width: "50%", display: "inline-block"}}>Max</div>
        <div className="Filter-Min" style={{textAlign: "left", width: "50%", display: "inline-block", color:'orange', fontWeight: 'bold', fontSize: '16px'}}>${this.state.sliderValue.min}</div>
        <div className="Filter-Max" style={{textAlign: "right", width: "50%", display: "inline-block", color:'orange', fontWeight: 'bold', fontSize: '16px'}}>${this.state.sliderValue.max}</div>

        <hr style={{'border': '0.1px solid grey'}}/>
        <Row className="Filter-Min">Stars</Row>
        <Row>
          <Rating
            value={this.state.rate}
            max={5}
            onChange={
              (rate) => {
                this.setState({rate})
              }
          } />
        </Row>
      </div>
    )
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Filter