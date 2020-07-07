const actions = store => ({
    increment: state => ({ count: state.count + 1 }),
    incrementOf: (state, value) => ({ count: state.count + value }),
    decrement: state => ({ count: state.count - 1 }),
    multiply: state => ({ count: state.count * 4 }),
    createTask: (state, value) => ({ items: [...state.items, { value }] }),
    removeTask: (state, index) => ({ items: state.items.filter((_, i) => i !== index - 1) }),
})

export default actions

