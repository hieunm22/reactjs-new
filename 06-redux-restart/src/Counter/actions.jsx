

const actions = store => ({
  increment: state => ({ count: state.count + 1 }),
  incrementOf: (state, value) => ({ count: state.count + value }),
  //decrement: state => ({ count: state.count - 1 })
});

export default actions;