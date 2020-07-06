

const actions = store => ({
  createTask: (state, value) => ({ items: [...state.items, { value }] }),
});

export default actions;