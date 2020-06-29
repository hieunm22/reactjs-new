import React from 'react'
import createStore from "redux-zero"

// object that should be binded to web app
const initialState = {
  items: [],
  define: {
    content: '',
    color: 0
  }
}

// object that contains methods interact with initialState
const store = createStore(initialState)

export default store