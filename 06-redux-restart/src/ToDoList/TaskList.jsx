import React from 'react';
import TaskItem from './TaskItem'

const TaskList = ({ items }) => {
  return (
    <div className="task-list">
    {
      items.map((item, idx) => {
		item.id = idx + 1
	    return (
          <TaskItem
            item={item}
            key={idx}
          />
        )
	  }
      )
    }
    </div>
  )
}

export default TaskList