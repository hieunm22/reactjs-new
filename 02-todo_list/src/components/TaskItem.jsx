import React from 'react'

const TaskItem = ({ item, onCheck, onDelete }) => (
  <div className={`task-item bg-${item.color} task-status__${item.done ? 'completed' : 'pending'}`}>
    <div className={`task-item--checkbox`}>
      <input
        type="checkbox"
        className="task-item--input-checkbox"
        value={item.done}
        onChange={ onCheck }
      />
    </div>
    <div className="task-item--seperate" />
    <div className={`task-item--content`}>
      {item.content}
    </div>
    <div
      className="task-item--edit"
      onClick={ onDelete }
    >Xoá
    </div>
  </div>
)

export default TaskItem