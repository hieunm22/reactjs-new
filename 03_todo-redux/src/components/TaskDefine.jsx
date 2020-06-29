import React from 'react'
import ColorPicker from './ColorPicker'
import { connect } from '../provider'
// NOTE: why need React?

let textInput = 0
const OnColorPick = (textinput, store, registeredComponents) => color => e => {
  store.define.color = color
  registeredComponents.forEach(wrappedComponent => wrappedComponent.setState(store))
  textinput.focus()
}

const OnChangeContent = (store, registeredComponents) => e => {
  store.define.content = e.target.value
  registeredComponents.forEach(wrappedComponent => wrappedComponent.setState(store))
}

const OnKeyUp = (textinput, store, registeredComponents) => e => {
  if (e.keyCode === 13) {
    CreateTask(textinput, store, registeredComponents)(e)
  }
}

const CreateTask = (textinput, store, registeredComponents) => e => {
  if (!store.define.content) return
  store.items.push({ content: textinput.value, color: store.define.color })
  store.define.content = ''
  registeredComponents.forEach(wrappedComponent => wrappedComponent.setState(store))
  textinput.focus()
}

const TaskDefine = ({ store, registeredComponents }) => {
  return (
    <div className="task-define">
      <input
        className="task-define--content"
        type="text"
        placeholder="Add new item..."
        value={store.define.content}
        onChange={OnChangeContent(store, registeredComponents)} // done
        onKeyUp={OnKeyUp(textInput, store, registeredComponents)}
        autoFocus={true}
        ref={el => textInput = el}
      />
      <div className="task-define--control">
        <ColorPicker onPick={OnColorPick(textInput, store, registeredComponents)} selectedColor={store.define.color} />
        <button
          className="task-define--button"
          onClick={CreateTask(textInput, store, registeredComponents)}  // done
        >
          Add
      </button>
      </div>
    </div>
  )
}

export default connect(TaskDefine, 'define')

// class TaskDefine1 extends Component {
//   state = {
//     color: 0,
//     content: '',
//   }

//   onColorPick = _color => () => {
//     this.setState({ color: _color })
//     this.textInput.focus()
//   }

//   onKeyUp = e => {
//     if (this.state.content && e.keyCode === 13) {
//       this.createNewTask()
//     }
//   }

//   textInput = null

//   render() {
//     return (
//       <div className="task-define">

//       </div>
//     )
//   }
// }
