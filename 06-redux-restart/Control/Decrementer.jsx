import React from 'react'
import { connect } from "redux-zero/react";
import { decrement } from "./actions"

const Decrementer = ({ decrement, isOdd }) => (
  <div className="text-only">
    <button onClick={decrement}>Decrease</button>
    <div>{isOdd}</div>
    <h3>{`is odd? ${isOdd}`}</h3>
  </div>
)

const mapActions = store => ({
  decrement
})

const mapProps = state => ({
  isOdd: state.count % 2 === 1
})

const connected = connect(mapProps, mapActions)

export default connected(Decrementer)