//import { describe, it } from 'jest'
import * as actions from '../actions'

const actionsObj = actions.default()
it('should increment', () => {
  // debugger
  const fakeState = { count: 1 }
  const result = actionsObj.increment(fakeState)

  expect(result.count).toEqual(2)
})
it('should increment of', () => {
  // debugger
  const fakeState = { count: 3 }
  const result = actionsObj.incrementOf(fakeState, 5)

  expect(result.count).toEqual(8)
})
it('should multiply', () => {
  // debugger
  const fakeState = { count: 2 }
  const result = actionsObj.multiply(fakeState)

  expect(result.count).toEqual(8)
})
it('should decrement', () => {
  const fakeState = { count: 10 }
  const result = actionsObj.decrement(fakeState)

  expect(result.count).toEqual(9)
})
it('should create task', () => {
  let items = []
  const fakeState = { items: [] }
  const result = actionsObj.createTask(fakeState, 'hieu')
  items = [...items, result.items[0]]

  expect(items[0]).toEqual({ value: 'hieu' })
  const newResult = actionsObj.createTask(fakeState, 'vu')
  items = [...items, newResult.items[0]]

  expect(items[1]).toEqual({ value: 'vu' })
})
it('should remove task', () => {
  const fakeState = {
    items: [
      { id: 1, value: 'hieu' },
      { id: 2, value: 'vu' },
      { id: 3, value: 'thuy' },
      { id: 4, value: 'son' },
    ]
  }
  let result = actionsObj.removeTask(fakeState, 1)
  expect(result.items.length).toEqual(3)
  expect(result.items[0].value).toEqual('vu')
  debugger
  result = actionsObj.removeTask(result, 3)
  result = actionsObj.removeTask(result, 1)
  expect(result.items.length).toEqual(1)
  expect(result.items[0].id).toEqual(3)
})
