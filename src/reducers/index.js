import { combineReducers } from 'redux'
import { dates } from './dates'
import { data } from './data'
import { modal } from './modal'

const reducers = combineReducers({
  dates,
  data,
  modal
})

export default reducers