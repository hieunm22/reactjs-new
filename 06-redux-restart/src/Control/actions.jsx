export const decrement = state => ({ count: state.count - 1 })

export const multiplier = state => ({ count: state.count * 4 })

export const logarithm = state => ({ count: Math.log(state.count) })