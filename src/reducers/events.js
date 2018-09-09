import _ from 'lodash'
// actionのtypeをimport
import { READ_EVENTS } from '../actions'

// stateとactionを持つ関数
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
    // 1: {"id":1, ...} という状態の方がアクセシビリティが高いため
      return _.mapKeys(action.response.data, 'id')
    default:
      return events
  }
}