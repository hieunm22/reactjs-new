import React from 'react'
import { connect } from "redux-zero/react";
import actions from "./../actions"

const Decrementer = ({ decrement, count }) => (
  <div className="text-only">
    <button onClick={decrement}>Decrease</button>
    <div>{count}</div>
    <h3>{`Count: ${count}`}</h3>
  </div>
)

const mapToProps = ({ count, decrement }) => ({ count, decrement });

const connected = connect(mapToProps, actions)

export default connected(Decrementer);