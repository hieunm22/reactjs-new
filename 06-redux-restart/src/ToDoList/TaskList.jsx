import React from 'react';
import TaskItem from './TaskItem'
import { connect } from "redux-zero/react";
import actions from "./../actions";

const TaskList = ({ items }) => {
  console.log(items)
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

const connected = connect(null, actions)

export default connected(TaskList);
