import React, { useState } from 'react';
import { connect } from "redux-zero/react";
import actions from "./../actions";

const Counter = ({ count, incrementOf }) => {
  const [value, setValue] = useState(1)
  const handlerChange = e => setValue(+e.target.value)
  const increment = _ => incrementOf(value)

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <input
          type="number"
          value={value}
          onChange={handlerChange}
        />
        <button onClick={increment}>increment</button>
      </div>
    </div>
  )
}

const mapToProps = ({ count }) => ({ count });

const connected = connect(mapToProps, actions)

export default connected(Counter);