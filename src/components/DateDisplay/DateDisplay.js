import React from 'react'
import moment from 'moment'

import './DateDisplay.css'

const DateDisplay = props => {
  return ( 
  <div className="DateDisplay-main">
    <h2>CHECK-IN</h2>
    <p>{moment(props.dates.checkin).format("MMMM Do YYYY")}</p>
    <h2>CHECK-OUT</h2>
    <p>{moment(props.dates.checkout).format("MMMM Do YYYY")}</p>
  </div> )
}

export default DateDisplay