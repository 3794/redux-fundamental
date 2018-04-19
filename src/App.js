import React, { Component } from 'react'
import { store } from './index'

const CountStateComponent = () => {
  return (
    <div>count: {store.getState()}</div>
  )
}

class App extends Component {
  onClickInc = () => {
    store.dispatch({ type: 'INCREMENT' })
  }

  onClickDec = () => {
    store.dispatch({ type: 'DECREMENT' })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClickInc}>+</button>
        <button onClick={this.onClickDec}>-</button>
        <CountStateComponent />
        this is app
      </div>
    )
  }
}

export default App
