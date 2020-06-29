import React, { Component } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskDefine from './components/TaskDefine'
import { StoreInit } from './provider'
import './App.css';
import './normalize.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      define: {
        content: '',
        color: 0
      }
    }

    StoreInit(this.state)
  }

  createTask = task => {
    if (!task.content) return
    const item = { ...task, done: false }
    this.setState({
      items: [ ...this.state.items, item ]
    })
  }

  changeStatus = idx => () => {
    const items = [...this.state.items]
    items[idx].done = !items[idx].done
    this.setState({ items })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TaskList />
        <TaskDefine />
      </div>
    );
  }
}

export default App
