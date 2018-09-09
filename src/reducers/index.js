// combineReducers: reducerを結合するための関数
import { combineReducers } from 'redux'
import events from './events'

// eventsってreducerとして定義したevents.jsのこと
export default combineReducers({ events })