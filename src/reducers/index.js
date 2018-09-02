// combineReducers: reducerを結合するための関数
import { combineReducers } from 'redux'
import count from './count'

// countってreducerとして定義したcount.jsのこと
export default combineReducers({ count })