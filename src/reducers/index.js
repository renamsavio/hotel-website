import { combineReducers } from 'redux'
import { dates } from './dates'
import { data } from './data'

const reducers = combineReducers({
  dates,
  data
})

export default reducers