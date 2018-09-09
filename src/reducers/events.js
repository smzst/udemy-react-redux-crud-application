import _ from 'lodash'
// actionのtypeをimport
import {
  CREATE_EVENT,
  READ_EVENTS,
  READ_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT
} from '../actions'

// stateとactionを持つ関数
export default (events = {}, action) => {
  switch (action.type) {
    case CREATE_EVENT:
    case READ_EVENT:
    case UPDATE_EVENT:
      const data = action.response.data
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      // 1: {"id":1, ...} という状態の方がアクセシビリティが高いため
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      // events配列の中から該当するidを削除している
      delete events[action.id]
      // ...: スプレッド演算子というもの。更新後のオブジェクトになる(とは？)
      return { ...events }
    default:
      return events
  }
}