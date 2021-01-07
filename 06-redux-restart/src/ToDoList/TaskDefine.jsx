import React from 'react'

const TaskDefine = props => {
  return (
    <div className="task-define flex">
      <input
        type="text"
        className="task-content"
        placeholder="Enter task content here"
        onChange={props.onTextChange}
        onKeyDown={props.onKeyDown}
        value={props.content}
        // ref={ele => this.txtContent = ele}
      />
      <button 
        className="btn create-task"
        onClick={props.onCreateTask}
      >
        <i className="fa fa-plus"></i>
        Create
      </button>
    </div>)
}

export default TaskDefine