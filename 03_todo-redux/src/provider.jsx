import React from 'react'

let STATE = {
  // items: [],
  // define: {
  //   content: '',
  //   color: -1
  // }
}

const registeredComponents = []

export const StoreInit = object => STATE = object

export const CreateTask = taskItem => {
  let newState = STATE
  newState.items.push(taskItem)
  STATE = newState
  registeredComponents.forEach(wrappedComponent => wrappedComponent.setState(newState))
  newState.define.content = ''
 }

 export const MarkAsDone = itemIndex => {
  let newState = STATE
  newState.items[itemIndex].done = !newState.items[itemIndex].done
  STATE = newState
  registeredComponents.forEach(wrappedComponent => wrappedComponent.setState(newState))
 }

export const connect = (Component, requiredProps = null) => class extends React.Component {
  constructor(props) {
    super(props)
    this.state = STATE
    registeredComponents.push(this)
  }

  render() {
    const returnProps = requiredProps ? { [requiredProps]: this.state[requiredProps] } : {}
    return (
      <Component
        {...returnProps}
        {...this.props}
        store={STATE}
        registeredComponents={registeredComponents}
      />
    )
  }
}