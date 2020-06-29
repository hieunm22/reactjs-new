import React, { Component } from 'react'
import Header from './components/Header'
import TaskList from './components/TaskList'
import TaskDefine from './components/TaskDefine'
import './App.css';
import './normalize.css';

class App extends Component {
  state = {
    items: []
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

  deleteItem = idx => () => {
    this.setState({ items: this.state.items.filter((_, i) => i !== idx) })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TaskList
          items={this.state.items}
          onCheckChanged={this.changeStatus}
          onDelete={this.deleteItem}
        />
        <TaskDefine createTask={this.createTask} />
      </div>
    );
  }
}

export default App
