import React, { Component } from 'react'
import Header from './Components/Header'
import TaskList from './Components/TaskList'
import ConnectedTaskDefine from './Components/TaskDefine'
import { Provider } from 'redux-zero/react'
import store from './provider'
import './App.css';
import './normalize.css'

const PackedComponent = () => {
  return (
    <div className="App">
      <Header />
      <TaskList />
      <ConnectedTaskDefine />
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PackedComponent />
      </Provider>
    );
  }
}

export default App
