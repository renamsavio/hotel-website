import React from 'react'
import { DateRange } from 'react-date-range';
import { updateDates } from '../../actions'
import { connect } from 'react-redux'
import moment from 'moment'

let Calendar = ({ dispatch }) => {
  const handleSelect = (range) => {
    dispatch(updateDates({checkin: range.startDate._d, checkout: range.endDate._d}))
  }
  return ( 
    <DateRange
        onInit={handleSelect}
        onChange={handleSelect}
      /> 
    )
}

Calendar = connect()(Calendar)

export default Calendar