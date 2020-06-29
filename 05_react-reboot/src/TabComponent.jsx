import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import Counter from './Counter/Counter'
import ToDoList from './ToDoList/ToDoList'
import LunarCalendar from './LunarCalendar/LunarCalendar'

const setDate = date => alert(`DMM: ${date.d0}-${date.m0}-${date.y0}`)

const TabComponent = () => {
  // const [stateName, changeState] = React.useState(initialState)
  const [activeTab, setActiveTab] = React.useState(0)

  const tabClick = (...args) => {
    setActiveTab(args[0])
  }

  return (
    <Tabs forceRenderTabPanel defaultIndex={0}>
      <TabList>
        <Tab>Chapter 1</Tab>
        <Tab disabled>Chapter 2</Tab>
      </TabList>
      <TabPanel>
        <Tabs selectedIndex={activeTab} onSelect={tabClick}>
          <TabList>
            <Tab>Counter</Tab>
            <Tab>ToDoList</Tab>
            <Tab>LunarCalender</Tab>
          </TabList>
          <TabPanel>
            <Counter />
          </TabPanel>
          <TabPanel>
            <ToDoList onFocus={setActiveTab} />
          </TabPanel>
          <TabPanel>
            <LunarCalendar onSetDate={setDate} />
          </TabPanel>
        </Tabs>
      </TabPanel>
      <TabPanel>
        <Tabs forceRenderTabPanel>
          <TabList>
            <Tab>Redux</Tab>
          </TabList>
          <TabPanel>
            1234
        </TabPanel>
        </Tabs>
      </TabPanel>
    </Tabs>
  )
}



export default TabComponent
