import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import increaseAction from '../redux/actions/action'

// React component
class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}







// Map Redux state to component props
function mapStateToProps(state) {
  return {
    value: state.counter.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

// Connected Component
const Test = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default Test
//
// ReactDOM.render(
//   <Provider store={store}>
//     <Test />
//   </Provider>,
//   document.getElementById('example')
// )
