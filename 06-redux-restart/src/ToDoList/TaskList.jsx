import React from 'react'

const TaskList = props => {
  return (
    <div className="task-list">        
    {props.list.map((item, index) => 
      <div 
        className="task-item flex"
        key={index}
      >
        <input
          type="text"
          className="edit-control"
          onChange={props.onEditContentChange}
          readOnly={true}
          value={item}
        />
        <div className="task-actions">
          <button 
            className="action"
            onClick={props.onRemoveTask(index)}
            title="Remove this item"
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    )}
  </div>
  )
}

export default TaskList