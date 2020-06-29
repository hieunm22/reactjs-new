import React from 'react'
import { MarkAsDone } from '../provider'

const TaskItem = ({ item, index }) => (
  <div className={`task-item bg-${item.color} task-status__${item.done ? 'completed' : 'pending'}`}>
    <div className={`task-item--checkbox`}>
      <input
        type="checkbox"
        className="task-item--input-checkbox"
        value={item.done}
        onChange={e => MarkAsDone(index)}
      />
    </div>
    <div className="task-item--seperate" />
    <div className={`task-item--content task-status__${item.done ? 'completed' : 'pending'}`}>
      {item.content}
    </div>
  </div>
)

export default TaskItem