import React from 'react'
import TaskItem from './TaskItem'
import { connect } from '../provider'

const TaskList = ({ items }) => {
  return (
    <div className="task-list">
      {items.map((item, idx) => (
        <TaskItem
          item={item}
          index={idx}
          key={idx}
        />
      ))}
    </div>
  )
}

export default connect(TaskList, 'items')