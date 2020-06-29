import React, { Component } from 'react'
import ColorPicker from './ColorPicker'
// NOTE: why need React?

export default class TaskDefine extends Component {
  state = {
    color: 0,
    content: '',
    createdTime: null
  }

  onColorPick = _color => () => {
    this.setState({ color: _color })
    this.textInput.focus()
  }

  onChangeContent = e => this.setState({ content: e.target.value, createdTime: new Date() })

  onKeyUp = e => { 
    if (this.state.content && e.keyCode === 13) {
      this.handleCreateTask()
    }
  }

  handleCreateTask = () => {
    this.props.createTask(this.state)
    this.setState({ content: '' })
    this.textInput.focus()
  }

  textInput = null

  render() {
    return (
      <div className="task-define">
        <input
          className="task-define--content"
          type="text"
          placeholder="Add new item..."
          value={this.state.content}
          onChange={this.onChangeContent}
          onKeyUp={this.onKeyUp}
          ref={el => { this.textInput = el }}
        />
        <div className="task-define--control">
          <ColorPicker onPick={this.onColorPick} selectedColor={this.state.color} />
          <button
            className="task-define--button"
            onClick={this.handleCreateTask}
          >
            Add
          </button>
        </div>
      </div>
    )
  }
}
