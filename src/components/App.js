import React, { Component } from 'react';
// connect: state, actionとcomponentとの関連付けのための関数
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class App extends Component {
  render() {
    // ?: ProviderでAppをラップしているので、実行時にstateやactionがpropsとして渡されている感じ？
    const props = this.props
    return (
      <React.Fragment>
        <div>value: {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// stateの情報からこのコンポーネントで必要な情報を取り出してコンポーネント内のPropsとしてマッピングする機能を持つ関数
const mapStateToProps = state => ({ value: state.count.value })

// あるアクションが発生したときタイプに応じた状態遷移を実行する機能を持つ関数
const mapDispatchToProps = dispatch => ({ increment, decrement })

// 下のは上の書き方を丁寧に書いたもの
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(mapStateToProps, mapDispatchToProps)(App);