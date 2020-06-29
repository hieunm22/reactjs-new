// can be call everywhere imports this
const actions = store => ({
  dcmm: () => { console.log('dcmm') },
  clgt: p1 => { alert(p1) },
  textChanged: (state, e) => { 
    store.setState({ ... { content: e.target.value, color: state.define.color } })
  }
});
  
export default actions