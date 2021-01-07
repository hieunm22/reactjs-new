import React from 'react'
import logo from './logo.svg'
import TabComponent from './TabComponent'
import "react-tabs/style/react-tabs.css";
import './App.css'


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faStepBackward, faFastBackward, faStepForward, faFastForward, faCaretSquareDown } from '@fortawesome/free-solid-svg-icons'
// import { faArrowUp, faArrowDown, faUndo, faTrash, faPlus, faEdit, faStepBackward, faFastBackward } from '@fortawesome/free-solid-svg-icons'

// library.add(faArrowUp, faArrowDown, faUndo, faTrash, faPlus, faEdit)
// library.add(faStepBackward, faFastBackward, faStepForward, faFastForward, faCaretSquareDown)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <TabComponent />
    </div>
  )
}

export default App
