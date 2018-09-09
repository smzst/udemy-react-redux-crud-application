// combineReducers: reducerを結合するための関数
import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import events from './events'

// eventsってreducerとして定義したevents.jsのこと
export default combineReducers({ events, form })