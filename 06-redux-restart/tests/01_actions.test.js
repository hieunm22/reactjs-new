// import { describe, it } from 'jest'
import * as actions from '../Control/actions'

it('should multiply', () => {
  const fakeState = { count: 2 }
  const result = actions.multiplier(fakeState)

  expect(result.count).toEqual(8)
})
