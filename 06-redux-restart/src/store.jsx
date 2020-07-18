import createStore from "redux-zero";

const initialState = {
  count: 1,
  items: [
    //{ value: 'hieu' },
  ],
  text: 'hieu'
};
const store = createStore(initialState);

export default store;
