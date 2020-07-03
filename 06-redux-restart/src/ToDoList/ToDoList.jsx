import React from 'react';
import TaskList from './TaskList'
import TaskDefine from './TaskDefine'
import './ToDoList.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ToDoList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { content: '', list: [] }
  }

  onTextChange = e => {
    this.setState({ content: e.target.value })
  }

  onCreateTask = e => {
    if (this.state.content && this.state.content.length > 0) {
      const contentValue = this.state.content
      // this.props.onFocus(2)
      this.setState({ content: '', list: [...this.state.list, contentValue] })
    }
  }

  onKeyDown = e => {
    if (e.keyCode === 13) {
      this.onCreateTask(e)
    }
  }

  onRemoveTask = idx => e => {
    this.setState({ list: this.state.list.filter((_, index) => index !== idx) })
  }

  onEditContent = idx => e => {
    const editControl = e.currentTarget.parentElement.parentElement.firstElementChild
    editControl.readOnly = false
    e.currentTarget.disabled = true
  }

  render() {
    return (
      <div className="todolist container">
        <TaskDefine
          onTextChange={this.onTextChange}
          onKeyDown={this.onKeyDown}
          onCreateTask={this.onCreateTask}
          content={this.state.content}
        />
        <TaskList
          list={this.state.list}
          onRemoveTask={this.onRemoveTask}
        />
      </div>
    )
  }
}