import React, { Component } from 'react';
// connect: state, actionとcomponentとの関連付けのための関数
import { connect } from 'react-redux';
import { readEvents } from '../actions';
import _ from 'lodash'
import { Link } from 'react-router-dom'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

// stateの情報からこのコンポーネントで必要な情報を取り出してコンポーネント内のPropsとしてマッピングする機能を持つ関数
const mapStateToProps = state => ({ events: state.events })

// あるアクションが発生したときタイプに応じた状態遷移を実行する機能を持つ関数
const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);